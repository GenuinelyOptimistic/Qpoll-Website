import {
	MessageCircle,
	DollarSign,
	Users,
	Zap,
	Star,
	TrendingUp,
} from "lucide-react";

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

export function FeaturesSection() {
	return (
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
	);
}
