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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Prospective authors are invited to submit full-length original research papers as per the following AIHC-2025 submission guidelines in the tracks specified in the CFP.
            </p>
          </div>

          {/* Preparation Guidelines */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Preparation Guidelines</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>The paper must not exceed 8 pages in length (including all text, figures, and references) prepared according to the templates.</li>
              <li>The manuscript must be submitted in pdf format only and the file size of your manuscript should not exceed 10 MB.</li>
              <li>Use a proper tool to convert the resulting source into a pdf document that has only scalable fonts with all fonts embedded.</li>
              <li>The pdf manuscript must not have Document Protection or Document Security enabled.</li>
              <li>The manuscript has to be uploaded at the paper submission portal at the submission link (will be updated soon).</li>
            </ol>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Submission Guidelines</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>When submitting a paper to AIHC 2025, rename the file as PaperID.pdf before uploading.</li>
              <li>Authors are required to specify one or more keywords from the list of topics outlined in the CFP.</li>
              <li>In submitting a manuscript to AIHC-2025, authors acknowledge that no paper substantially similar in content has been or will be submitted to another journal, conference or workshop during the review period. In such a case the paper will be rejected without review.</li>
              <li>At least one author of each accepted paper must complete the registration process at a non-student rate, in order to ensure inclusion of the paper in the conference proceedings.</li>
              <li>Students must include a letter from the Head of the Institute/ Dean/ Department authenticating their full-time student status.</li>
              <li>Authors with affiliation other than Indian institutions must register in USD.</li>
              <li>In case of multiple papers by an author, each additional paper (maximum of 2 papers) would be subjected to additional registration charge at reduced rate.</li>
              <li>In case of over length papers (exceeding the 8 page limit), each additional page (maximum of 2 pages for a paper) would be subjected to additional page charge.</li>
              <li>Papers must be electronically submitted before the deadline expires without exception.</li>
              <li>An early decision phase will assess submissions for scope and quality. Out-of-scope or low-quality papers may be rejected early.</li>
            </ol>
          </div>

          {/* Important Dates */}
          <div className="bg-red-50 p-8 rounded-lg mb-8 shadow-lg border-2 border-red-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-red-800">Important Dates</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Paper submission</p>
                  <p className="text-2xl font-bold text-red-800">August 31, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Acceptance notification</p>
                  <p className="text-2xl font-bold text-red-800">October 15, 2025</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Camera-ready submission</p>
                  <p className="text-2xl font-bold text-red-800">Nov 01, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Conference</p>
                  <p className="text-2xl font-bold text-red-800">Dec 10-12, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft CMT Service */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Review Process</h3>
            <p className="text-gray-700 leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>

        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Submission;