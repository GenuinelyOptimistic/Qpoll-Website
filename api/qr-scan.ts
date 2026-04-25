import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	if (!process.env.DATABASE_URL) {
		console.error("DATABASE_URL is not set");
		return res.status(500).json({ error: "Server configuration error." });
	}

	try {
		const sql = neon(process.env.DATABASE_URL);

		await sql`
			CREATE TABLE IF NOT EXISTS qr_scans (
				id SERIAL PRIMARY KEY,
				scanned_at TIMESTAMPTZ DEFAULT NOW(),
				user_agent TEXT,
				ip_address TEXT
			)
		`;

		const userAgent = req.headers["user-agent"] ?? null;
		const ipAddress =
			(req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0].trim() ??
			req.socket?.remoteAddress ??
			null;

		await sql`
			INSERT INTO qr_scans (user_agent, ip_address)
			VALUES (${userAgent}, ${ipAddress})
		`;

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Database error:", error);
		return res.status(500).json({ error: "Failed to log scan." });
	}
}
