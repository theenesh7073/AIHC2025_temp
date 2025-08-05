import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Submission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero 
        title="Paper Submission"
        subtitle="Submit Your Research"
        description="Share your innovative research in artificial intelligence for healthcare at AIHC 2025."
      />

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

          {/* How to Submit */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">How to Submit</h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Before submitting your paper, you will need to have a CMT account. Please ensure you have created your account before attempting to submit your paper.
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Create CMT Account</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    If you don't have a CMT account yet, please create one using the following link:
                  </p>
                  <a 
                    href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Create CMT Account</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Submit Your Paper</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Once you have a CMT account, you can submit your paper using the following guide:
                  </p>
                  <a 
                    href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Author Submission Guide</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Submission Guidelines</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>The manuscript has to be uploaded online at the AIHC 2025 Microsoft CMT Research paper submission portal at the following link: (Link will be updated soon)</li>
              <li>When submitting a paper to AIHC 2025, rename the file as PaperID.pdf before uploading.</li>
              <li>Authors are required to specify one or more keywords from the list of topics outlined in the CFP.</li>
              <li>All submissions must be written in English only. Papers submitted in any other language will not be considered for review.</li>
              <li>All submissions will be checked for plagiarism using appropriate software. Papers with significant plagiarism will be rejected without review. Authors are responsible for ensuring the originality of their work and proper citation of all sources.</li>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Paper Submission Deadline</p>
                  <p className="text-2xl font-bold text-red-800">August 31, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Acceptance Notification</p>
                  <p className="text-2xl font-bold text-red-800">October 15, 2025</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Camera-Ready Submission</p>
                  <p className="text-2xl font-bold text-red-800">November 1, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Author Registration Deadline</p>
                  <p className="text-2xl font-bold text-red-800">November 5, 2025</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <p className="text-lg font-semibold text-red-700">Conference</p>
                  <p className="text-2xl font-bold text-red-800">December 10-12, 2025</p>
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

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Submission;