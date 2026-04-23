import { StoreButtons } from "./StoreButtons";

export function DownloadCTA() {
	return (
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
				<StoreButtons justify="center" />
			</div>
		</section>
	);
}
