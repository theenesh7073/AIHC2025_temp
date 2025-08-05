import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

// Import profile pictures - only importing those that exist
import cVJawahar from "@/assets/Photos_Keynote speakers/1_C_V_Jawahar.jpg";
import krishnaMohan from "@/assets/Photos_Keynote speakers/2_prof_krishna_mohan.jpeg";
import ashokSriniva from "@/assets/Photos_Keynote speakers/3_Ashok Sriniva.jpg";
import chandraSekhar from "@/assets/Photos_Keynote speakers/4_Chandra sekhar Seelamantula .png";
import lijinChungapalli from "@/assets/Photos_Keynote speakers/5_Lijin Chungapalli.jpg";
import sunuLazar from "@/assets/Photos_Keynote speakers/6_Dr Sunu Lazar Cyriac.jpg";
import anoopAyyappan from "@/assets/Photos_Keynote speakers/7_anoop Ayyappan.png";
import drPniyas from "@/assets/Photos_Keynote speakers/8_dr-p-niyas.jpg";
import narayanankuttyWarrier from "@/assets/Photos_Keynote speakers/9_Dr Narayanankutty Warrier.jpg";
import basavarajTalawar from "@/assets/Photos_Keynote speakers/10_Basavaraj Talwar.jpeg";
import aparajitaKhan from "@/assets/Photos_Keynote speakers/11_Aparajita Khan.jpg";
import anandaBhattacharya from "@/assets/Photos_Keynote speakers/12_Ananda‬ ‭Bhattacharya‬.jpeg";
import ganeshNeelakanta from "@/assets/Photos_Keynote speakers/16_Dr. Ganesh Neelakanta Iyer .jpg";
import bijuPottekkatt from "@/assets/Photos_Keynote speakers/17_Prof. Dr. Biju Pottekkatt .png";
import pranabDey from "@/assets/Photos_Keynote speakers/18_Prof. Dr. Pranab Dey .jpeg";
import chetanArora from "@/assets/Photos_Keynote speakers/19_chetan_Arora.jpg";
import mohithJagalmohan from "@/assets/Photos_Keynote speakers/‭ 20_Mohith‬ ‭Jagalmohan‬.jpeg";
import harikrishnan from "@/assets/Photos_Keynote speakers/22_Dr. S. Harikrishnan.jpeg";
import sanjayBehari from "@/assets/Photos_Keynote speakers/23_Prof. Dr. Sanjay Behari .jpeg";
import narayananKrishnan from "@/assets/Photos_Keynote speakers/25_Narayanan (CK) C Krishnan.jpg";
import vivekKanhangad from "@/assets/Photos_Keynote speakers/26_vivek Kanhangad.jpg";
import adityaBhaskara from "@/assets/Photos_Keynote speakers/28_Prof. Aditya Bhaskara .jpg";
import ganeshGopalakrishnan from "@/assets/Photos_Keynote speakers/29_Prof. Ganesh Gopalakrishnan .jpg";
import santhoshKuriakose from "@/assets/Photos_Keynote speakers/30_Dr. Santhosh Kuriakose K.jpeg";
import sunilKumar from "@/assets/Photos_Keynote speakers/31_Dr. K. Sunil Kumar.jpg";
import muralikrishnan from "@/assets/Photos_Keynote speakers/32_Dr. Muralikrishnan V.P. .jpeg";
import srikumarVenkataraman from "@/assets/Photos_Keynote speakers/37_Dr. Srikumar Venkataraman.jpeg";
import raviSankaran from "@/assets/Photos_Keynote speakers/39_Dr. Ravi Sankaran MD .jpeg";
import bobyVarkey from "@/assets/Photos_Keynote speakers/40_Dr. Boby Varkey Maramattom .jpg";
import swathyShanker from "@/assets/Photos_Keynote speakers/41_Dr. Swathy Shanker .jpg";
import mallaBhaskaraRao from "@/assets/Photos_Keynote speakers/42_Prof. Dr. Malla Bhaskara Rao.jpeg";
import sheejaRajan from "@/assets/Photos_Keynote speakers/43_Dr. Sheeja Rajan T M.jpeg";
import sinnu from "@/assets/Photos_Keynote speakers/44_sinnu-2.jpg";
import manu from "@/assets/Photos_Keynote speakers/45_manu.jpg";
import sanjibSenapati from "@/assets/Photos_Keynote speakers/46_Sanjib Senapati.png";
import drShehadad from "@/assets/Photos_Keynote speakers/Dr Shehadad.jpg";
import drAshishKarthik from "@/assets/Photos_Keynote speakers/35_Dr. Ashish Karthik.jpeg";
import baluKrishnaSasidharan from "@/assets/Photos_Keynote speakers/34_Dr. Balu Krishna Sasidharan .jpeg";
import mohanLeslieNoone from "@/assets/Photos_Keynote speakers/47_Mohan Leslie Noone.jpg";
import virendraSingh from "@/assets/Photos_Keynote speakers/48_Prof Virendra Singh.jpg";
import prasannaKumarPattam from "@/assets/Photos_Keynote speakers/49_ Prasanna Kumar Pattam.jpeg";
import drSatheesanB from "@/assets/Photos_Keynote speakers/50_Dr Satheesan B.jpg";
import joseJoseph from "@/assets/Photos_Keynote speakers/Jse joseph.jpg";
import unnikrishnanAR from "@/assets/Photos_Keynote speakers/Unnikrishnan A R.jpg";
import poonamGoyal from "@/assets/Photos_Keynote speakers/Poonam goyal.png";
import muthukumaraswamy from "@/assets/Photos_Keynote speakers/Muthukumaraswamy.jpg";
import henryPrakash from "@/assets/Photos_Keynote speakers/henry prakash.jpg";
import niyasUmmer from "@/assets/Photos_Keynote speakers/niyas ummer.png";
import madhushree from "@/assets/Photos_Keynote speakers/Madhushree.jpg";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. C. V. Jawahar",
      designation: "Professor, Dean R&D & Amazon Chair",
      affiliation: "IIIT Hyderabad",
      country: "India",
      image: cVJawahar,
      website: "https://www.iiit.ac.in/faculty/jawahar-c-v/"
    },
    {
      name: "Prof. C. Krishna Mohan",
      designation: "Professor, Dept. of CSE & AI",
      affiliation: "IIT Hyderabad",
      country: "India",
      image: krishnaMohan,
      website: "https://iith.ac.in/cse/ckm/"
    },
    {
      name: "Prof. Ashok Srinivasan",
      designation: "William Nystul Eminent Scholar Chair & Professor",
      affiliation: "University of West Florida",
      country: "USA",
      image: ashokSriniva,
      website: "https://uwf.edu/hmcse/departments/computer-science/faculty/dr-ashok-srinivasan.html"
    },
    {
      name: "Prof. Chandra Sekhar Seelamantula",
      designation: "Professor, Electrical Engineering",
      affiliation: "IISc Bangalore",
      country: "India",
      image: chandraSekhar,
      website: "https://ee.iisc.ac.in/chandra-sekhar-seelamantula/"
    },
    {
      name: "Lijin Chungapalli",
      designation: "Solution Architect (HPC & AI)",
      affiliation: "Meta",
      country: "UK",
      image: lijinChungapalli,
      website: "https://scholar.google.com/citations?user=arDQHGoAAAAJ&hl=en"
    },
    {
      name: "Dr. Sunu Lazar Cyriac",
      designation: "Professor, Medical Oncology",
      affiliation: "Amala Institute",
      country: "India",
      image: sunuLazar,
      website: "https://amalaims.org/department/faculty-profile/drsunu-lazar-cyriac?"
    },
    {
      name: "Dr. Anoop Ayyappan",
      designation: "Controller of Examinations & Professor",
      affiliation: "Digital University Kerala",
      country: "India",
      image: anoopAyyappan,
      website: "https://duk.ac.in/personnel/anoop-ayyappan/?"
    },
    {
      name: "Dr. Niyas Puzhakkal",
      designation: "Chief Medical Physicist & RSO",
      affiliation: "MVR Cancer Centre",
      country: "India",
      image: drPniyas,
      website: "https://cmpi.org.in/index.php/contact-us/"
    },
    {
      name: "Dr. Narayanankutty Warrier",
      designation: "Medical Director & Sr. Consultant Medical Oncology",
      affiliation: "MVR Cancer Centre",
      country: "India",
      image: narayanankuttyWarrier,
      website: "https://www.mvrcancerhospital.com/doctor/dr-narayanankutty-warrier/"
    },
    {
      name: "Dr. Basavaraj Talwar",
      designation: "Professor, Dept. of CSE",
      affiliation: "NIT Karnataka",
      country: "India",
      image: basavarajTalawar,
      website: "https://cse.nitk.ac.in/professor/basavaraj-talawar"
    },
    {
      name: "Dr. Aparajita Khan",
      designation: "Assistant Professor, CSE",
      affiliation: "IIT Roorkee",
      country: "India",
      image: aparajitaKhan,
      website: "https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/People/Faculty/101044.html"
    },
    {
      name: "Ananda Bhattacharjee",
      designation: "Solution Architect, HPC & AI",
      affiliation: "Lenovo",
      country: "India",
      image: anandaBhattacharya,
      website: "https://in.linkedin.com/in/ananda-bhattacharjee-24463959?trk=public_profile_samename-profile"
    },
    {
      name: "Dr. Madhushree B.",
      designation: "Sr. Software Engineer, HPC & AI Lab",
      affiliation: "Fujitsu Research",
      country: "India",
      image: madhushree,
      website: "https://www.linkedin.com/in/madhushree-basavarajaiah/"
    },
    {
      name: "Unnikrishnan A. R.",
      designation: "Head Developer Relations",
      affiliation: "NVIDIA",
      country: "India",
      image: unnikrishnanAR,
      website: "https://www.linkedin.com/in/unniar/"
    },
    {
      name: "Dr. Shehdad Kammili",
      designation: "Professor/Consultant, Physical Medicine",
      affiliation: "Govt. Medical College",
      country: "India",
      image: drShehadad,
      website: null // No website available
    },
    {
      name: "Dr. Ganesh Neelakanta Iyer",
      designation: "Lecturer, Dept. of Computer Science",
      affiliation: "NUS, Singapore",
      country: "Singapore",
      image: ganeshNeelakanta,
      website: "https://www.comp.nus.edu.sg/cs/people/gni/"
    },
    {
      name: "Prof. Dr. Biju Pottekkatt",
      designation: "Professor, Surgical Gastroenterology",
      affiliation: "JIPMER",
      country: "India",
      image: bijuPottekkatt,
      website: "https://jipmer.edu.in/users/drbijupottakkat"
    },
    {
      name: "Prof. Dr. Pranab Dey",
      designation: "Professor, Cytology & Pathology",
      affiliation: "Tata Memorial Cancer Center",
      country: "India",
      image: pranabDey,
      website: "https://pgimer.edu.in/PGIMER_PORTAL/PGIMERPORTAL/Department/Global/JSP/empview.jsp?id=76"
    },
    {
      name: "Prof. Chetan Arora",
      designation: "Professor, Dept. of CSE",
      affiliation: "IIT Delhi",
      country: "India",
      image: chetanArora,
      website: "https://homecse.iitd.ac.in/team/chetan-arora/"
    },
    {
      name: "Mr. Mohith Jagalmohan",
      designation: "Senior ML Engineer",
      affiliation: "Ceremorphic Inc.",
      country: "USA",
      image: mohithJagalmohan,
      website: "https://www.ceremorphic.com/team/mohith-jagalmohan"
    },

    {
      name: "Dr. S. Harikrishnan",
      designation: "Senior Professor & Head, Cardiology",
      affiliation: "SCTIMST",
      country: "India",
      image: harikrishnan,
      website: "https://www.sctimst.ac.in/people/drhari"
    },
    {
      name: "Prof. Dr. Sanjay Behari",
      designation: "Director & Professor, Neurosurgery",
      affiliation: "SCTIMST",
      country: "India",
      image: sanjayBehari,
      website: "https://www.sctimst.ac.in/people/director"
    },
    {
      name: "Dr. Muthukumaraswamy Karthikeyan",
      designation: "Chief Scientist",
      affiliation: "CSIR-NCL",
      country: "India",
      image: muthukumaraswamy,
      website: "http://academic.ncl.res.in/m.karthikeyan"
    },
    {
      name: "Prof. Narayanan C. Krishnan",
      designation: "Associate Professor & HoD",
      affiliation: "IIT Palakkad",
      country: "India",
      image: narayananKrishnan,
      website: "https://iitpkd.ac.in/people/ckn"
    },
    {
      name: "Prof. Vivek Kanhangad",
      designation: "Professor & Head, EE",
      affiliation: "IIT Indore",
      country: "India",
      image: vivekKanhangad,
      website: "https://people.iiti.ac.in/~kvivek/"
    },
    
    {
      name: "Prof. Aditya Bhaskara",
      designation: "Associate Professor",
      affiliation: "University of Utah",
      country: "USA",
      image: adityaBhaskara,
      website: "http://cs.utah.edu/bhaskara-aditya"
    },
    {
      name: "Prof. Ganesh Gopalakrishnan",
      designation: "Professor",
      affiliation: "University of Utah",
      country: "USA",
      image: ganeshGopalakrishnan,
      website: "https://profiles.faculty.utah.edu/u0028245"
    },
    {
      name: "Dr. Santhosh Kuriakose K",
      designation: "Associate Professor & Chief",
      affiliation: "Govt. Medical College",
      country: "India",
      image: santhoshKuriakose,
      website: "https://gmc.ac.in/faculty/santhosh-kuriakose"
    },
    {
      name: "Dr. K. Sunil Kumar",
      designation: "Professor & HOD, Gastroenterology",
      affiliation: "Govt. Medical College",
      country: "India",
      image: sunilKumar,
      website: "https://gmc.ac.in/faculty/k-sunil-kumar"
    },
    {
      name: "Dr. Muralikrishnan V.P.",
      designation: "Sr. Consultant Neurosurgeon",
      affiliation: "Aster MIMS Hospital",
      country: "India",
      image: muralikrishnan,
      website: "https://www.asterhospitals.in/doctors/aster-mims-calicut/dr-muralikrishnan-vp"
    },
    {
      name: "Dr. Anil Prahladan",
      designation: "Radiologist, CEO",
      affiliation: "Aramis Imaging LLP",
      country: "India",
      image: null, // No image available
      website: "https://www.linkedin.com/in/aramisimaging-027b11217/?originalSubdomain=in"
    },
    {
      name: "Dr. Balu Krishna Sasidharan",
      designation: "Professor & Head, Radiation Oncology",
      affiliation: "CMC",
      country: "India",
      image: baluKrishnaSasidharan,
      website: "https://www.cmch-vellore.edu/balu-krishna-s/"
    },
    {
      name: "Dr. Ashish Karthik",
      designation: "Assistant Professor, Anaesthesiology",
      affiliation: "Govt. Medical College",
      country: "India",
      image: drAshishKarthik,
      website: "https://www.instagram.com/drasish_anaesthesia/"
    },
    {
      name: "Dr. Niyas Ummer",
      designation: "Faculty",
      affiliation: "AIMST University",
      country: "Malaysia",
      image: niyasUmmer,
      website: "https://www.drniyas.com/"
    },
    {
      name: "Dr. Srikumar Venkataraman",
      designation: "Professor, Physical Medicine",
      affiliation: "AIIMS",
      country: "India",
      image: srikumarVenkataraman,
      website: "https://scholar.google.com/citations?user=lVE_YqMAAAAJ&hl=en"
    },
    {
      name: "Prof. Dr. Henry Prakash",
      designation: "Professor, Physical Medicine",
      affiliation: "CMC",
      country: "India",
      image: henryPrakash,
      website: "https://www.cmch-vellore.edu/henry-prakash/"
    },
    {
      name: "Dr. Ravi Sankaran MD",
      designation: "Professor & Head, PMR",
      affiliation: "Amrita Hospital",
      country: "India",
      image: raviSankaran,
      website: "https://www.amritahospitals.org/kochi/doctor/ravi-sankaran"
    },
    {
      name: "Dr. Boby Varkey Maramattom",
      designation: "Senior Consultant & HoD, Neurology",
      affiliation: "Apollo Adlux",
      country: "India",
      image: bobyVarkey,
      website: "https://www.apolloadluxhospital.co/doctors/dr-boby-varkey-maramattom"
    },
    {
      name: "Dr. Swathy Shanker",
      designation: "Assistant Professor, Pathology",
      affiliation: "KMCT Medical College",
      country: "India",
      image: swathyShanker,
      website: "https://www.kmctmedicalcollege.org/faculties_dr-swathy-shanker.html?t=Dr+Swathy+Shanker"
    },
    {
      name: "Prof. Dr. Malla Bhaskara Rao",
      designation: "Professor, Neurosurgery",
      affiliation: "NIMHANS",
      country: "India",
      image: mallaBhaskaraRao,
      website: "https://mallabhaskararao.com/"
    },
    {
      name: "Dr. Sheeja Rajan T.M.",
      designation: "Associate Professor & Head, Plastic Surgery",
      affiliation: "Govt. Medical College",
      country: "India",
      image: sheejaRajan,
      website: "https://gmctcr.kerala.gov.in/faculty-profile?facultyId=385&department=plastic-surgery"
    },
    {
      name: "Dr. Sinnu Susan Thomas",
      designation: "Assistant Professor Grade-I",
      affiliation: "Digital University Kerala",
      country: "India",
      image: sinnu,
      website: "https://duk.ac.in/personnel/dr-sinnu-susan-thomas/"
    },
    {
      name: "Dr. Manu K Aryan",
      designation: "Assistant Professor, Immunology",
      affiliation: "Amala Cancer Research Centre",
      country: "India",
      image: manu,
      website: "https://www.acrcs.org/dr.manu-k-aryan.php"
    },
    {
      name: "Prof. Dr. Sanjib Senapati",
      designation: "Professor & Head, Biotechnology",
      affiliation: "IIT Madras",
      country: "India",
      image: sanjibSenapati,
      website: "https://biotech.iitm.ac.in/innerfaculty.php?fname=Sanjib%20Senapati&__ncforminfo=cK7XmMl97baqhNCbG8zampa9u46jHTA6QsA3-F2-aH4KOm3XKuBiRXauqWkU-Kcrc0BlGARznUaO0pVnDmY_IS-T6ilQole4"
    },
    {
      name: "Dr. Mohan Leslie Noone",
      designation: "Senior Consultant Neurologist",
      affiliation: "Baby Memorial Hospital",
      country: "India",
      image: mohanLeslieNoone,
      website: "https://babymhospital.org/doctors/dr-mohan-leslie-noone-md-dm/"
    },
    {
      name: "Prof. Virendra Singh",
      designation: "Professor, Electrical Engineering & Computer Science",
      affiliation: "IIT Bombay",
      country: "India",
      image: virendraSingh,
      website: "https://www.ee.iitb.ac.in/~viren/"
    },
    {
      name: "Prasanna Kumar Pattam",
      designation: "Founder & CTO",
      affiliation: "NootusAI",
      country: "India",
      image: prasannaKumarPattam,
      website: "https://www.linkedin.com/in/prasannapattam/"
    },
    {
      name: "Dr. Satheesan B",
      designation: "Director & Professor, Surgical Oncology",
      affiliation: "Malabar Cancer Centre",
      country: "India",
      image: drSatheesanB,
      website: "https://www.mcc.kerala.gov.in/doctors/dr-satheesan-b"
    },
    {
      name: "Prof. Poonam Goyal",
      designation: "Chair Professor, CS & IS",
      affiliation: "BITS Pilani",
      country: "India",
      image: poonamGoyal,
      website: "https://www.bits-pilani.ac.in/pilani/poonam-goyal/"
    },
    {
      name: "Jose Joseph, Ph.D",
      designation: "Chair & Assistant Professor",
      affiliation: "Digital University Kerala",
      country: "India",
      image: joseJoseph,
      website: "https://www.linkedin.com/in/jose-joseph-ph-d-080a2356/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero 
        title="Keynote Speakers"
        subtitle="Distinguished Experts in AI and Healthcare"
        description="Meet our world-renowned speakers who will share their expertise and insights on the latest developments in artificial intelligence for healthcare applications."
      />

      {/* Speakers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => {
              const CardContent = () => (
                <div className="flex flex-col items-center text-center h-full justify-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md flex-shrink-0">
                    {speaker.image ? (
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-4xl font-bold">
                          {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold text-lg text-gray-800">{speaker.name}</h3>
                    <p className="text-gray-600 text-sm">{speaker.designation}</p>
                    <p className="text-gray-500 text-sm">{speaker.affiliation}</p>
                    <p className="text-gray-400 text-xs">{speaker.country}</p>
                  </div>
                </div>
              );

              if (speaker.website) {
                return (
                  <a 
                    key={index} 
                    href={speaker.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden h-80"
                  >
                    <CardContent />
                    {/* Hover overlay with "View Profile" text */}
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-lg font-semibold flex items-center gap-2">
                        View Profile
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              } else {
                return (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-8 border border-gray-200 h-80"
                  >
                    <CardContent />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Speakers;