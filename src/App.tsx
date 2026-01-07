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
		<nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
			<div className="max-w-6xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
					>
						StreetTalk
					</Link>
					<div className="flex gap-6">
						<Link
							to="/"
							className={`px-4 py-2 rounded-lg transition-colors ${
								location.pathname === "/"
									? "bg-gray-900 text-white"
									: "text-gray-700 hover:bg-gray-100"
							}`}
						>
							Home
						</Link>
						<Link
							to="/terms"
							className={`px-4 py-2 rounded-lg transition-colors ${
								location.pathname === "/terms"
									? "bg-gray-900 text-white"
									: "text-gray-700 hover:bg-gray-100"
							}`}
						>
							Terms of Use
						</Link>
						<Link
							to="/privacy"
							className={`px-4 py-2 rounded-lg transition-colors ${
								location.pathname === "/privacy"
									? "bg-gray-900 text-white"
									: "text-gray-700 hover:bg-gray-100"
							}`}
						>
							Privacy Policy
						</Link>
					</div>
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

				{/* Page Content */}
				<div className="pt-20">
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
