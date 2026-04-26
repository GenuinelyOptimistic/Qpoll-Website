import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useSEO } from "../utils/useSEO";

export function NotFoundPage() {
	useSEO({
		title: "Page Not Found",
		description: "The page you're looking for doesn't exist.",
	});
	return (
		<div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
			<main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 md:py-24 flex flex-col justify-center">
				<p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
					404
				</p>
				<h1 className="text-4xl font-bold tracking-tight mb-6">
					Page not found
				</h1>
				<p className="text-gray-600 leading-relaxed text-lg font-light mb-10">
					The page you're looking for doesn't exist or may have been moved.
				</p>
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-gray-900 font-semibold underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
				>
					Go back home
				</Link>
			</main>
			<Footer />
		</div>
	);
}
