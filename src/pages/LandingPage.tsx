import { QRCodeWidget } from "../components/QRCodeWidget";
import { Footer } from "../components/Footer";
import { StoreButtons } from "../components/StoreButtons";
import { PhoneMockup } from "../components/PhoneMockup";
import { useSEO } from "../utils/useSEO";
// import { FeaturesSection } from "../components/FeaturesSection";
// import { DownloadCTA } from "../components/DownloadCTA";

export function LandingPage() {
	useSEO({
		title: "Home",
		description:
			"Answer polls, share your opinions, and earn real money. Knoli turns crowd-sourced insights into rewards for everyone.",
		keywords:
			"polls, earn money, paid surveys, opinion polls, get paid for opinions, crowd-sourced insights, polling app, survey rewards, make money online, paid polling",
		canonicalPath: "/",
	});
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full px-6 pt-16 pb-24 md:pt-24 md:pb-32 gap-12 md:gap-16">
				{/* Left: Copy */}
				<div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
					{/* Badge */}
					{/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm mb-8">
						<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						$6.5 USD paid out so far
					</div> */}

					<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
						Get paid for{" "}
						<span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
							your responses
						</span>
					</h1>

					<p className="text-lg text-gray-500 font-light mb-6 max-w-md leading-relaxed">
						Answer polls, share your opinions, and earn real money.
						Knoli turns crowd-sourced insights into rewards for
						everyone.
					</p>

					<StoreButtons />

					{/* Social proof */}
					<div className="flex items-center gap-3 mt-8">
						<div className="flex -space-x-2">
							{[
								{ seed: "Felix", style: "avataaars" },
								{ seed: "Mia", style: "lorelei" },
								{ seed: "Jordan", style: "micah" },
								{ seed: "Riley", style: "pixel-art" },
							].map(({ seed, style }, i) => (
								<img
									key={i}
									src={`https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`}
									alt={seed}
									className="w-7 h-7 rounded-full border-2 border-white bg-gray-100"
								/>
							))}
						</div>
						<p className="text-sm text-gray-500">
							<span className="font-semibold text-gray-800">
								14
							</span>{" "}
							active users so far
							{/* people earning this week */}
						</p>
					</div>
				</div>

				{/* Right: Phone Mockup */}
				<div className="relative z-10 flex-1 flex justify-center md:justify-center">
					<div className="relative">
						<div className="relative z-10">
							<PhoneMockup />
						</div>
					</div>
				</div>
			</section>
			{/* <FeaturesSection /> */}
			{/* <DownloadCTA /> */}
			<Footer />
			<QRCodeWidget />
		</div>
	);
}
