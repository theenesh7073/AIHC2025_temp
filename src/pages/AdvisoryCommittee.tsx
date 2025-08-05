import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const AdvisoryCommittee = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Advisory Committee</h1>
        </div>
      </section>
      {/* Committee Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Chief Patron */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Chief Patron</h2>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Prasad Krishna</h3>
                <p className="text-gray-600">Director, NIT Calicut</p>
              </div>
            </div>
          </div>

          {/* International Advisory Committee */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">International Advisory Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Ganesh Gopalakrishnan</h3>
                <p className="text-gray-600">University of Utah</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Aditya Bhaskara</h3>
                <p className="text-gray-600">University of Utah</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Hari Sundar</h3>
                <p className="text-gray-600">University of Utah</p>
              </div>
            </div>
          </div>

          {/* National Advisory Committee */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">National Advisory Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Rabibrata Mukherjee</h3>
                <p className="text-gray-600">IIT KGP</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. P. S. Sathidevi</h3>
                <p className="text-gray-600">NIT Calicut</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Dr. Subashini R</h3>
                <p className="text-gray-600">NIT Calicut</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Narayanan Krishnan</h3>
                <p className="text-gray-600">IIT Palakkad, Kerala</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. K.S. Shaji</h3>
                <p className="text-gray-600">KUHS, Kerala</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. K.G. Sajeeth Kumar</h3>
                <p className="text-gray-600">GMCH Kozhikode</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. Santhosh Kuriakose</h3>
                <p className="text-gray-600">GMC Kozhikode</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. Narayanankutty Warrier</h3>
                <p className="text-gray-600">MVRCCRI Kozhikode</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Dr. Debashree Guha Adhya</h3>
                <p className="text-gray-600">IIT KGP</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Deepak Mishra</h3>
                <p className="text-gray-600">IIST Kerala</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. Biju Pottekkatt</h3>
                <p className="text-gray-600">Surgical Gastroenterology, JIPMER</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. Pranab Dey</h3>
                <p className="text-gray-600">Professor, Oncopathology, Homi Bahabha Cancer Research Center, Tata Memorial Cancer Center, New Chandigarh</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. Malla Bhaskara Rao</h3>
                <p className="text-gray-600">NIMHANS</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Bhaskar Biswas</h3>
                <p className="text-gray-600">Professor, IIT BHU</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Mr. Ananda Bhattacharjee</h3>
                <p className="text-gray-600">Lenovo</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Mr. Unnikrishnan A R</h3>
                <p className="text-gray-600">Head Developer Relations - South Asia, NVIDIA</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Prof. Dr. V R Rajendran</h3>
                <p className="text-gray-600">Principal, KMCT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AdvisoryCommittee; 