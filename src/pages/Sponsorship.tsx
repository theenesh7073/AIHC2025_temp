import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";
import { useEffect } from "react";

const Sponsorship = () => {
  useEffect(() => {
    // Redirect to the sponsorship PDF
    window.open("/AIHC 2025_Brochure_For_Sponsorship.pdf", "_blank");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sponsorship</h1>
          <p className="text-xl mb-6">Redirecting to Sponsorship Brochure...</p>
          <p className="text-lg mb-4">If you are not redirected automatically, please click the button below:</p>
          <a
            href="/AIHC 2025_Brochure_For_Sponsorship.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            Open Sponsorship Brochure
          </a>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Sponsorship;