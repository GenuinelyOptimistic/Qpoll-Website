import { Footer } from "../components/Footer";
import { StoreButtons } from "../components/StoreButtons";

export function PollsPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm mb-10">
					<span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
					Coming Soon
				</div>

				<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 max-w-2xl">
					<span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
						Live polls
					</span>{" "}
					are coming soon to the web
				</h1>

				<p className="text-lg text-gray-500 font-light mb-12 max-w-md leading-relaxed">
					A web view of Knoli polls is on the way. For now, download
					the app to answer polls, share your opinions, and earn real
					money.
				</p>

				<StoreButtons />

				{/* Poll preview cards */}
				<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full opacity-40 select-none pointer-events-none">
					{[
						{
							question: "Which social platform do you use most?",
							options: ["Instagram", "TikTok", "X", "Facebook"],
							votes: "1.2k",
						},
						{
							question:
								"How do you prefer to pay at restaurants?",
							options: [
								"Card",
								"Cash",
								"Apple/Google Pay",
								"Split app",
							],
							votes: "843",
						},
						{
							question: "What's your go-to weekend activity?",
							options: [
								"Outdoors",
								"Gaming",
								"Movies",
								"Socializing",
							],
							votes: "2.1k",
						},
					].map((poll, i) => (
						<div
							key={i}
							className="bg-white border border-gray-200 rounded-2xl p-5 text-left shadow-sm"
						>
							<p className="text-sm font-semibold text-gray-800 mb-4 leading-snug">
								{poll.question}
							</p>
							<div className="space-y-2">
								{poll.options.map((opt, j) => (
									<div
										key={j}
										className="relative h-9 rounded-lg overflow-hidden bg-gray-100"
									>
										<div
											className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg"
											style={{
												width: `${25 + (j === 0 ? 35 : j === 1 ? 20 : j === 2 ? 15 : 5)}%`,
											}}
										/>
										<span className="absolute inset-0 flex items-center px-3 text-xs text-gray-700 font-medium">
											{opt}
										</span>
									</div>
								))}
							</div>
							<p className="text-xs text-gray-400 mt-3">
								{poll.votes} responses
							</p>
						</div>
					))}
				</div>

				<p className="mt-8 text-xs text-gray-400 tracking-wide uppercase">
					Preview only — real polls available in the app
				</p>
			</main>

			<Footer />
		</div>
	);
}
