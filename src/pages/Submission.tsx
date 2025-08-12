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
      >
        <a 
          href="https://cmt3.research.microsoft.com/AIHC2025" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 inline-block"
        >
          Submit Paper
        </a>
        <p className="text-lg mt-4 text-gray-200">Submission portal is now open</p>
      </PageHero>

      {/* Main Content */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          {/* Introduction */}
          <div className="mb-6 md:mb-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Prospective authors are invited to submit full-length original research papers as per the following AIHC-2025 submission guidelines in the tracks specified in the CFP.
            </p>
          </div>

          {/* Preparation Guidelines */}
          <div className="bg-green-50 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Preparation Guidelines</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-base md:text-lg">1. Manuscript Preparation</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 md:ml-4 text-sm md:text-base">
                  <li><strong>Templates:</strong> Use the official AIHC 2025 template — available in Overleaf (LaTeX) and Word formats.
                    <div className="mt-3 ml-0 md:ml-4 space-y-2 md:space-y-0 md:space-x-2 md:flex md:flex-row flex-col">
                      <a 
                        href="/AIHC2025_LaTeX_Overleaf_Template.zip" 
                        download
                        className="inline-flex items-center justify-center px-3 md:px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 w-full md:w-auto md:min-w-[200px]"
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download LaTeX Template
                      </a>
                      <a 
                        href="/AIHC2025_Word_Template.docx" 
                        download
                        className="inline-flex items-center justify-center px-3 md:px-4 py-2 bg-green-600 text-white text-xs md:text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200 w-full md:w-auto md:min-w-[200px]"
                      >
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Word Template
                      </a>
                    </div>
                  </li>
                  <li><strong>Fonts:</strong> Times-like serif (Times New Roman / newtxtext+newtxmath in LaTeX).</li>
                  <li><strong>Figures/Tables:</strong>
                    <ul className="list-disc list-inside ml-4 md:ml-6 mt-1 space-y-1 text-xs md:text-sm">
                      <li>Figures ≥ 300 DPI or vector (.pdf, .eps)</li>
                      <li>Use booktabs for tables; no vertical lines</li>
                      <li>Captions placed directly below figures/tables</li>
                    </ul>
                  </li>
                  <li><strong>Equations:</strong> Number sequentially, align to the right.</li>
                  <li><strong>Language:</strong> English only; check grammar and spelling.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-base md:text-lg">2. Anonymization (Double-Blind Review)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 md:ml-4 text-sm md:text-base">
                  <li>Remove author names, affiliations, acknowledgments, and self-identifying references.</li>
                  <li>Avoid links to repositories that reveal identity; use anonymized links if necessary.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-base md:text-lg">3. File Format & Submission</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2 md:ml-4 text-sm md:text-base">
                  <li><strong>File name:</strong> AIHC2025_PaperID.pdf (Paper ID assigned by CMT)</li>
                  <li>The paper must not exceed 8 pages in length (including all text, figures, and references)</li>
                  <li>The manuscript must be submitted in PDF format only and the file size should not exceed 10 MB</li>
                  <li>Use a proper tool to convert the resulting source into a PDF document that has only scalable fonts with all fonts embedded</li>
                  <li>The PDF manuscript must not have Document Protection or Document Security enabled</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Submit */}
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">How to Submit</h3>
            <div className="space-y-4 md:space-y-6 text-gray-700">
              
              <div className="bg-white p-4 md:p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3 md:mb-4 text-base md:text-lg">Submission Steps in CMT</h4>
                
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 1 — Access the AIHC 2025 Submission Portal</h5>
                    <div className="bg-blue-50 p-2 md:p-3 rounded border-l-4 border-blue-400 mb-2 md:mb-3">
                      <a 
                        href="https://cmt3.research.microsoft.com/AIHC2025" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm break-all"
                      >
                        https://cmt3.research.microsoft.com/AIHC2025
                      </a>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">OR</p>
                    <p className="text-xs md:text-sm">Open your web browser and go to the Microsoft CMT homepage: <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 break-all">https://cmt3.research.microsoft.com/</a></p>
                    <ul className="list-disc list-inside ml-2 md:ml-4 mt-2 text-xs md:text-sm space-y-1">
                      <li>If you already have a CMT account, click Sign in.</li>
                      <li>If you don't have an account, click Register and create one using your email.</li>
                      <li>You can sign in with a Microsoft, Google, or ORCID account.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 2 — Find the AIHC 2025 conference</h5>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li>Once signed in, go to the All Conferences tab in the top navigation bar.</li>
                      <li>In the search box, type AIHC 2025.</li>
                      <li>Click the conference name AIHC 2025 – International Conference on Artificial Intelligence for Healthcare to open its submission page.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 3 — Start a new submission</h5>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li>On the conference page, click Create new submission.</li>
                      <li>The submission form will open with multiple sections.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 4 — Fill in submission details</h5>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li><strong>Title</strong> — Enter your paper title exactly as it appears in your manuscript.</li>
                      <li><strong>Abstract</strong> — Paste the abstract text from your paper (no special formatting needed).</li>
                      <li><strong>Authors</strong> — Add all co-authors:
                        <ul className="list-disc list-inside ml-4 md:ml-6 mt-1 text-xs md:text-sm">
                          <li>Click Add Author for each co-author.</li>
                          <li>Fill in their first name, last name, email, and affiliation.</li>
                          <li>The presenting author can be marked if required.</li>
                        </ul>
                      </li>
                      <li><strong>Keywords</strong> — Enter keywords relevant to your paper; choose from the provided list or add your own.</li>
                      <li><strong>Track selection</strong> — Select the most relevant conference track (choose one of the five AIHC 2025 tracks).</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 5 — Upload your file</h5>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li>Scroll down to the Files section.</li>
                      <li>Click Upload from Computer and select your PDF file.</li>
                      <li>Ensure your file follows all AIHC 2025 formatting rules.</li>
                      <li>The file must have embedded fonts and no password protection.</li>
                      <li>File name format: AIHC2025_PaperID.pdf (Paper ID will be shown after you start submission — rename and re-upload if needed).</li>
                      <li>Wait for the upload to complete. The file name should appear under the upload box.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 6 — Review and submit</h5>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li>Review all fields carefully for accuracy — especially title, author list, and uploaded file.</li>
                      <li>Click Submit at the bottom of the page.</li>
                      <li>After submission, you will see a confirmation page with your Paper ID.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Step 7 — Update or revise your submission (before the deadline)</h5>
                    <p className="text-xs md:text-sm mb-2">To replace your paper:</p>
                    <ul className="list-disc list-inside ml-2 md:ml-4 text-xs md:text-sm space-y-1">
                      <li>Go to the Author Console in CMT.</li>
                      <li>Find your submission in the list.</li>
                      <li>Click Edit Submission → upload the new PDF.</li>
                      <li>Ensure any revised version is submitted before the official deadline.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2 md:mb-3 text-sm md:text-base">Checklist before you click Submit</h5>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                  <li>Paper is anonymized (if in review phase).</li>
                  <li>File is in PDF format.</li>
                  <li>Maximum length: 8 pages including references.</li>
                  <li>Fonts are embedded, no watermarks, no password.</li>
                  <li>Figures/tables clear and readable.</li>
                  <li>Keywords and track selected correctly.</li>
                  <li>All co-authors added in CMT.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-yellow-50 p-4 md:p-6 rounded-lg mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Submission Guidelines</h3>
            <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
              <li>The manuscript has to be uploaded online at the AIHC 2025 Microsoft CMT Research paper submission portal at the following link: <a href="https://cmt3.research.microsoft.com/AIHC2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 break-all">https://cmt3.research.microsoft.com/AIHC2025</a></li>
              <li>When submitting a paper to AIHC 2025, rename the file as AIHC2025_PaperID.pdf before uploading (Paper ID will be assigned by CMT).</li>
              <li>Authors are required to specify one or more keywords from the list of topics outlined in the CFP.</li>
              <li>All submissions must be written in English only. Papers submitted in any other language will not be considered for review.</li>
              <li>All submissions will be checked for plagiarism using appropriate software. Papers with significant plagiarism will be rejected without review. Authors are responsible for ensuring the originality of their work and proper citation of all sources.</li>
              <li>In submitting a manuscript to AIHC-2025, authors acknowledge that no paper substantially similar in content has been or will be submitted to another journal, conference or workshop during the review period. In such a case the paper will be rejected without review.</li>
              <li>At least one author of each accepted paper must complete the registration process at a non-student rate, in order to ensure inclusion of the paper in the conference proceedings.</li>
              <li><strong>Presentation of the paper by an author is mandatory for inclusion in the conference proceedings.</strong></li>
              <li>Students must include a letter from the Head of the Institute/ Dean/ Department authenticating their full-time student status.</li>
              <li>Authors with affiliation other than Indian institutions must register in USD.</li>
              <li>In case of multiple papers by an author, each additional paper (maximum of 2 papers) would be subjected to additional registration charge at reduced rate.</li>
              <li>In case of over length papers (exceeding the 8 page limit), each additional page (maximum of 2 pages for a paper) would be subjected to additional page charge.</li>
              <li>Papers must be electronically submitted before the deadline expires without exception.</li>
              <li>An early decision phase will assess submissions for scope and quality. Out-of-scope or low-quality papers may be rejected early.</li>
            </ol>
          </div>

          {/* Important Dates */}
          <div className="bg-red-50 p-4 md:p-8 rounded-lg mb-6 md:mb-8 shadow-lg border-2 border-red-200">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-red-800">Important Dates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center">
              <div className="space-y-3 md:space-y-4">
                <div className="bg-white p-3 md:p-4 rounded-lg border border-red-200">
                  <p className="text-sm md:text-lg font-semibold text-red-700">Paper Submission Deadline</p>
                  <p className="text-lg md:text-2xl font-bold text-red-800">August 31, 2025</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg border border-red-200">
                  <p className="text-sm md:text-lg font-semibold text-red-700">Acceptance Notification</p>
                  <p className="text-lg md:text-2xl font-bold text-red-800">October 15, 2025</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-white p-3 md:p-4 rounded-lg border border-red-200">
                  <p className="text-sm md:text-lg font-semibold text-red-700">Camera-Ready Submission</p>
                  <p className="text-lg md:text-2xl font-bold text-red-800">November 1, 2025</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg border border-red-200">
                  <p className="text-sm md:text-lg font-semibold text-red-700">Author Registration Deadline</p>
                  <p className="text-lg md:text-2xl font-bold text-red-800">November 5, 2025</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
                <div className="bg-white p-3 md:p-4 rounded-lg border border-red-200">
                  <p className="text-sm md:text-lg font-semibold text-red-700">Conference</p>
                  <p className="text-lg md:text-2xl font-bold text-red-800">December 10-12, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft CMT Service
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">ACKNOWLEDGMENT</h3>
            <p className="text-gray-700 leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div> */}

        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Submission;