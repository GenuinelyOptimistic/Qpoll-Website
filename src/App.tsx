import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

function Navigation() {
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
						to="/terms"
						className={`px-4 py-2 rounded-full text-sm transition-colors ${
							location.pathname === "/terms"
								? "bg-gray-900 text-white"
								: "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
						}`}
					>
						Terms
					</Link>
					<Link
						to="/privacy"
						className={`px-4 py-2 rounded-full text-sm transition-colors ${
							location.pathname === "/privacy"
								? "bg-gray-900 text-white"
								: "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
						}`}
					>
						Privacy
					</Link>
					<a
						href="#download"
						className="ml-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-gray-700 transition-colors"
					>
						Download
					</a>
				</div>
			</div>
		</nav>
	);
}

export function App() {
	return (
		<BrowserRouter>
			<div className="relative">
				<Navigation />
				<div className="pt-[73px]">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/terms" element={<TermsPage />} />
						<Route
							path="/privacy"
							element={<PrivacyPolicyPage />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
