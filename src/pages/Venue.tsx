import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";
import nitCalicutImg from "../../nitc campus.jpg";

const Venue = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      {/* Hero Section with Background Image */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${nitCalicutImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Venue: NIT Calicut</h1>
        </div>
      </section>
      {/* About NIT Calicut */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-[#23235a]">About NIT Calicut</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            National Institute of Technology Calicut (NITC) is one of India’s premier technical institutions, located in Kerala. Renowned for its academic excellence, vibrant campus life, and cutting-edge research, NITC attracts students and scholars from across the country and abroad. The campus is set amidst lush greenery at the foothills of the Western Ghats, providing an inspiring environment for learning and innovation.
          </p>
        </div>
      </section>
      {/* How to Reach Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-[#23235a]">How to Reach</h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-6">
            <li><b>By Air:</b> The nearest airport is Calicut International Airport (CCJ), about 30 km from the campus.</li>
            <li><b>By Train:</b> Kozhikode Railway Station is the closest major railhead, located about 22 km from NIT Calicut.</li>
            <li><b>By Road:</b> The campus is well connected by road. Taxis and buses are available from Kozhikode city and nearby towns.</li>
          </ul>
          <a
            href="https://goo.gl/maps/6Qw2Qw2Qw2Qw2Qw2A" // Replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-[#2c2c7a] text-white font-semibold rounded shadow hover:bg-[#23235a] transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default Venue; 