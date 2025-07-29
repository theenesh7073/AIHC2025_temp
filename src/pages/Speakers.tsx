import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Larry Hall",
      title: "Professor of Computer Science and Engineering at University of South Florida",
      image: "/placeholder.svg",
      bio: "Lawrence Hall is a Distinguished Professor of Computer Science and Engineering at the University of South Florida. He holds a PhD in Computer Science from Florida State University (1986) and a BS in Applied Mathematics from Florida Institute of Technology (1972). He has published more than 275 refereed journal and conference papers. His research interests include machine learning, fuzzy systems and pattern recognition. Specific topics are regression, ensemble methods, and learning from small medical image datasets. Recently, he has focused on deep learning for social network activity prediction and medical image analysis, including research on histolopathology data."
    },
    {
      name: "Prof. Jayaram K. Udupa",
      title: "Professor of Radiologic Science in Radiology at University of Pennsylvania",
      image: "/placeholder.svg",
      bio: "Prof. Jayaram K. Udupa is a leading expert in medical imaging and radiologic science at the University of Pennsylvania, where he heads the Medical Imaging Section. With a Ph.D. from IISc Bangalore, his research spans image processing, 3D visualization, and quantitative image analysis. He is renowned for his seminal contributions to digital topology, fuzzy connectedness, and deformable models for medical analysis, and is widely recognized for his impactful contributions to medical image analysis and hybrid imaging technologies."
    },
    {
      name: "Prof. Mohan Kankanhalli",
      title: "Director of NUS Artificial Intelligence Institute (N-AILS)",
      image: "/placeholder.svg",
      bio: "Prof. Mohan Kankanhalli is the Provost's Chair Professor and Provost's Chair Professor of Computer Science at the National University of Singapore. He also serves as Deputy Executive Chairman of AI Singapore. Previously he was Dean of the School of Computing, NUS. Prof. Kankanhalli is actively involved in multimedia research and Associate Provost for Graduate Education, where he held these positions prior to his current appointment. He has published over 450 journal and conference papers and books, contributing significantly to understanding, visual saliency, content authentication, and privacy. He serves on editorial boards of top journals like ACM TOMM, IEEE MultiMedia, and Springer Multimedia Systems and Big Data journals."
    },
    {
      name: "Prof. Ragini Verma",
      title: "Principal Investigator at DICIPM",
      image: "/placeholder.svg",
      bio: "Prof. Ragini Verma is a distinguished researcher with a unique academic journey that spans mathematics, computer science, and medical imaging. Initially aspiring for a PhD in pure mathematics, her path led to computer vision and later to impactful research in medical imaging. Her postdoctoral work at INRIA, France, introduced her to innovative research approaches, which she continued to refine after moving to the United States. Today, she is deeply committed to advancing the field of medical imaging, combining technical expertise with a passion for meaningful scientific contribution."
    },
    {
      name: "Prof. Subbarao Kambhampati",
      title: "Professor at Fulton School of Engineering, Arizona State University",
      image: "/placeholder.svg",
      bio: "Prof. Subbarao Kambhampati is a computer science professor at Arizona State University, specializing in planning and decision making for human-aware AI systems. A Fellow of AAAI, AAAS, and ACM, he has also served as president of AAAI and a founding board member of the Partnership on AI. His research and perspectives on AI's societal impact have been widely featured in global media, and he regularly writes on AI policy for the Hill."
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold">PReMI 2025 Keynote Speakers</h1>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-yellow-100 rounded-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-gray-700 font-medium mb-3">{speaker.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{speaker.bio}</p>
                  {index < speakers.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-yellow-200">
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                        https://www.med.upenn.edu/apps/faculty/index.php/g275/p16384
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Speakers;