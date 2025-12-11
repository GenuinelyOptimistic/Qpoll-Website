import { Footer } from '../components/Footer';
import { PhoneMockup } from '../components/PhoneMockup';
export function LandingPage() {
  return <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full px-6 py-12 md:py-24 gap-12 md:gap-24">
        {/* Left Column: Phone Mockup */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="relative">
            {/* Shadow phone behind */}
            <div className="absolute top-4 -left-12 opacity-90 transform scale-95 origin-right hidden md:block">
              <div className="bg-gray-900 rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl"></div>
            </div>

            {/* Main Phone */}
            <div className="relative z-10">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          {/* Logo */}
          <h1 className="mb-4 text-6xl font-bold tracking-tighter text-gray-900 logo">
            StreetTalk
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-1xl text-gray-400 font-light mb-10 max-w-md">
            Help companies quickly crowd source information to make smarter
            decisions.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-row gap-4">
            {/* App Store */}
            <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="./assets/apple.svg" alt="Apple Logo" className="w-7 h-7" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-none font-medium">
                  Download on the
                </span>
                <span className="text-lg font-bold leading-none mt-1">
                  App Store
                </span>
              </div>
            </button>

            {/* Google Play */}
            <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 relative flex items-center justify-center">
                {/* Custom Play Store Icon shape using CSS/SVG since Lucide Play is simple */}
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-none font-medium uppercase">
                  Get it on
                </span>
                <span className="text-lg font-bold leading-none mt-1">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}