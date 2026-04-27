import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const MESSAGE = "https://knoli.app/qr";

export function QRCodeWidget() {
	const [atBottom, setAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolledToBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 80;
			setAtBottom(scrolledToBottom);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className="fixed right-6 z-50 hidden md:flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-lg p-4 w-[160px] gap-3 hover:scale-110"
			style={{
				bottom: atBottom ? "90px" : "20px",
				transition: "bottom 0.35s ease, transform 0.2s ease-in-out",
			}}
		>
			<QRCodeSVG
				value={MESSAGE}
				size={112}
				bgColor="#ffffff"
				fgColor="#000000"
				level="M"
			/>
			<div className="text-center">
				<p className="text-[11px] font-semibold text-gray-900 leading-tight">
					Scan to Start Earning
				</p>
				<p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
					Join Knoli-SMS Beta
				</p>
			</div>
		</div>
	);
}
