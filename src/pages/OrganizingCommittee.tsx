import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

// Import profile pictures
import jayarajPB from "@/assets/Organizing Committee/Jayaraj PB.jpg";
import pournamiPN from "@/assets/Organizing Committee/Pournami P N.jpeg";
import gopakumarG from "@/assets/Organizing Committee/Gopakumar G.png";
import vidhyaKamakshi from "@/assets/Organizing Committee/Vidhya Kamakshi.png";
import chandramaniChoudhary from "@/assets/Organizing Committee/Chandramani Chaudhary.png";
import subashiniR from "@/assets/Organizing Committee/Subashini R.png";
import sathideviPS from "@/assets/Organizing Committee/Dr. Sathidevi P S.png";
import sudhishNGeorge from "@/assets/Organizing Committee/Dr. Sudhish N George , NIT Calicut (CCESD).png";
import chithraAV from "@/assets/Organizing Committee/Chitra S.jpg";
import basilKuriachen from "@/assets/Organizing Committee/Dr. Basil Kuriachen.jpg";
import parameswaranP from "@/assets/Organizing Committee/Parameswaran P.jpg";

const OrganizingCommittee = () => {
  const committeeMembers = [
    {
      name: "Dr. Jayaraj P B",
      affiliation: "NIT Calicut",
      image: jayarajPB
    },
    {
      name: "Dr. Pournami P N",
      affiliation: "NIT Calicut",
      image: pournamiPN
    },
    {
      name: "Dr. Gopakumar G",
      affiliation: "NIT Calicut",
      image: gopakumarG
    },
    {
      name: "Dr. Vidhya Kamakshi",
      affiliation: "NIT Calicut",
      image: vidhyaKamakshi
    },
    {
      name: "Dr. Chandramani Choudhary",
      affiliation: "NIT Calicut",
      image: chandramaniChoudhary
    },
    {
      name: "Dr. Subashini R",
      affiliation: "NIT Calicut",
      image: subashiniR
    },
    {
      name: "Dr. Sathidevi P S",
      affiliation: "NIT Calicut",
      image: sathideviPS
    },
    {
      name: "Dr. Sudhish N George",
      affiliation: "NIT Calicut (CCESD)",
      image: sudhishNGeorge
    },
    {
      name: "Prof. Parameswaran P",
      affiliation: "NIT Calicut",
      image: parameswaranP
    },
    {
      name: "Dr. Basil Kuriachen",
      affiliation: "NIT Calicut",
      image: basilKuriachen
    },
    {
      name: "Dr. Chithra A V",
      affiliation: "NIT Calicut",
      image: chithraAV
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero 
        title="Organizing Committee"
        subtitle="Conference Leadership"
        description="Meet the dedicated team from NIT Calicut organizing AIHC 2025."
      />

      {/* Committee Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100 shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default OrganizingCommittee; 