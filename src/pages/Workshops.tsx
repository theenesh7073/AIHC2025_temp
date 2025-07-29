import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Workshops = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pre-Conference Workshop</h1>
          <p className="text-xl mb-4">Date: 9th December, 2025</p>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">AI/ML Basics for Healthcare</h2>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Date:</strong> 9th December, 2025
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Workshop Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive workshop is designed to introduce healthcare professionals, researchers, and students to the fundamental concepts of Artificial Intelligence and Machine Learning in the context of healthcare applications. Participants will gain hands-on experience with practical tools and techniques used in modern healthcare AI systems.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">What You'll Learn</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Introduction to AI/ML fundamentals and their applications in healthcare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Medical image analysis and computer vision techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Natural Language Processing for clinical text and medical records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Predictive modeling for disease diagnosis and prognosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Ethical considerations and regulatory compliance in healthcare AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Hands-on exercises with real healthcare datasets</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Who Should Attend</h3>
                <p className="text-gray-700 mb-3">
                  This workshop is ideal for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Healthcare professionals interested in AI applications</li>
                  <li>• Computer science students and researchers</li>
                  <li>• Medical students and residents</li>
                  <li>• Healthcare administrators and policy makers</li>
                  <li>• Anyone with basic programming knowledge wanting to explore healthcare AI</li>
                </ul>
              </div>
              
              <div className="text-center pt-6">
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Registration:</strong> Details will be announced soon
                </p>
                <p className="text-sm text-gray-500">
                  Limited seats available. Early registration recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Workshops;