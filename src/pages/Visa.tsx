import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Visa = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Visa Information</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#23235a]">Travel Requirements for International Attendees</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            All foreign nationals entering India are required to possess a valid international travel document in the form of a national passport with a valid visa from an Indian Mission/Post or eVisa (Limited Categories) from Bureau of Immigration, Ministry of Home Affairs, INDIA.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Authorized portal for Visa Application to India: <a href="https://indianvisaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#2c2c7a] underline">indianvisaonline.gov.in</a>
          </p>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Visa; 