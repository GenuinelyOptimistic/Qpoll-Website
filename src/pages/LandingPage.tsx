import {
	MessageCircle,
	DollarSign,
	Users,
	Zap,
	Star,
	TrendingUp,
} from "lucide-react";
import { PhoneMockup } from "../components/PhoneMockup";
import { QRCodeWidget } from "../components/QRCodeWidget";
import { Footer } from "../components/Footer";

const features = [
	{
		icon: MessageCircle,
		title: "Answer questions",
		description:
			"Share your real opinions on topics that matter. Every response contributes to smarter crowd-sourced decisions.",
	},
	{
		icon: DollarSign,
		title: "Earn rewards",
		description:
			"Get paid for every poll you respond to. Your insights have real value — we make sure you're compensated for them.",
	},
	{
		icon: Users,
		title: "Join the crowd",
		description:
			"Be part of a community that shapes decisions for businesses, researchers, and everyday people.",
	},
	{
		icon: Zap,
		title: "Instant payouts",
		description:
			"No waiting around. Earnings hit your account fast so you can cash out whenever you want.",
	},
	{
		icon: Star,
		title: "Top earner status",
		description:
			"Build your reputation with consistent, quality responses and unlock higher-paying opportunities.",
	},
	{
		icon: TrendingUp,
		title: "Real-time results",
		description:
			"See how your answers stack up the moment a poll closes. Watch trends unfold live.",
	},
];

