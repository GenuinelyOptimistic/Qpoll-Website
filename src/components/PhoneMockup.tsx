import screenshot from "../../assets/imgs/sample.png";

export function PhoneMockup() {
	return (
		<div
			className="relative select-none"
			style={{ width: 300, height: 650 }}
		>
			{/* Outer titanium frame */}
			<div
				className="absolute inset-0 rounded-[44px]"
				style={{
					background:
						"linear-gradient(145deg, #d4d4d4 0%, #a8a8a8 30%, #8c8c8c 50%, #b0b0b0 70%, #d0d0d0 100%)",
					boxShadow:
						"0 0 0 1px rgba(0,0,0,0.25), 0 30px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.4)",
				}}
			/>

			{/* Inner glass screen recess */}
			<div
				className="absolute rounded-[40px] overflow-hidden bg-black"
				style={{ inset: 4 }}
			>
				{/* Screenshot fills the screen */}
				<img
					src={screenshot}
					alt="Knoli app screenshot"
					className="w-full h-full object-cover object-top"
					draggable={false}
				/>

				{/* Dynamic Island */}
				<div
					className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-10"
					style={{ width: 100, height: 30 }}
				/>

				{/* Screen glare */}
				<div
					className="absolute inset-0 pointer-events-none rounded-[38px]"
					style={{
						background:
							"linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
					}}
				/>
			</div>

			{/* Left side — volume up */}
			<div
				className="absolute rounded-l-sm"
				style={{
					left: -3,
					top: 110,
					width: 4,
					height: 30,
					background: "linear-gradient(to right, #888, #bbb)",
					boxShadow: "-1px 0 2px rgba(0,0,0,0.3)",
				}}
			/>
			{/* Left side — volume down */}
			<div
				className="absolute rounded-l-sm"
				style={{
					left: -3,
					top: 155,
					width: 4,
					height: 30,
					background: "linear-gradient(to right, #888, #bbb)",
					boxShadow: "-1px 0 2px rgba(0,0,0,0.3)",
				}}
			/>
			{/* Left side — action button */}
			<div
				className="absolute rounded-l-sm"
				style={{
					left: -3,
					top: 72,
					width: 4,
					height: 22,
					background: "linear-gradient(to right, #888, #bbb)",
					boxShadow: "-1px 0 2px rgba(0,0,0,0.3)",
				}}
			/>

			{/* Right side — power/sleep */}
			<div
				className="absolute rounded-r-sm"
				style={{
					right: -3,
					top: 130,
					width: 4,
					height: 52,
					background: "linear-gradient(to left, #888, #bbb)",
					boxShadow: "1px 0 2px rgba(0,0,0,0.3)",
				}}
			/>

			{/* Bottom — USB-C cutout hint */}
			<div
				className="absolute bottom-[10px] left-1/2 -translate-x-1/2 rounded-sm bg-black"
				style={{ width: 40, height: 5 }}
			/>
		</div>
	);
}
