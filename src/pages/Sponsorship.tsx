import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sponsorship</h1>
          <p className="text-xl mb-6">Partner with AIHC 2025</p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sponsorship Information</h2>
              <p className="text-gray-600">Download our sponsorship brochure to learn about partnership opportunities</p>
              <a 
                href="/dummy-sponsorship.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Download Sponsorship PDF
              </a>
            </div>
            
            {/* PDF Embed */}
            <div className="h-96 md:h-[600px]">
              <iframe
                src="/dummy-sponsorship.pdf"
                className="w-full h-full"
                title="Sponsorship Information"
              />
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Sponsorship;