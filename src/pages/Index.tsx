import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <HeroSection />
      <CountdownTimer />
      
      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About AIHC 2025</h2>
              <p className="text-muted-foreground mb-4">
                The International Conference on Artificial Intelligence for Healthcare (AIHC 2025) is a prestigious event under SPARC's Indo-US collaboration program, providing a unique forum for Indian and global experts to ideate, innovate, and deliver high-impact research in AI for healthcare.
              </p>
              <p className="text-muted-foreground mb-6">
                Organized by the Computer Science & Engineering Department at NIT Calicut, the conference focuses on low-cost solutions for early cancer detection and radiotherapy treatment. We bring together academia, hospitals, and startups to bridge gaps through deployable prototypes for real-time patient support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://premi25.iitd.ac.in/calls/cfp.pdf" className="btn-primary">
                  Call for Papers
                </a>
                <a href="https://premi25.iitd.ac.in/submission.html" className="btn-outline">
                  Submission Guidelines
                </a>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="conference-card">
                <div className="h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Where</h3>
                <p className="text-muted-foreground text-center">National Institute of Technology Calicut</p>
              </div>
              <div className="conference-card">
                <div className="h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">When</h3>
                <p className="text-muted-foreground text-center">11 - 14 December, 2025</p>
              </div>
              <div className="conference-card col-span-2">
                <h3 className="text-xl font-semibold text-center mb-4">Organized By</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  <img src="https://premi25.iitd.ac.in/images/logo.png" alt="IIT Delhi" className="h-16" />
                  <img src="https://premi25.iitd.ac.in/images/isi-logo.png" alt="ISI Kolkata" className="h-16" />
                  <img src="https://premi25.iitd.ac.in/images/iapr_logo.jpg" alt="IAPR" className="h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="conference-card">
              <h3 className="text-xl font-semibold mb-2 text-primary">Smart Computational Medicine (SCM)</h3>
              <p className="text-muted-foreground">AI applications in medical diagnosis and treatment planning</p>
            </div>
            <div className="conference-card">
              <h3 className="text-xl font-semibold mb-2 text-primary">AI & Computer Vision (AICV)</h3>
              <p className="text-muted-foreground">Medical imaging analysis and diagnostic support systems</p>
            </div>
            <div className="conference-card">
              <h3 className="text-xl font-semibold mb-2 text-primary">AI & NLP (AILP)</h3>
              <p className="text-muted-foreground">Clinical text mining and healthcare documentation</p>
            </div>
            <div className="conference-card">
              <h3 className="text-xl font-semibold mb-2 text-primary">High-Performance AI (HPAI)</h3>
              <p className="text-muted-foreground">GPU-accelerated healthcare solutions</p>
            </div>
            <div className="conference-card md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-primary">AI Blueprint: Data & Algorithms (AIDA)</h3>
              <p className="text-muted-foreground">Healthcare data analytics and algorithm development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Important Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="date-card">
              <h3 className="text-xl font-semibold mb-2">Submission Deadline</h3>
              <p className="text-muted-foreground mb-2">31st July, 2025</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="date-card">
              <h3 className="text-xl font-semibold mb-2">Acceptance Notification</h3>
              <p className="text-muted-foreground mb-2">15th August, 2025</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="date-card">
              <h3 className="text-xl font-semibold mb-2">Camera Ready Submission</h3>
              <p className="text-muted-foreground mb-2">15th September, 2025</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="date-card">
              <h3 className="text-xl font-semibold mb-2">Early Bird Registration</h3>
              <p className="text-muted-foreground mb-2">31st October, 2025</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Conference Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="https://premi25.iitd.ac.in/images/iapr_logo.jpg" alt="IAPR" className="h-16 md:h-20" />
            <img src="https://premi25.iitd.ac.in/images/logo.png" alt="IIT Delhi" className="h-16 md:h-20" />
            <img src="https://premi25.iitd.ac.in/images/isi-logo.png" alt="ISI" className="h-16 md:h-20" />
            <img src="https://premi25.iitd.ac.in/images/PReMI.png" alt="PReMI" className="h-16 md:h-20" />
            <img src="https://premi25.iitd.ac.in/images/irss_logo.png" alt="IRSS" className="h-16 md:h-20" />
            <img src="https://premi25.iitd.ac.in/images/iuprai_logo.png" alt="IUPRAI" className="h-16 md:h-20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AIHC 2025</h3>
              <p className="mb-4">International Conference on Artificial Intelligence for Healthcare</p>
              <p>NIT Calicut in collaboration with SPARC, Government of India and University of Utah</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="https://premi25.iitd.ac.in/calls/cfp.pdf" className="hover:text-accent transition-colors">Call for Papers</a></li>
                <li><a href="https://premi25.iitd.ac.in/submission.html" className="hover:text-accent transition-colors">Submission</a></li>
                <li><a href="https://premi25.iitd.ac.in/workshops.html" className="hover:text-accent transition-colors">Workshops</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                contact@premi25.iitd.ac.in
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Indian Institute of Technology Delhi, India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground hover:text-accent text-xl transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-foreground hover:text-accent text-xl transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-foreground hover:text-accent text-xl transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-foreground hover:text-accent text-xl transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center">
            <p>Copyright © 2025 All rights reserved Indian Institute of Technology Delhi</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Index;
