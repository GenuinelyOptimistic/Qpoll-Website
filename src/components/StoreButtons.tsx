import appleSvg from "../../assets/apple.svg";
import { useModal } from "../context/ModalContext";

export function StoreButtons({
	justify = "start",
}: {
	justify?: "start" | "center";
}) {
	const { open } = useModal();
	const justifyClass =
		justify === "center" ? "justify-center" : "justify-start";
	return (
		<div className="flex flex-col gap-3">
			<div className={`flex flex-row gap-3 ${justifyClass}`}>
				<button
					onClick={open}
					className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md"
				>
					<img src={appleSvg} className="w-5 h-5" alt="Apple logo" />
					<div className="flex flex-col items-start">
						<span className="text-[9px] leading-none font-medium opacity-80">
							Download on the
						</span>
						<span className="text-base font-bold leading-none mt-0.5">
							App Store
						</span>
					</div>
				</button>

				<button
					onClick={open}
					className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md"
				>
					<svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
						<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
					</svg>
					<div className="flex flex-col items-start">
						<span className="text-[9px] leading-none font-medium opacity-80 uppercase">
							Get it on
						</span>
						<span className="text-base font-bold leading-none mt-0.5">
							Google Play
						</span>
					</div>
				</button>
			</div>
		</div>
	);
}
