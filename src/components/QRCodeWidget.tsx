import { QRCodeSVG } from "qrcode.react";

const APP_DOWNLOAD_URL = "https://streettalk.app/download";

export function QRCodeWidget() {
	return (
		<div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-lg p-4 w-[160px] gap-3 transition-transform duration-200 ease-in-out hover:scale-110">
			<QRCodeSVG
				value={APP_DOWNLOAD_URL}
				size={112}
				bgColor="#ffffff"
				fgColor="#000000"
				level="M"
			/>
			<div className="text-center">
				<p className="text-[11px] font-semibold text-gray-900 leading-tight">
					Scan to download
				</p>
				<p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
					Get the StreetTalk app
				</p>
			</div>
		</div>
	);
}
