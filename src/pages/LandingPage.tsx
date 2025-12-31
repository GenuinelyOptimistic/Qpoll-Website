import { Footer } from "../components/Footer";
import { PhoneMockup } from "../components/PhoneMockup";
export function LandingPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full px-6 py-12 md:py-24 gap-12 md:gap-24">
				{/* Left Column: Phone Mockup */}
				<div className="flex-1 w-full flex justify-center md:justify-end">
					<div className="relative">
						{/* Shadow phone behind */}
						<div className="absolute top-4 -left-12 opacity-90 transform scale-95 origin-right hidden md:block">
							<div className="bg-gray-900 rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl"></div>
						</div>

						{/* Main Phone */}
						<div className="relative z-10">
							<PhoneMockup />
						</div>
					</div>
				</div>

				{/* Right Column: Content */}
				<div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
					{/* Logo */}
					<h1 className="mb-4 text-6xl font-bold tracking-tighter text-gray-900 logo">
						StreetTalk
					</h1>

					{/* Tagline */}
					<p className="text-xl md:text-1xl text-gray-400 font-light mb-10 max-w-md">
						Help people quickly crowd source information to make
						smarter decisions.
					</p>

					{/* Store Buttons */}
					<div className="flex flex-row gap-4">
						{/* App Store */}
						<button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
							<svg width="19px" height="23px" viewBox="0 0 19 23">
								<g
									id="Website"
									stroke="none"
									stroke-width="1"
									fill="none"
									fill-rule="evenodd"
								>
									<g
										id="Artboard"
										transform="translate(-959.000000, -424.000000)"
										fill="#FFFFFF"
									>
										<g
											id="apple"
											transform="translate(951.000000, 417.000000)"
										>
											<path d="M25.9622213,14.5414694 C25.8580047,14.6049031 23.5789072,15.9674258 23.60368,18.7680702 C23.6318697,22.1248463 26.4901382,23.2345028 26.5251618,23.2466682 C26.5080771,23.3248742 26.0775429,24.8481537 25.0054787,26.3948949 C24.110241,27.7565486 23.1722916,29.0877888 21.6825067,29.1121196 C20.2354336,29.1460089 19.7485199,28.2457707 18.0887424,28.2457707 C16.4135887,28.2457707 15.8950684,29.0877888 14.5069374,29.1460089 C13.088054,29.1990152 12.0040305,27.6922459 11.0763319,26.3427576 C9.2217889,23.5872989 7.77813269,18.5777689 9.71382794,15.1688554 C10.6517774,13.4969845 12.3619547,12.4203484 14.1900164,12.3916728 C15.6106083,12.3621283 16.928692,13.3675101 17.8017196,13.3675101 C18.6576626,13.3675101 20.2875419,12.1648754 21.967821,12.3447492 C22.670856,12.3656041 24.671473,12.6271598 25.9622213,14.5414694 Z M20.8701298,10.5321075 C20.0910679,11.4671039 18.8447399,12.1822545 17.6308728,12.0901452 C17.4719851,10.8284214 18.0870339,9.4867537 18.7755469,8.66819737 C19.5537545,7.73928366 20.9051534,7.02760889 21.9857599,6.97894737 C22.1275629,8.29020161 21.6167307,9.58233883 20.8701298,10.5321075 Z"></path>
										</g>
									</g>
								</g>
							</svg>
							<div className="flex flex-col items-start">
								<span className="text-[10px] leading-none font-medium">
									Download on the
								</span>
								<span className="text-lg font-bold leading-none mt-1">
									App Store
								</span>
							</div>
						</button>

						{/* Google Play */}
						<button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
							<div className="w-7 h-7 relative flex items-center justify-center">
								{/* Custom Play Store Icon shape using CSS/SVG since Lucide Play is simple */}
								<svg
									viewBox="0 0 24 24"
									className="w-full h-full fill-current"
								>
									<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
								</svg>
							</div>
							<div className="flex flex-col items-start">
								<span className="text-[10px] leading-none font-medium uppercase">
									Get it on
								</span>
								<span className="text-lg font-bold leading-none mt-1">
									Google Play
								</span>
							</div>
						</button>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
