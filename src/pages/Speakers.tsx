import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Speakers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-4 left-4 w-32 h-32 opacity-20">
          <div className="grid grid-cols-8 gap-1">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AIHC 2025 Keynote Speakers</h1>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Placeholder cards for speakers */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-card rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-24 bg-gray-100 rounded mb-2" />
                <div className="h-3 w-20 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Speakers;