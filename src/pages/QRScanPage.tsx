import { useEffect } from "react";

const SMS_NUMBER = "+18683311332";
const SMS_BODY = "Sign me up for Knoli-SMS!";
const SMS_HREF = `sms:${SMS_NUMBER}?body=${encodeURIComponent(SMS_BODY)}`;

export function QRScanPage() {
	useEffect(() => {
		fetch("/api/qr-scan", { method: "POST" }).catch(() => {});
		window.location.href = SMS_HREF;
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white px-6 text-center">
			<p className="text-lg font-semibold text-gray-900">Opening SMS…</p>
			<p className="text-sm text-gray-500">
				If your SMS app didn't open,{" "}
				<a href={SMS_HREF} className="text-blue-600 underline">
					tap here to text us
				</a>
				.
			</p>
		</div>
	);
}
