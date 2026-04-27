import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { email, age, gender, industry, device } = req.body ?? {};

	if (!email || !age || !gender || !industry || !device) {
		return res.status(400).json({ error: "All fields are required." });
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(String(email))) {
		return res.status(400).json({ error: "Please enter a valid email address." });
	}

	if (!process.env.DATABASE_URL) {
		console.error("DATABASE_URL is not set");
		return res.status(500).json({ error: "Server configuration error." });
	}

	try {
		const sql = neon(process.env.DATABASE_URL);

		await sql`
			CREATE TABLE IF NOT EXISTS beta_signups (
				id SERIAL PRIMARY KEY,
				email TEXT NOT NULL UNIQUE,
				age TEXT NOT NULL,
				gender TEXT NOT NULL,
				industry TEXT NOT NULL,
				device TEXT NOT NULL,
				created_at TIMESTAMPTZ DEFAULT NOW()
			)
		`;

		const result = await sql`
			INSERT INTO beta_signups (email, age, gender, industry, device)
			VALUES (${String(email)}, ${String(age)}, ${String(gender)}, ${String(industry)}, ${String(device)})
			ON CONFLICT (email) DO NOTHING
			RETURNING id
		`;

		if (result.length === 0) {
			return res.status(409).json({
				error: "This email address has already been registered.",
			});
		}

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Database error:", error);
		return res
			.status(500)
			.json({ error: "Failed to save your information. Please try again." });
	}
}
