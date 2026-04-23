import { Footer } from "../components/Footer";

export function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 md:py-24">
				<h1 className="text-4xl font-bold tracking-tight mb-4">
					Privacy Policy
				</h1>
				<p className="text-sm text-gray-400 mb-16">
					Last Updated: December 8, 2025
				</p>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						1. Information We Collect
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We collect information you provide directly to us, such as
						when you create an account, participate in polls, or contact
						us for support. This may include your username, email
						address, and any content you submit.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						2. How We Use Your Information
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We use the information we collect to provide, maintain, and
						improve our services, process transactions, send you
						technical notices and support messages, and respond to your
						comments and questions.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						3. Information Sharing
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We do not sell, trade, or otherwise transfer your personal
						information to third parties without your consent, except as
						described in this policy. We may share your information in
						response to legal requests or to protect our rights.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						4. Data Security
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We implement appropriate security measures to protect your
						personal information against unauthorized access, alteration,
						disclosure, or destruction. However, no method of
						transmission over the internet is 100% secure.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						5. Your Rights
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						You have the right to access, update, or delete your
						personal information. You can also object to or restrict
						certain processing of your information. Contact us to
						exercise these rights.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						6. Cookies and Tracking
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We use cookies and similar technologies to enhance your
						experience, analyze usage, and assist in our marketing
						efforts. You can control cookie settings through your browser
						preferences.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						7. Third-Party Services
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Our service may contain links to third-party websites or
						services. We are not responsible for the privacy practices of
						these external sites. Please review their privacy policies
						before providing any information.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						8. Children's Privacy
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Our service is not intended for children under 13. We do not
						knowingly collect personal information from children under
						13. If we become aware of such collection, we will delete the
						information promptly.
					</p>
				</section>

				<section className="mb-14">
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						9. Changes to This Policy
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						We may update this privacy policy from time to time. We will
						notify you of any changes by posting the new policy on this
						page and updating the "Last Updated" date.
					</p>
				</section>

				<section>
					<h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
						10. Contact Us
					</h2>
					<p className="text-gray-700 leading-relaxed font-light">
						Questions about this Privacy Policy? Reach us at{" "}
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
