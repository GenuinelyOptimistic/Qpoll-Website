import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Header() {
	const location = useLocation();

	return (
		<nav className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					to="/"
					className="text-xl font-bold text-gray-900 tracking-tight hover:opacity-70 transition-opacity"
				>
					Knoli
				</Link>

				<div className="flex items-center gap-1">
					<Link
						to="/polls"
						className={`group inline-flex items-center gap-1 text-sm transition-colors mr-4 ${
							location.pathname === "/polls"
								? "text-gray-900 font-medium"
								: "text-gray-500 hover:text-gray-900"
						}`}
					>
						Explore Polls
						<ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Link>
					<a
						href="#download"
						className="ml-2 px-4 py-2 rounded-full text-sm bg-gray-400 text-white hover:bg-gray-700 transition-colors"
					>
						Download
					</a>
				</div>
			</div>
		</nav>
	);
}