export function LandingPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full px-6 pt-16 pb-24 md:pt-24 md:pb-32 gap-12 md:gap-16">
				{/* Left: Copy */}
				<div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm mb-8">
						<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
						$349 USD payed out this week
					</div>

					<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
						Get paid for{" "}
						<span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
							your responses
						</span>
					</h1>

					<p className="text-lg text-gray-500 font-light mb-10 max-w-md leading-relaxed">
						Answer polls, share your opinions, and earn real money.
						Knoli turns crowd-sourced insights into rewards — for
						everyone.
					</p>

					{/* Store Buttons */}
					<div className="flex flex-row gap-3">
						<button className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md">
							<svg
								width="18"
								height="22"
								viewBox="0 0 19 23"
								fill="none"
							>
								<path
									d="M25.9622213,14.5414694 C25.8580047,14.6049031 23.5789072,15.9674258 23.60368,18.7680702 C23.6318697,22.1248463 26.4901382,23.2345028 26.5251618,23.2466682 C26.5080771,23.3248742 26.0775429,24.8481537 25.0054787,26.3948949 C24.110241,27.7565486 23.1722916,29.0877888 21.6825067,29.1121196 C20.2354336,29.1460089 19.7485199,28.2457707 18.0887424,28.2457707 C16.4135887,28.2457707 15.8950684,29.0877888 14.5069374,29.1460089 C13.088054,29.1990152 12.0040305,27.6922459 11.0763319,26.3427576 C9.2217889,23.5872989 7.77813269,18.5777689 9.71382794,15.1688554 C10.6517774,13.4969845 12.3619547,12.4203484 14.1900164,12.3916728 C15.6106083,12.3621283 16.928692,13.3675101 17.8017196,13.3675101 C18.6576626,13.3675101 20.2875419,12.1648754 21.967821,12.3447492 C22.670856,12.3656041 24.671473,12.6271598 25.9622213,14.5414694 Z M20.8701298,10.5321075 C20.0910679,11.4671039 18.8447399,12.1822545 17.6308728,12.0901452 C17.4719851,10.8284214 18.0870339,9.4867537 18.7755469,8.66819737 C19.5537545,7.73928366 20.9051534,7.02760889 21.9857599,6.97894737 C22.1275629,8.29020161 21.6167307,9.58233883 20.8701298,10.5321075 Z"
									fill="white"
									transform="translate(-951 -417)"
								/>
							</svg>
							<div className="flex flex-col items-start">
								<span className="text-[9px] leading-none font-medium opacity-80">
									Download on the
								</span>
								<span className="text-base font-bold leading-none mt-0.5">
									App Store
								</span>
							</div>
						</button>

						<button className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md">
							<svg
								viewBox="0 0 24 24"
								className="w-5 h-5 fill-white"
							>
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

					{/* Social proof */}
					<div className="flex items-center gap-3 mt-8">
						<div className="flex -space-x-2">
							{[
								"bg-purple-400",
								"bg-pink-400",
								"bg-orange-400",
								"bg-blue-400",
							].map((c, i) => (
								<div
									key={i}
									className={`w-7 h-7 rounded-full ${c} border-2 border-white`}
								/>
							))}
						</div>
						<p className="text-sm text-gray-500">
							<span className="font-semibold text-gray-800">
								2,400+
							</span>{" "}
							people earning this week
						</p>
					</div>
				</div>

				{/* Right: Phone Mockup */}
				<div className="relative z-10 flex-1 flex justify-center md:justify-center">
					<div className="relative">
						<div className="relative z-10">
							{/* <PhoneMockup /> */}
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-gray-50 py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<p className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-3">
							Why Knoli
						</p>
						<h2 className="text-4xl font-bold tracking-tight text-gray-900">
							Your opinion is worth more than you think
						</h2>
						<p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg font-light">
							Knoli is the first platform that pays you fairly for
							crowd-sourced insights.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{features.map(({ icon: Icon, title, description }) => (
							<div
								key={title}
								className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4">
									<Icon className="w-5 h-5 text-purple-600" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									{title}
								</h3>
								<p className="text-gray-500 text-sm leading-relaxed">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Download CTA Section */}
			<section className="py-24 px-6 relative overflow-hidden">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-t from-purple-100 via-pink-50 to-transparent opacity-60 blur-3xl" />
				</div>
				<div className="relative z-10 max-w-xl mx-auto text-center">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
						Start earning today
					</h2>
					<p className="text-gray-500 text-lg font-light mb-8">
						Download Knoli, answer your first poll, and get paid.
						It's that simple.
					</p>
					<div className="flex flex-row justify-center gap-3">
						<button className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md">
							<svg
								width="18"
								height="22"
								viewBox="0 0 19 23"
								fill="none"
							>
								<path
									d="M25.9622213,14.5414694 C25.8580047,14.6049031 23.5789072,15.9674258 23.60368,18.7680702 C23.6318697,22.1248463 26.4901382,23.2345028 26.5251618,23.2466682 C26.5080771,23.3248742 26.0775429,24.8481537 25.0054787,26.3948949 C24.110241,27.7565486 23.1722916,29.0877888 21.6825067,29.1121196 C20.2354336,29.1460089 19.7485199,28.2457707 18.0887424,28.2457707 C16.4135887,28.2457707 15.8950684,29.0877888 14.5069374,29.1460089 C13.088054,29.1990152 12.0040305,27.6922459 11.0763319,26.3427576 C9.2217889,23.5872989 7.77813269,18.5777689 9.71382794,15.1688554 C10.6517774,13.4969845 12.3619547,12.4203484 14.1900164,12.3916728 C15.6106083,12.3621283 16.928692,13.3675101 17.8017196,13.3675101 C18.6576626,13.3675101 20.2875419,12.1648754 21.967821,12.3447492 C22.670856,12.3656041 24.671473,12.6271598 25.9622213,14.5414694 Z M20.8701298,10.5321075 C20.0910679,11.4671039 18.8447399,12.1822545 17.6308728,12.0901452 C17.4719851,10.8284214 18.0870339,9.4867537 18.7755469,8.66819737 C19.5537545,7.73928366 20.9051534,7.02760889 21.9857599,6.97894737 C22.1275629,8.29020161 21.6167307,9.58233883 20.8701298,10.5321075 Z"
									fill="white"
									transform="translate(-951 -417)"
								/>
							</svg>
							<div className="flex flex-col items-start">
								<span className="text-[9px] leading-none font-medium opacity-80">
									Download on the
								</span>
								<span className="text-base font-bold leading-none mt-0.5">
									App Store
								</span>
							</div>
						</button>
						<button className="bg-gray-900 text-white rounded-xl px-5 py-3 flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-md">
							<svg
								viewBox="0 0 24 24"
								className="w-5 h-5 fill-white"
							>
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
			</section>

			<Footer />
			<QRCodeWidget />
		</div>
	);
}
