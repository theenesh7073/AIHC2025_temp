import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Visa = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2c2c7a] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Visa Information</h1>
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
      <BackToTop />
    </div>
  );
};

export default Visa; 