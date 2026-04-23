import { Footer } from "../components/Footer";

export function TermsPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 md:py-24">
				<h1 className="text-4xl font-bold tracking-tight mb-4">
					Terms of Service
				</h1>
				<p className="text-sm text-gray-400 mb-16">
					Last Updated: December 8, 2025
				</p>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						1. Acceptance of Terms
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						By accessing and using this polling application, you accept
						and agree to be bound by the terms and provision of this
						agreement. If you do not agree to these terms, please do not
						use this service.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						2. Use of Service
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						You agree to use the service only for lawful purposes and in
						a way that does not infringe the rights of, restrict, or
						inhibit anyone else's use and enjoyment of the service.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						3. User Content
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Users are responsible for the polls they create and the
						content they post. We reserve the right to remove any content
						that violates these terms or is deemed inappropriate.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						4. Prohibited Content
					</h2>
					<p className="text-gray-700 leading-relaxed font-light mb-4">
						You may not create or share polls that contain:
					</p>
					<ul className="space-y-3">
						{[
							"Hate speech or discriminatory content",
							"Harassment or bullying",
							"Spam or misleading information",
							"Illegal content or activities",
							"Explicit or inappropriate material",
						].map((item) => (
							<li key={item} className="flex gap-4">
								<span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
								<p className="text-gray-600 leading-relaxed font-light">
									{item}
								</p>
							</li>
						))}
					</ul>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						5. Intellectual Property
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						The service and its original content, features, and
						functionality are owned by us and are protected by
						international copyright, trademark, and other intellectual
						property laws.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						6. Account Termination
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We reserve the right to terminate or suspend access to our
						service immediately, without prior notice or liability, for
						any reason whatsoever, including without limitation if you
						breach the Terms.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						7. Disclaimer
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Your use of the service is at your sole risk. The service is
						provided on an "AS IS" and "AS AVAILABLE" basis without
						warranties of any kind.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						8. Limitation of Liability
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						In no event shall we be liable for any indirect, incidental,
						special, consequential, or punitive damages resulting from
						your use of or inability to use the service.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						9. Changes to Terms
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We reserve the right to modify or replace these terms at any
						time. If a revision is material, we will provide at least 30
						days' notice prior to any new terms taking effect.
					</p>
				</section>

				<section>
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						10. Contact Us
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Questions about these Terms? Reach us at{" "}
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
