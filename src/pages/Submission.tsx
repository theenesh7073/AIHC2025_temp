import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Submission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Submission</h1>
          <button 
            disabled
            className="bg-gray-400 text-gray-600 px-8 py-3 rounded-md font-medium cursor-not-allowed opacity-60 inline-block"
          >
            Submit your Paper
          </button>
          <p className="text-lg mt-4 text-gray-200">Scheduled to commence shortly</p>
        </div>
      </section>

      {/* Registration Deadlines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center mb-4">REGISTRATION DEADLINES</h3>
            <div className="text-center space-y-2">
              <p className="text-red-600 font-medium">Submission Deadline: 31st August, 2025</p>
              <p className="text-red-600 font-medium">Acceptance Notification: 15th October, 2025</p>
              <p className="text-red-600 font-medium">Camera Ready Submission: 1st November, 2025</p>
              <p className="text-red-600 font-medium">Conference: 10-12 December, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Submission;