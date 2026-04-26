import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { AboutPage } from "./pages/AboutPage";
import { PollsPage } from "./pages/PollsPage";
import { QRScanPage } from "./pages/QRScanPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ModalProvider } from "./context/ModalContext";
import { BetaAccessModal } from "./components/BetaAccessModal";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

export function App() {
	return (
		<ModalProvider>
			<BrowserRouter>
				<ScrollToTop />
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
							<Route path="/qr" element={<QRScanPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
					<BetaAccessModal />
				</div>
			</BrowserRouter>
		</ModalProvider>
	);
}
