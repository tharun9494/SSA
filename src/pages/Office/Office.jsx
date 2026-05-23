import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Minimal SVG Icon Components to avoid Rollup dependency resolution bugs
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
import './Office.css';

const foundersData = [
  {
    id: 1,
    name: "Er. S. Sudhakar",
    role: "Founder & Sr. Structural Engineer",
    creds: "M.Tech (Structures), M.I.E, F.I.V, Valuer & Builder",
    bio: [
      "Er. S. Sudhakar is the Founder and Senior Structural Engineer at SS Associates with over 40 years of professional experience in structural engineering and infrastructure development.",
      "He has served as a Co-opted Member of the Technical Committee at the Anantapur Municipal Corporation and is also an empaneled consultant with Indian Railways.",
      "Currently, he is involved in technical consultancy services for master planning and redevelopment of Chittoor and Kadapa Railway Stations under the Amrit Bharat Scheme."
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
    role: "Co-Founder & Sr. Architect",
    creds: "B.Arch, M.Arch (Master in Urban Design), CEPT University, Ahmedabad | IGBC Accredited Professional",
    bio: [
      "Ar. S.N. Sai Sanketh has over 9 years of experience in architecture, urban design, and large-scale public infrastructure projects.",
      "He played a key role as Project Architect for all 26 Collectorate buildings in Telangana and was felicitated by Shri K. Chandrashekar Rao during the inauguration of the Mahbubnagar Collectorate.",
      "Currently, he leads several major architectural and urban development initiatives, including South Central Railway projects and projects for Anantapur Municipal Corporation and Anantapur Urban Development Authority."
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&sig=2",
    email: "saisanketh@ssassociates.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://www.instagram.com/ssa_associates/",
      linkedin: "https://www.linkedin.com/in/sai-sanketh-40a43b88/",
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
      "A senior design partner with extensive experience in leading high-end architectural concepts, design developments, and space planning.",
      "Teja oversees design integration across commercial, institutional, and residential projects, guiding the design team toward creative and structurally viable aesthetics."
    ]
  },
  { 
    name: "Ar. Surendra", 
    role: "Jr. Architect", 
    exp: "2 years experience", 
    creds: "B.Arch, Acharya Nagarjuna University, Guntur", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=11",
    email: "surendra@ssassociates.com",
    bio: [
      "Bachelor of Architecture from Acharya Nagarjuna University, Guntur.",
      "Specializes in residential, commercial, railway, and interior design projects.",
      "Highly skilled in drafting detailed architectural layouts, creating 3D renderings, and implementing space-efficiency techniques."
    ]
  },
  { 
    name: "Ar. Manoj Kumar B", 
    role: "Jr. Architect", 
    exp: "1 year experience", 
    creds: "B.Arch, Acharya Nagarjuna University, Guntur", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500&sig=12",
    email: "manoj@ssassociates.com",
    bio: [
      "Bachelor of Architecture from Acharya Nagarjuna University, Guntur.",
      "Focuses on architectural design development, working construction drawings, municipal approval coordination, and on-site building execution tracking."
    ]
  },
  { 
    name: "Ar. Bhargav V", 
    role: "Jr. Architect", 
    exp: "2 years experience", 
    creds: "Pursuing Master’s in Urban Planning at CEPT University, Ahmedabad", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&sig=13",
    email: "bhargav@ssassociates.com",
    bio: [
      "Currently pursuing advanced Master's studies in Urban Planning at the prestigious CEPT University in Ahmedabad.",
      "Integrates architectural concepts with urban-scale spatial planning and ecological sustainability practices."
    ]
  },
  { 
    name: "R G Akash Kumar", 
    role: "Architect", 
    exp: "General Practice", 
    creds: "B.Arch, Excel College of Architecture & Planning, Tamil Nadu", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=14",
    email: "akash@ssassociates.com",
    bio: [
      "Bachelor of Architecture degree from Excel College of Architecture & Planning, Tamil Nadu.",
      "Brings creative methodologies and modern architectural aesthetics to the team.",
      "Contributes to master layouts, high-fidelity 3D visualization modeling, and detail design drafting."
    ]
  },
  { 
    name: "G. Mounish", 
    role: "Architect", 
    exp: "General Practice", 
    creds: "B.Arch, The Maestro School of Planning and Architecture | Pursuing Master's in Project Management", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&sig=15",
    email: "mounish@ssassociates.com",
    bio: [
      "Bachelor of Architecture from The Maestro School of Planning and Architecture, Vijayawada.",
      "Currently pursuing Master’s in Project Management at SPA Vijayawada.",
      "Expertly manages construction schedules, site resources, and coordinates safety standards between engineering teams and stakeholders."
    ]
  },
];

const structuralTeam = [
  { 
    name: "A. Uma Devi", 
    role: "Structural Designer", 
    exp: "15+ years experience", 
    creds: "B.Tech, M.Tech (Structural Designer)", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&sig=20",
    email: "umadevi@ssassociates.com",
    bio: [
      "15+ years of extensive structural engineering and framework design experience.",
      "Has successfully designed structural schemas for massive residential complexes, heavy load railway schemes, multi-specialty hospitals, and public administrative centers."
    ]
  },
  { 
    name: "H. Mohammad Hidayathullah", 
    role: "Diploma Civil Engineer", 
    exp: "30 years experience", 
    creds: "Diploma Civil Engineering", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&sig=21",
    email: "hidayath@ssassociates.com",
    bio: [
      "Diploma Civil Engineer with over three decades of core field experience.",
      "Has personally handled and coordinated over 80 major projects across residential, administrative, infrastructure, and commercial sectors."
    ]
  },
  { 
    name: "Anjan Reddy", 
    role: "Diploma Civil Engineer", 
    exp: "30 years experience", 
    creds: "Diploma Civil Engineering", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=22",
    email: "anjan@ssassociates.com",
    bio: [
      "Diploma Civil Engineer with over 30 years of civil consulting expertise.",
      "Specializes in precise construction quantity estimation, Bill of Quantities (BOQ) development, budgeting audit analysis, and building valuation."
    ]
  },
  { 
    name: "Poola Ramana Reddy", 
    role: "Diploma Engineer", 
    exp: "Over 180 projects experience", 
    creds: "Diploma in Engineering", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=23",
    email: "ramanareddy@ssassociates.com",
    bio: [
      "Diploma Engineer with a colossal track record of contributing to over 180 projects.",
      "Spans unmatched expertise across residential structures, multi-unit retail outlets, and heavy industrial facilities."
    ]
  },
  { 
    name: "Teja", 
    role: "Civil Engineer", 
    exp: "8 years experience", 
    creds: "B.Tech (Civil Engineering)", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&sig=24",
    email: "teja.civil@ssassociates.com",
    bio: [
      "B.Tech Civil Engineer specializing in site coordination, layout mapping, and structural drafting compliance.",
      "Bridges technical blueprint definitions with construction team workflows on-site."
    ]
  },
  { 
    name: "Aslam", 
    role: "Structural Engineer", 
    exp: "6 years experience", 
    creds: "B.Tech (Civil Engineering) | Structural Analysis Specialist", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&sig=25",
    email: "aslam@ssassociates.com",
    bio: [
      "Civil and structural engineer with 6 years of expertise.",
      "Works actively across detailed structural frame analysis, finite element modeling, layout detailing, and construction supervision."
    ]
  },
  { 
    name: "Sai Teja Gormanipalli", 
    role: "Project Management", 
    exp: "7+ years experience", 
    creds: "B.Tech (Civil Engineering)", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&sig=26",
    email: "saiteja@ssassociates.com",
    bio: [
      "Project management and engineering coordinator with over 7 years of on-site experience.",
      "Oversees resource management planning, schedule control tracking, and architectural drawing implementation supervision."
    ]
  },
  { 
    name: "K. Maruthi", 
    role: "Project Management", 
    exp: "Site management", 
    creds: "Asset Valuation & Site Coordination", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&sig=27",
    email: "maruthi@ssassociates.com",
    bio: [
      "Key coordinator in property valuation activities, estate assessment, and municipal clearances.",
      "Manages detailed real estate appraisals, construction safety parameters, and handles comprehensive technical paperwork."
    ]
  },
  { 
    name: "P. Sai Sree", 
    role: "Structural Engineer", 
    exp: "3 years experience", 
    creds: "B.Tech, M.Tech (Structures)", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500&sig=28",
    email: "saisree@ssassociates.com",
    bio: [
      "B.Tech, M.Tech (Structures).",
      "Contributes widely to architectural planning and structural drawing development for public healthcare centers, commercial spaces, and railway consultancy frameworks."
    ]
  },
  { 
    name: "K. Bhavani", 
    role: "Structural Engineer", 
    exp: "Junior Analyst", 
    creds: "B.Tech (Civil Engineering)", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&sig=29",
    email: "bhavani@ssassociates.com",
    bio: [
      "Works on technical planning, structural drafting, and modeling coordination.",
      "Assists senior structural designers in creating detailed structural blueprints and verifying computational safety loads."
    ]
  }
];

const mepTeam = [
  { 
    name: "Raghunandhan", 
    role: "Mechanical Engineer", 
    exp: "25 years experience", 
    creds: "MEP Design Head", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&sig=30",
    email: "raghu@ssassociates.com",
    bio: [
      "25 years of engineering experience heading mechanical and MEP systems coordination.",
      "Specializes in mechanical drafting, building ventilation (HVAC), industrial drainage frameworks, fire protection layouts, and energy conservation optimization."
    ]
  },
  { 
    name: "Prasanth B", 
    role: "Electrical Engineer", 
    exp: "6 years experience", 
    creds: "B.Tech (Electrical Engineering)", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&sig=31",
    email: "prasanth@ssassociates.com",
    bio: [
      "Focuses on electrical engineering integration across large public and commercial scales.",
      "Brings extensive expertise in electrical load calculations, safety grid distributions, architectural lightning layouts, and low-voltage network structures."
    ]
  }
];

const awardsData = [
  { year: 2025, title: "AD100 Most Influential Architects", subtitle: "Architectural Digest India - Featured Firm" },
  { year: 2024, title: "Outstanding Structural Design Award", subtitle: "Indian Concrete Institute (ICI) - Excellence in Concrete Structures" },
  { year: 2023, title: "National Excellence in Infrastructure Consultancy", subtitle: "National Architecture & Engineering Awards - Public Sector Category" },
  { year: 2022, title: "Forbes NextGen Design Bold Club", subtitle: "Forbes India - Top 30 under 45 Design Visionaries" },
  { year: 2021, title: "South Central Infrastructure Consultant of the Year", subtitle: "Regional Engineering Associations - Landmark Railway Redevelopment" },
  { year: 2020, title: "Urban Infrastructure Design Excellence Award", subtitle: "Municipal Corporation Design Forum - Public Spaces & Civic Collectorates" }
];

const offlinePublications = [
  "National Architecture Showcase — Landmark Public Collectorates, 2024",
  "Indian Concrete Institute Journal — High Performance Structural Redevelopments, 2023",
  "Urban Space and Civic Planning — Administrative Complexes in Telangana, 2022",
  "Amrit Bharat Master Planning Review — Railway Station Modernization Schemes, 2022",
  "IGBC Green Buildings Yearbook — Sustainable Public Infrastructure Frameworks, 2021",
  "Consultancy Review India — 40 Years of Civil and Structural Mastery, 2020",
  "Municipal Design Forum Gazette — Urban Regeneration & Civic Interventions, 2019"
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
      if (window.innerWidth > 991) return; // Managed by header navbar on desktop screens

      const sections = ['profile', 'people', 'awards', 'publications', 'events'];
      const scrollPosition = window.scrollY + 130; // Mobile offset below sticky subnav

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
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120; // Mobile spacing offset
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
      {/* Mobile-only Swipable Touch Sub-Navigation Bar (Sticky under header) */}
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
            SS Associates is a premier, multidisciplinary consulting firm with a diverse, four-decade portfolio delivering professional expertise in Architecture, Structural Engineering, Urban Design, Construction Planning, and Asset Valuation.
          </motion.h3>
          
          <div className="profile-body-wrapper">
            <motion.p 
              className="profile-desc"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We support both public and private sector clients at every phase of the project lifecycle. From initial master planning, feasibility research, and structural modeling to project execution, site coordination, and structural audits, we combine engineering rigor with design intelligence to achieve remarkable results.
            </motion.p>
            <motion.p 
              className="profile-desc"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our collaborative studio culture brings together highly specialized engineers and innovative architects to create built environments that inspire, operate sustainably, and stand the test of time. Guided by context, functionality, and technological insight, we turn complex constraints into landmarks.
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
          <h3 className="team-section-category-title">Founders</h3>
          
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

          {/* Interactive Full Screen Founders & Team Member Detail Modal */}
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

          {/* Architecture Team Subsection */}
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

          {/* Structural & Civil Team Subsection */}
          <h3 className="team-section-category-title">Structural & Civil Team</h3>
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

          {/* MEP Team Subsection */}
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
              Awards
            </motion.h2>
          </div>
        </div>

        <div className="awards-content">
          {/* Elegant Grayscale Logo Wall */}
          <div className="awards-logo-grid">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Forbes_logo.svg/1200px-Forbes_logo.svg.png" alt="Forbes Magazine Award" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Architectural_Digest_logo.svg/2560px-Architectural_Digest_logo.svg.png" alt="AD100 Award" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dezeen_logo.svg/1200px-Dezeen_logo.svg.png" alt="Dezeen Architecture Shortlist" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/ArchDaily_logo.png" alt="ArchDaily Architecture Consultant nomination" />
          </div>

          {/* Elegant Chronological Award Timeline List */}
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
          {/* Gallery grid of magazines cover designs */}
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

          {/* Interactive Expandable Publications List Drawer */}
          <div className="drawer-container">
            <button 
              className="drawer-toggle-btn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <small>{isDrawerOpen ? "Collapse Publications List" : "View Offline Publications List"}</small>
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
                  <h4>Offline Press Features</h4>
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
              Events
            </motion.h2>
          </div>
          <div className="events-logo-grid">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Forbes_logo.svg/1200px-Forbes_logo.svg.png" alt="Forbes Event Partner" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Architectural_Digest_logo.svg/2560px-Architectural_Digest_logo.svg.png" alt="AD Event Partner" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dezeen_logo.svg/1200px-Dezeen_logo.svg.png" alt="Dezeen Event Partner" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/ArchDaily_logo.png" alt="ArchDaily Event Partner" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Office;
