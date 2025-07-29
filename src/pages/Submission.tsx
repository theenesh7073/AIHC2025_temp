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
          <a 
            href="https://example.com/submit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Submit your Paper
          </a>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Submission Guidelines</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-6">
              PReMI'25 welcomes a wide range of contributions in the areas specified in the Call for Papers. When submitting a paper to PReMI'25, authors are required to 
              specify one or more keywords from the list of topics outlined in the CFP. The PReMI'25 Program Committee will endeavour to facilitate the presentation of 
              papers from contributors worldwide.
            </p>
            
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>At least one author of each paper must complete the Early-Bird registration process at non-student rate, in order to ensure inclusion of the paper in the conference proceedings.</li>
              <li>Students must include a letter from the Head of the Institution/ Dean/ Department authenticating their full-time student status.</li>
              <li>Authors with affiliation other than Indian institutions must register in USD or EUR.</li>
              <li>In case of multiple papers by an author, each additional paper (maximum of 2 papers) would be subjected to additional registration charge at reduced rate.</li>
              <li>In case of cost length papers (exceeding the 8 page limit), each additional page (maximum of 2 pages for a paper) would be subjected to additional page charge.</li>
              <li>Authors can upload the revised version of they have clicked on submit button. However, they can upload in batches until they click on submit button.</li>
              <li>Paper Submission Template: Link</li>
              <li>Paper Submission Guidelines: PDF</li>
            </ol>
          </div>

          {/* Charges Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Charges</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">INR</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">USD</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">EUR</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 px-4 py-3">General (Early Bird)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">12,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">400</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">340</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">General (Late)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">14,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">800</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">720</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Student</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">8,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">400</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">360</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Industry/Govt.</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">20,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">1,200</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">900</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Each Additional Paper</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">6,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">300</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">270</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Each Additional Page (exceeding the 8-page limit)</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">4,000</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">200</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">180</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Registration Deadlines */}
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center mb-4">REGISTRATION DEADLINES</h3>
            <div className="text-center space-y-2">
              <p className="text-red-600 font-medium">Submission Deadline: 31st July, 2025</p>
              <p className="text-red-600 font-medium">Acceptance Notification: 15th August, 2025</p>
              <p className="text-red-600 font-medium">Camera Ready Submission: 15th September, 2025</p>
              <p className="text-red-600 font-medium">Early Bird Registration: 31st October, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Submission;