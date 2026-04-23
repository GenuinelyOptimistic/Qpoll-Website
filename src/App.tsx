import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { AboutPage } from "./pages/AboutPage";
import { PollsPage } from "./pages/PollsPage";

export function App() {
	return (
		<BrowserRouter>
			<div className="relative">
				<Header />
				<div className="pt-[73px]">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/terms" element={<TermsPage />} />
						<Route
							path="/privacy"
							element={<PrivacyPolicyPage />}
						/>
						<Route path="/about" element={<AboutPage />} />
						<Route path="/polls" element={<PollsPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
