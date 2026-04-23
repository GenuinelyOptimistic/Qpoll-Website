import { Footer } from "../components/Footer";

export function AboutPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 md:py-24">
				<h1 className="text-4xl font-bold tracking-tight mb-16">
					About Knoli
				</h1>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						Our Mission
					</h2>
					<p className="text-gray-700 leading-relaxed text-lg">
						Knoli is built to give everyone a voice. We believe that
						the best decisions big or small are made when people can
						quickly understand what others think. Our platform makes
						it effortless to create polls, gather opinions, and
						discover what the world is thinking in real time.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						What We Built
					</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						Knoli is a mobile-first and SMS-based polling platform
						where anyone can ask a question and get answers from a
						real and, engaged community. Whether you're making a
						personal choice, validating a product idea, or just
						curious what people think, Knoli gets you answers fast.
					</p>
					<p className="text-gray-700 leading-relaxed">
						We focus on simplicity. Creating a poll takes seconds.
						Voting is one tap. Results are live and honest.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						Our Values
					</h2>
					<ul className="space-y-6">
						{[
							{
								title: "Honest opinions",
								body: "We design for genuine responses, not engagement bait. Votes are anonymous by default so people answer truthfully.",
							},
							{
								title: "Privacy first",
								body: "We collect only what we need to run the service.",
							},
							{
								title: "Inclusive by design",
								body: "Knoli is for everyone. We actively moderate harmful content and work to keep the platform a safe place to share opinions.",
							},
							{
								title: "Simple and fast",
								body: "Every feature we ship has to make the core experience faster, not heavier. If it adds friction, it doesn't ship.",
							},
							{
								title: "We love feedback",
								body: "We actively seek feedback from our users to improve the platform and ensure it meets their needs. So if you think a feature is missing create a poll and tag us in the comments @knoliapp",
							},
						].map(({ title, body }) => (
							<li key={title} className="flex gap-4">
								<span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
								<div>
									<p className="font-semibold text-gray-900 mb-1">
										{title}
									</p>
									<p className="text-gray-600 leading-relaxed font-light">
										{body}
									</p>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						The Team
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Knoli is an independent, founder-led company. We're a
						small team that cares deeply about the product. We move
						fast, we listen to our users, and we're in this for the
						long term.
					</p>
				</section>

				<section>
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						Contact
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Questions, ideas, or feedback? Reach us at{" "}
						<a
							href="mailto:hello@knoli.app"
							className="text-gray-900 underline underline-offset-2 hover:text-gray-500 transition-colors"
						>
							hello@knoli.app
						</a>
						.
					</p>
				</section>
			</main>

			<Footer />
		</div>
	);
}
