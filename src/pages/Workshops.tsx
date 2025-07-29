import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import BackToTop from "@/components/BackToTop";

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Research Challenges in Tiny Machine Learning Systems at Edge (RC-TMLSE)",
      duration: "Half Day",
      organizer: "Dr. Arpan Pal",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 2,
      title: "AI4SG: AI for Social Good",
      duration: "Full Day",
      organizer: "Dr. Abdul Wahid",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 3,
      title: "The Brain: Creativity and Decay Intelligent, Biomarkers Related to Aging and Diseases",
      duration: "Half Day",
      organizer: "Andrzej Przybyszewski",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 4,
      title: "Neuromorphic Computing for Edge Intelligence",
      duration: "Half Day",
      organizer: "Dr. Arpan Pal",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 5,
      title: "Quantum Computing and Quantum Machine Learning (QCQML)",
      duration: "Half Day",
      organizer: "Dr. Neel Kanth Kundu",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 6,
      title: "Graph Reasoning Unleashed: GNNs in LLMs, High-Order Inference, and Healthcare",
      duration: "Full Day",
      organizer: "Dr. Ekta Srivastava",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 7,
      title: "Workshop on AI in Spatial Computing: AR/VR, Metaverse",
      duration: "Full Day",
      organizer: "Dr. Brajeshwar Bhowmick",
      flyer: "Click Here",
      page: "Click Here"
    },
    {
      id: 8,
      title: "Machine Intelligence in Quality Assessment of Biomedical Data",
      duration: "Half Day",
      organizer: "Dr. Palak Handa",
      flyer: "Click Here",
      page: "Click Here"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workshops</h1>
          <p className="text-xl mb-4">Inviting Technical Papers - visit the respective workshop page</p>
          <p className="text-lg">Date: 11th December, 2025</p>
        </div>
      </section>

      {/* Workshops Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">S. No.</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Title of the Workshop</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Duration of the Workshop</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Organized By</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Flyer</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Workshop Page</th>
                  </tr>
                </thead>
                <tbody>
                  {workshops.map((workshop, index) => (
                    <tr key={workshop.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{workshop.id}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          {workshop.title}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{workshop.duration}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{workshop.organizer}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          {workshop.flyer}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          {workshop.page}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Workshops;