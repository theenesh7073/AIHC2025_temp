import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Registration = () => {
  const registrationCategories = [
    {
      category: "UG/PG Student Author (India)",
      earlyBirdINR: "₹5,900",
      lateRegistrationINR: "₹6,490",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "PhD Scholar (India)",
      earlyBirdINR: "₹9,440",
      lateRegistrationINR: "₹10,620",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "Academia Faculty (India)",
      earlyBirdINR: "₹11,800",
      lateRegistrationINR: "₹12,980",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "Industry Author (India)",
      earlyBirdINR: "₹15,340",
      lateRegistrationINR: "₹16,520",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "Student Author (International)",
      earlyBirdINR: "-",
      lateRegistrationINR: "-",
      earlyBirdUSD: "$75",
      lateRegistrationUSD: "$100"
    },
    {
      category: "Academic Author (International)",
      earlyBirdINR: "-",
      lateRegistrationINR: "-",
      earlyBirdUSD: "$125",
      lateRegistrationUSD: "$150"
    },
    {
      category: "Industry Author (International)",
      earlyBirdINR: "-",
      lateRegistrationINR: "-",
      earlyBirdUSD: "$200",
      lateRegistrationUSD: "$250"
    },
    {
      category: "Attendee - Student (India)",
      earlyBirdINR: "₹5,900",
      lateRegistrationINR: "-",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "Attendee - Academia Regular (India)",
      earlyBirdINR: "₹7,080",
      lateRegistrationINR: "-",
      earlyBirdUSD: "-",
      lateRegistrationUSD: "-"
    },
    {
      category: "International Attendee (Non-author)",
      earlyBirdINR: "-",
      lateRegistrationINR: "-",
      earlyBirdUSD: "$50",
      lateRegistrationUSD: "$75"
    },
    {
      category: "Each Additional Page (exceeding the 8-page limit : atmost 2 pages)",
      earlyBirdINR: "₹1,000",
      lateRegistrationINR: "₹1,000",
      earlyBirdUSD: "$15",
      lateRegistrationUSD: "$15"
    }
  ];

  const preConferenceTutorial = [
    {
      category: "UG/PG Students",
      fee: "₹3,000"
    },
    {
      category: "PhD Scholars",
      fee: "₹4,000"
    },
    {
      category: "Academic/Industry",
      fee: "₹5,000"
    }
  ];

  const registrationIncludes = [
    "Full access to all conference sessions, keynotes, and tutorials",
    "Digital proceedings and participation certificate",
    "Conference kit",
    "Lunch and refreshments on conference days",
    "Networking opportunities and social sessions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <PageHero 
        title="Registration - AIHC 2025"
        description="Join us for the International Conference on Artificial Intelligence for Healthcare"
      >
        <button 
          disabled
          className="bg-gray-400 text-gray-600 px-8 py-3 rounded-md font-medium cursor-not-allowed opacity-60 inline-block"
        >
          Register Now
        </button>
        <p className="text-lg mt-4 text-gray-200">Registration portal will be available soon</p>
      </PageHero>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registration Categories & Fees</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Registration for AIHC 2025 includes access to all conference sessions, digital proceedings, 
              conference kit, and networking opportunities. Early bird registration offers significant discounts.
            </p>
          </div>

          {/* Registration Fees Table */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Category</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b">Early Bird (INR)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b">Late Registration (INR)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b">Early Bird (USD)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b">Late Registration (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {registrationCategories.map((category, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{category.category}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{category.earlyBirdINR}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{category.lateRegistrationINR}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{category.earlyBirdUSD}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{category.lateRegistrationUSD}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pre-Conference Tutorial */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pre-Conference Day Tutorial - December 9, 2025</h3>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">UG/PG Students</h4>
                  <p className="text-2xl font-bold text-blue-600">₹3,000</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">PhD Scholars</h4>
                  <p className="text-2xl font-bold text-blue-600">₹4,000</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Academic/Industry</h4>
                  <p className="text-2xl font-bold text-blue-600">₹5,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Full Author Registration Includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrationIncludes.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Important Notes</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>All INR fees are inclusive of 18% GST.</li>
                      <li>All USD rates are approximate and will be adjusted based on the currency exchange rate at the time of payment.</li>
                      <li>Early bird registration offers significant discounts - register early to save!</li>
                      <li><strong>Author Registration Deadline:</strong> November 5, 2025 (for accepted paper authors)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Questions About Registration?</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              If you have any questions about registration, pricing, or payment options, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> aihc2025@nitc.ac.in
                </p>
                <p className="text-gray-700">
                  <strong>Subject:</strong> Registration Inquiry
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

export default Registration; 