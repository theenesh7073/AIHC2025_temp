import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Accommodation</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-6">Accommodation Details</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Yet to be announced</h3>
              <p className="text-yellow-700 text-lg">
                Accommodation information for AIHC 2025 will be announced soon. 
                Please check back later for updates on hotel options, rates, and booking procedures.
              </p>
            </div>
            
            <div className="mt-8 text-gray-600">
              <p className="mb-2">For any immediate accommodation-related queries, please contact:</p>
              <p className="font-medium">aihc2025@nitc.ac.in</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Accommodation; 