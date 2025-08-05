import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Workshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero 
        title="Pre-Conference Workshops"
        subtitle="Hands-on Learning Experience"
        description="Join our comprehensive workshops designed to provide practical knowledge and skills in AI for healthcare applications."
      />

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
                  This comprehensive workshop is designed to introduce healthcare professionals, researchers, and students to the fundamental concepts of Artificial Intelligence and Machine Learning in the context of healthcare applications.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">What You'll Learn</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Introduction to AI/ML fundamentals and their applications in healthcare</span>
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

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Workshops;