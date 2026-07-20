import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Minimal SVG Icon Components
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
);

const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const PlusIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);

const MinusIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
);

const AwardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
);

import './Office.css';

const foundersData = [
  {
    id: 1,
    name: "Er. S. Sudhakar",
    role: "Founder & Sr. Structural Engineer",
    creds: "M.Tech (Structures), M.Sc (Re-valuation), M.I.E, F.I.V, Valuer & Builder",
    bio: [
      "Er. S. Sudhakar is the Founder and Senior Structural Engineer at SS Associates with over 40 years of professional experience in structural engineering and infrastructure development.",
      "Known for his technical expertise and practical approach, he has contributed to numerous residential, commercial, institutional, and public infrastructure projects over the course of his career.",
      "He has served as a Co-opted Member of the Technical Committee at the Anantapur Municipal Corporation, where he played an important role in guiding key infrastructure and development decisions.",
      "He is also an empaneled consultant with Indian Railways and is currently involved in providing technical consultancy services for the master planning and redevelopment of Chittoor and Kadapa Railway Stations under the Amrit Bharat Scheme. His work reflects a strong commitment to creating durable, efficient, and future-ready infrastructure solutions."
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&sig=1",
    email: "sudhakar@ssassociates.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/ssa_associates/",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Ar. S.N. Sai Sanketh",
    role: "Co-Founder & Sr. Architect / Urban Designer",
    creds: "B.Arch, M.Arch / M.UD (Master in Urban Design), CEPT University, Ahmedabad | M.Sc rev | IGBC Accredited Professional",
    bio: [
      "Ar. S.N. Sai Sanketh is the Co-Founder and Senior Architect at SS Associates, bringing over 9 years of professional experience in architecture, urban design, and large-scale public infrastructure projects.",
      "His expertise spans residential, commercial, institutional, and urban development projects across Telangana and Gujarat, with a strong focus on sustainable and context-driven design solutions.",
      "He played a key role as Project Architect for all 26 Collectorate buildings in Telangana and was felicitated by Shri K. Chandrashekar Rao (Hon'ble Chief Minister of Telangana) during the inauguration of the Mahbubnagar Collectorate in recognition of his contribution to the project.",
      "Currently, he leads several major architectural and urban development initiatives, including South Central Railway projects covering about 12 railway stations, along with important projects for the Anantapur Municipal Corporation (AMC) and the Anantapur Urban Development Authority (AUDA). His design approach combines functionality, urban sensitivity, innovation, and sustainable planning to create meaningful public and architectural spaces."
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&sig=2",
    email: "saisanketh@ssassociates.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/ssa_associates/",
      linkedin: "https://www.linkedin.com/in/sai-sanketh-40a43b88/",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 3,
    name: "Ar. K. Teja",
    role: "Design Partner & Sr. Architect",
    creds: "B.Arch, Dayananda Sagar College of Architecture, Bangalore",
    bio: [
      "Ar. K. Teja is the Design Partner at SS Associates with over 8 years of professional experience across residential, commercial, railway, and healthcare projects.",
      "With a strong eye for detail and a balanced approach towards creativity and technical execution, he plays a key role in shaping the firm's architectural vision and design direction.",
      "His work reflects a commitment to delivering functional, efficient, and aesthetically refined spaces that respond thoughtfully to client requirements and project contexts.",
      "Through his experience across multiple sectors, he has contributed to creating innovative architectural solutions with a focus on quality, practicality, and design excellence."
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&sig=3",
    email: "teja@ssassociates.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/ssa_associates/",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

const architectureTeam = [
  {
    name: "Ar. K. Teja",
    role: "Design Partner & Sr. Architect",
    exp: "8+ years experience",
    creds: "B.Arch, Dayananda Sagar College of Architecture, Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&sig=10",
    email: "teja@ssassociates.com",
    bio: [
      "Design Partner with 8+ years experience shaping the firm's architectural vision across residential, commercial, healthcare, and railway infrastructure."
    ]
  },
  {
    name: "K. Surendra",
    role: "Jr. Architect",
    exp: "2 years experience",
    creds: "B.Arch, Acharya Nagarjuna University, Guntur | Diploma in Civil Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=11",
    email: "surendra@ssassociates.com",
    bio: [
      "Holds a Bachelor of Architecture degree from Acharya Nagarjuna University, Guntur, along with a Diploma in Civil Engineering.",
      "With professional experience and freelancing works, he contributes to residential, commercial, railway, and interior projects with a practical and detail-oriented design approach."
    ]
  },
  {
    name: "B. Manoj Kumar",
    role: "Jr. Architect",
    exp: "1 year experience",
    creds: "B.Arch, Acharya Nagarjuna University, Guntur | Diploma in Architecture, APT Kakinada",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500&sig=12",
    email: "manoj@ssassociates.com",
    bio: [
      "Holds a Bachelor of Architecture degree from Acharya Nagarjuna University, Guntur, along with a Diploma in Architecture from APT Kakinada.",
      "His freelancing and internship experience across multiple firms has strengthened his practical design approach. Contributes to residential, commercial, railway, and interior projects."
    ]
  },
  {
    name: "R G Akash Kumar",
    role: "Jr. Architect",
    exp: "6 months experience",
    creds: "B.Arch, Excel College of Architecture & Planning, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=14",
    email: "akash@ssassociates.com",
    bio: [
      "Holds a Bachelor of Architecture degree from Excel College of Architecture & Planning, Tamil Nadu.",
      "As a Junior Architect, he contributes to residential and interior projects with a creative approach, strong design interest, and collaborative working style."
    ]
  },
  {
    name: "G. Mounish",
    role: "Jr. Architect",
    exp: "2 years experience",
    creds: "B.Arch, Maestro School of Planning & Arch, Vijayawada | Pursuing Master's in Project Management at SPA Vijayawada",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&sig=15",
    email: "mounish@ssassociates.com",
    bio: [
      "Bachelor of Architecture from The Maestro School of Planning and Architecture, Vijayawada, and currently pursuing a Master's in Project Management at SPA Vijayawada.",
      "Involved in railway, residential, and commercial projects, contributing through planning, working drawings, client coordination, and site execution."
    ]
  },
  {
    name: "V. Bhargav",
    role: "Jr. Architect",
    exp: "2 years experience",
    creds: "B.Arch | Pursuing Master's in Urban Planning at CEPT University, Ahmedabad",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&sig=13",
    email: "bhargav@ssassociates.com",
    bio: [
      "Holds a Bachelor of Architecture degree and currently pursuing his Master's in Urban Planning at CEPT University, Ahmedabad.",
      "Worked on railway, residential, commercial, and public projects, contributing through planning, design execution, material selection, and 3D interior development."
    ]
  }
];

const structuralTeam = [
  {
    name: "A. Uma Devi",
    role: "Structural Designer",
    exp: "15+ years experience",
    creds: "B.Tech, M.Tech (Structural Design), SIET Hyderabad",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&sig=20",
    email: "umadevi@ssassociates.com",
    bio: [
      "Holds a B.Tech and M.Tech in Structural Design from Siddhartha Institute of Engineering and Technology (SIET), Hyderabad.",
      "With over 15 years of professional experience, she has played a key role in structural design and development of residential, railway, hospital, commercial, and public infrastructure projects."
    ]
  },
  {
    name: "H. Mohammad Hidayathullah",
    role: "Project Engineer / Valuation",
    exp: "27-30 years experience",
    creds: "Diploma Civil Engineer, KVT Polytechnic College, Chikkaballapur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&sig=21",
    email: "hidayath@ssassociates.com",
    bio: [
      "Holds a Diploma in Civil Engineering from KVT Polytechnic College, Chikkaballapur.",
      "As a Project Engineer at SS Associates, he has been involved in handling for 27+ years and coordinating over 80 projects across various sectors including site coordination, project management, and execution."
    ]
  },
  {
    name: "Sai Teja Gormanipalli",
    role: "Project Management",
    exp: "7+ years experience",
    creds: "B.Tech (Civil Engineering), Intell Engineering College, Anantapur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&sig=26",
    email: "saiteja@ssassociates.com",
    bio: [
      "Holds a B.Tech degree from Intell Engineering College, Anantapur, bringing over 7 years of experience.",
      "Actively involved in site coordination, project management, and execution activities across various projects."
    ]
  },
  {
    name: "Poola Ramana Reddy",
    role: "Diploma Engineer",
    exp: "180+ projects experience",
    creds: "Diploma Civil Engineer, Anantapur Polytechnic College",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=23",
    email: "ramanareddy@ssassociates.com",
    bio: [
      "Holds a Diploma in Civil Engineering from Anantapur Polytechnic College.",
      "Has significantly contributed to over 180 projects across residential, commercial, and industrial sectors, specializing in preliminary layouts, government norms & G.O. regulations compliance, AutoCAD execution drawings, and site coordination."
    ]
  },
  {
    name: "Aslam",
    role: "Structural Engineer / Site Supervision",
    exp: "6-7 years experience",
    creds: "B.Tech (Civil Engineering), Intell Engineering College, Anantapur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&sig=25",
    email: "aslam@ssassociates.com",
    bio: [
      "Holds a B.Tech degree from Intell Engineering College, Anantapur, and brings over 7 years of experience in site supervision, project execution, and structural coordination."
    ]
  },
  {
    name: "K. Maruthi",
    role: "Valuation & Project Management",
    exp: "1 year experience",
    creds: "B.Tech, PVKK Institute of Technology, Anantapur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=27",
    email: "maruthi@ssassociates.com",
    bio: [
      "Holds a B.Tech degree from PVKK Institute of Technology, Anantapur.",
      "Works as a Junior Assistant in valuation activities while contributing to project coordination, site management, and execution processes."
    ]
  },
  {
    name: "P. Sai Sree",
    role: "Structural Engineer",
    exp: "3 years experience",
    creds: "B.Tech, M.Tech (Structural Design), PVKKIT Anantapur",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500&sig=28",
    email: "saisree@ssassociates.com",
    bio: [
      "Holds B.Tech & M.Tech in Structural Design from PVKK Institute of Technology, Anantapur.",
      "Contributes to residential, hospital, railway, and commercial projects through architectural planning and structural drawing development."
    ]
  },
  {
    name: "K. Bhavani",
    role: "Civil & Structural Engineer",
    exp: "2 years experience",
    creds: "B.Tech (Civil Engineering), SRIT Anantapur",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&sig=29",
    email: "bhavani@ssassociates.com",
    bio: [
      "Holds a B.Tech degree from Srinivasa Ramanujan Institute of Technology, Anantapur.",
      "Involved in residential, hospital, and commercial projects, contributing to planning, coordination, and structural drawing development."
    ]
  },
  {
    name: "Anjan Reddy",
    role: "Sr. Assistant Valuation",
    exp: "30 years experience",
    creds: "Diploma Civil Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=22",
    email: "anjan@ssassociates.com",
    bio: [
      "Diploma Civil Engineer with 30 years of civil engineering and senior asset valuation consulting experience."
    ]
  }
];

const mepTeam = [
  {
    name: "Raghunandhan",
    role: "Mechanical Engineer (MEP)",
    exp: "25 years experience",
    creds: "MEP Mechanical Design Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=30",
    email: "raghu@ssassociates.com",
    bio: [
      "25 years of engineering experience heading mechanical and MEP systems coordination across industrial, public, and commercial complexes."
    ]
  },
  {
    name: "Prasanth B",
    role: "Electrical Engineer (MEP)",
    exp: "6 years experience",
    creds: "B.Tech (Electrical Engineering)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&sig=31",
    email: "prasanth@ssassociates.com",
    bio: [
      "Electrical Engineer with 6 years experience in building electrical layout design, power distribution grids, and HVAC integration."
    ]
  }
];

const awardsData = [
  {
    year: 2022,
    title: "Felicitated by Hon'ble Chief Minister Shri K. Chandrashekar Rao",
    subtitle: "Telangana State Government — In recognition of playing a key role as Project Architect for all 26 District Collectorates in Telangana State during the inauguration of Mahbubnagar Collectorate."
  },
  {
    year: 2023,
    title: "Empaneled Consultant for Indian Railways (Amrit Bharat Scheme)",
    subtitle: "Ministry of Railways, India — Selected for master planning and redevelopment of major railway stations including Chittoor, Kadapa, Anantapur, Yadgir, Raichur, and Krishna."
  },
  {
    year: 2023,
    title: "Technical Committee Co-opted Member Appointment",
    subtitle: "Anantapur Municipal Corporation — Er. S. Sudhakar appointed to guide key civic infrastructure, structural planning, and urban safety decisions."
  },
  {
    year: 2024,
    title: "IGBC Accredited Professional & Sustainable Design Leadership",
    subtitle: "Indian Green Building Council — Recognized for eco-friendly, energy-efficient public architecture and sustainable urban designs."
  },
  {
    year: 2025,
    title: "Urban Infrastructure Design Excellence",
    subtitle: "AUDA & AMC — Recognition for transformative streetscape design projects including Ram Nagar Flyover, Telugu Thalli Street, and Yoga Park."
  }
];

const offlinePublications = [
  "Telangana Collectorates Master Plan: Architecting 26 District Administrative Hubs (2022)",
  "Amrit Bharat Scheme Master Planning: Redeveloping Chittoor & Kadapa Railway Stations (2023)",
  "Sustainable Urban Streetscape Interventions in Anantapur — AUDA & AMC Review (2024)",
  "40 Years of Structural Engineering & Building Asset Valuation Practices in Andhra Pradesh (2024)",
  "Contextual Civic Design: Balancing Functionality, Urban Sensitivity, and Public Spatial Experience (2025)"
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

const imageFadeVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
  }
};

const Office = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 991) return;

      const sections = ['profile', 'people', 'awards', 'publications', 'events'];
      const scrollPosition = window.scrollY + 130;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="office-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Sub Navigation Bar */}
      <div className="mobile-sub-nav">
        {['profile', 'people', 'awards', 'publications', 'events'].map(item => (
          <button
            key={item}
            className={`mobile-sub-nav-link ${activeSection === item ? 'active' : ''}`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ==========================================
         PROFILE SECTION
         ========================================== */}
      <section id="profile" className="office-section">
        <div className="sectionImgHeadWrapper">
          <div className="sectionImgHeadheight">
            <motion.img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
              alt="SS Associates Office Profile"
              className="sectionImgheadBg"
              variants={imageFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div className="sectionImghead-overlay"></div>
          </div>
          <div className="sectionImgHeading">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Profile
            </motion.h2>
          </div>
        </div>

        <div className="profile-content">
          <motion.h3
            className="profile-lead"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            S S ASSOCIATES is a multidisciplinary firm with a diverse portfolio offering professional consulting services in Architecture, Structures, Urban Design, Construction Planning, and Valuation.
          </motion.h3>

          <div className="profile-body-wrapper">
            <motion.p
              className="profile-desc"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We support Public and Private sector clients in a diverse range of markets at every stage, from initial conceptualization and financial feasibility study to project completion and beyond. With over 40 years of structural engineering heritage combined with cutting-edge architectural vision, our work spans landmark public infrastructure, railway master planning, district administrative complexes, healthcare institutions, commercial centers, and bespoke residential developments.
            </motion.p>
            <motion.p
              className="profile-desc"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our multidisciplinary team—comprising Senior Architects, Urban Designers, Structural Engineers, MEP Specialists, and Valuation Consultants—delivers end-to-end solutions rooted in sustainability, context sensitivity, and structural integrity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ==========================================
         PEOPLE SECTION
         ========================================== */}
      <section id="people" className="office-section">
        <div className="sectionImgHeadWrapper">
          <div className="sectionImgHeadheight">
            <motion.img
              src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=2000"
              alt="SS Associates Studio Team"
              className="sectionImgheadBg"
              variants={imageFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div className="sectionImghead-overlay"></div>
          </div>
          <div className="sectionImgHeading">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              People
            </motion.h2>
          </div>
        </div>

        <div className="people-content">
          {/* Founders Subsection */}
          <h3 className="team-section-category-title">Founders & Leadership</h3>

          <div className="founders-design-grid">
            {foundersData.map(founder => (
              <motion.div
                key={founder.id}
                className="founder-design-card"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className="founder-image-wrapper"
                  onClick={() => setSelectedMember(founder)}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="founder-design-image"
                  />
                  <div className="team-overlay-gradient">
                    <div className="founder-hover-icons">
                      <a href={founder.socials.facebook} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FacebookIcon size={16} />
                      </a>
                      <a href={founder.socials.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <InstagramIcon size={16} />
                      </a>
                      <a href={founder.socials.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <LinkedinIcon size={16} />
                      </a>
                      <a href={`mailto:${founder.email}`} onClick={(e) => e.stopPropagation()}>
                        <MailIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="founder-caption">
                  <h4 className="founder-design-name">{founder.name}</h4>
                  <span className="founder-design-role">{founder.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Modal */}
          <AnimatePresence>
            {selectedMember && (
              <motion.div
                className="founder-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
              >
                <motion.div
                  className="founder-modal-content"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="founder-modal-close"
                    onClick={() => setSelectedMember(null)}
                    aria-label="Close details"
                  >
                    <XIcon size={20} />
                  </button>

                  <div className="founder-modal-left">
                    <h2>{selectedMember.name}</h2>
                    <span className="modal-role">{selectedMember.role}</span>
                    <span className="modal-creds">{selectedMember.creds}</span>

                    <div className="modal-bio">
                      {selectedMember.bio && selectedMember.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="modal-contact-row">
                      <p className="modal-email">
                        Email: <a href={`mailto:${selectedMember.email || 'info@ssassociates.com'}`}>{selectedMember.email || 'info@ssassociates.com'}</a>
                      </p>
                      <div className="modal-socials">
                        {selectedMember.socials ? (
                          <>
                            <a href={selectedMember.socials.facebook} target="_blank" rel="noopener noreferrer">
                              <FacebookIcon size={16} />
                            </a>
                            <a href={selectedMember.socials.instagram} target="_blank" rel="noopener noreferrer">
                              <InstagramIcon size={16} />
                            </a>
                            <a href={selectedMember.socials.linkedin} target="_blank" rel="noopener noreferrer">
                              <LinkedinIcon size={16} />
                            </a>
                            <a href={selectedMember.socials.twitter} target="_blank" rel="noopener noreferrer">
                              <TwitterIcon size={16} />
                            </a>
                          </>
                        ) : (
                          <a href={`mailto:${selectedMember.email || 'info@ssassociates.com'}`}>
                            <MailIcon size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="founder-modal-right">
                    <img src={selectedMember.image} alt={selectedMember.name} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Architecture Team */}
          <h3 className="team-section-category-title">Architecture Team</h3>
          <div className="people-grid">
            {architectureTeam.map((person, idx) => (
              <motion.div
                key={idx}
                className="person-card"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelectedMember(person)}
                style={{ cursor: 'pointer' }}
              >
                <img src={person.image} alt={person.name} className="person-image" />
                <h4 className="person-name">{person.name}</h4>
                <span className="person-role">{person.role}</span>
                {person.exp && <span className="person-exp">{person.exp}</span>}
                {person.creds && <p className="person-creds-small">{person.creds}</p>}
              </motion.div>
            ))}
          </div>

          {/* Structural & Civil Team */}
          <h3 className="team-section-category-title">Structural, Civil & Valuation Team</h3>
          <div className="people-grid">
            {structuralTeam.map((person, idx) => (
              <motion.div
                key={idx}
                className="person-card"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelectedMember(person)}
                style={{ cursor: 'pointer' }}
              >
                <img src={person.image} alt={person.name} className="person-image" />
                <h4 className="person-name">{person.name}</h4>
                <span className="person-role">{person.role}</span>
                {person.exp && <span className="person-exp">{person.exp}</span>}
                {person.creds && <p className="person-creds-small">{person.creds}</p>}
              </motion.div>
            ))}
          </div>

          {/* MEP Team */}
          <h3 className="team-section-category-title">MEP Team</h3>
          <div className="people-grid">
            {mepTeam.map((person, idx) => (
              <motion.div
                key={idx}
                className="person-card"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelectedMember(person)}
                style={{ cursor: 'pointer' }}
              >
                <img src={person.image} alt={person.name} className="person-image" />
                <h4 className="person-name">{person.name}</h4>
                <span className="person-role">{person.role}</span>
                {person.exp && <span className="person-exp">{person.exp}</span>}
                {person.creds && <p className="person-creds-small">{person.creds}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         AWARDS SECTION
         ========================================== */}
      <section id="awards" className="office-section">
        <div className="sectionImgHeadWrapper">
          <div className="sectionImgHeadheight">
            <motion.img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
              alt="Awards and Honours"
              className="sectionImgheadBg"
              variants={imageFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div className="sectionImghead-overlay"></div>
          </div>
          <div className="sectionImgHeading">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Awards & Felicitations
            </motion.h2>
          </div>
        </div>

        <div className="awards-content">
          <div className="awards-list">
            {awardsData.map((award, idx) => (
              <motion.div
                key={idx}
                className="award-item"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="award-year">{award.year}</div>
                <div className="award-details">
                  <h4 className="award-title">{award.title}</h4>
                  <span className="award-subtitle">{award.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         PUBLICATIONS SECTION
         ========================================== */}
      <section id="publications" className="office-section">
        <div className="sectionImgHeadWrapper">
          <div className="sectionImgHeadheight">
            <motion.img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
              alt="Featured Publications"
              className="sectionImgheadBg"
              variants={imageFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div className="sectionImghead-overlay"></div>
          </div>
          <div className="sectionImgHeading">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Publications
            </motion.h2>
          </div>
        </div>

        <div className="publications-content">
          <div className="magazines-grid">
            {[1, 2, 3, 4, 5].map(coverIndex => (
              <motion.div
                key={coverIndex}
                className="magazine-card"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={`https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=350&sig=${coverIndex}`}
                  alt="Magazine featured cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="drawer-container">
            <button
              className="drawer-toggle-btn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <small>{isDrawerOpen ? "Collapse Publications List" : "View Publications & Features List"}</small>
              <span>{isDrawerOpen ? <MinusIcon size={14} /> : <PlusIcon size={14} />}</span>
            </button>

            <AnimatePresence>
              {isDrawerOpen && (
                <motion.div
                  className="drawer-content-expanded"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.4 }, opacity: { duration: 0.3, delay: 0.1 } } }}
                  exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4 }, opacity: { duration: 0.2 } } }}
                  style={{ overflow: 'hidden' }}
                >
                  <h4>Features & Publications</h4>
                  <ul>
                    {offlinePublications.map((pub, idx) => (
                      <li key={idx}>{pub}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==========================================
         EVENTS SECTION
         ========================================== */}
      <section id="events" className="office-section">
        <div className="events-content">
          <div className="events-title-wrapper">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Major Events & Key Initiatives
            </motion.h2>
          </div>
          <div className="events-list-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="event-card-box" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#111' }}>26 Telangana District Collectorates</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Felicitated in 2022 by Hon'ble Chief Minister Shri K. Chandrashekar Rao during the inauguration of the Mahbubnagar Collectorate for contributing as Project Architect for all 26 District Collectorate complexes in Telangana state.
              </p>
            </div>
            <div className="event-card-box" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#111' }}>South Central Railways Amrit Bharat Scheme</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Technical consultancy, master planning, and redesign for about 12 key railway stations including Chittoor, Kadapa, Anantapur, Yadgir, Raichur, Krishna, Dharmavaram, Renigunta, and Tadipatri.
              </p>
            </div>
            <div className="event-card-box" style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#111' }}>Anantapur Urban Interventions (AMC & AUDA)</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Transformative streetscape designs and public parks including Under Ram Nagar Flyover Street Design, Telugu Thalli Street Design, JNTU Street Design, and Yoga Park.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Office;
