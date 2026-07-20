import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const projectsData = [
  // RESIDENTIAL
  {
    id: 1,
    title: 'Narrow House',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Feb 2024',
    status: 'Completed',
    area: '16’5” x 79’',
    client: 'Mr. Siva Prasad',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Brother’s House',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Nov 2023',
    status: 'Ongoing',
    area: '60’ x 95’',
    client: 'Sunku Balaji & Dr. Sunku Abhishek',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Luxury Villas',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Jun 2023',
    status: 'Ongoing',
    area: '60’ x 108’',
    client: 'Dr. Siva Ram Krishna',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Curved Elevation Villa',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Nov 2024',
    status: 'Ongoing',
    area: '40’ x 60’',
    client: 'Mr. Srinivas',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Fluidic Form Residence',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Feb 2025',
    status: 'Ongoing',
    area: '36’ x 85’',
    client: 'Mr. Satayaram',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Curvilinear Residence',
    category: 'RESIDENTIAL',
    location: 'Anantapur',
    year: 'Dec 2025',
    status: 'Ongoing',
    area: '33’ x 66’',
    client: 'Mr. Murali',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    title: 'Guntakal Residence',
    category: 'RESIDENTIAL',
    location: 'Guntakal',
    year: 'Dec 2025',
    status: 'Ongoing',
    area: '33’ x 44’',
    client: 'Mr. Lokesh',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800'
  },

  // COMMERCIAL
  {
    id: 8,
    title: 'Bajaj Showroom',
    category: 'COMMERCIAL',
    location: 'Hindupur',
    year: 'Dec 2024',
    status: 'Completed',
    area: '5,422 sq.ft',
    client: 'Bajaj Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    title: 'Khamma Bhavan Girls Hostel',
    category: 'COMMERCIAL',
    location: 'Anantapur',
    year: 'Jun 2023',
    status: 'Completed',
    area: '71’3” x 36’9”',
    client: 'Khamma Trust',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 10,
    title: 'Nandyal Function Hall',
    category: 'COMMERCIAL',
    location: 'Nandyal',
    year: 'Dec 2023',
    status: 'Completed',
    area: '71’ x 166’8”',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 11,
    title: 'Malabar Gold Showroom',
    category: 'COMMERCIAL',
    location: 'Anantapur',
    year: 'Dec 2024',
    status: 'Completed',
    area: '42’ x 115’',
    client: 'Malabar Gold',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 12,
    title: 'Ramesh Reddy Commercial Complex',
    category: 'COMMERCIAL',
    location: 'Anantapur',
    year: 'Jun 2025',
    status: 'Ongoing',
    area: '80’ x 135’',
    client: 'Mr. Ramesh Reddy',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 13,
    title: 'Mr. Siva Prasad Gupta Commercial',
    category: 'COMMERCIAL',
    location: 'Anantapur',
    year: 'Dec 2024',
    status: 'Completed',
    area: '27’ x 65’',
    client: 'Mr. Siva Prasad Gupta',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
  },

  // PUBLIC PROJECTS
  {
    id: 14,
    title: 'Forest Office Complex',
    category: 'PUBLIC PROJECTS',
    location: 'Nandyal',
    year: 'Dec 2024',
    status: 'Ongoing',
    area: '97’x52’, 64’x54’',
    client: 'Forest Department',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 15,
    title: 'Anantapur Railway Station Redevelopment',
    category: 'PUBLIC PROJECTS',
    location: 'Anantapur',
    year: 'Dec 2023',
    status: 'Ongoing',
    area: 'Amrit Bharat Scheme',
    client: 'South Central Railways / Indian Railways',
    image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 16,
    title: 'Chittoor Railway Station Master Plan',
    category: 'PUBLIC PROJECTS',
    location: 'Chittoor',
    year: 'Dec 2023',
    status: 'Ongoing',
    area: 'Amrit Bharat Scheme',
    client: 'South Central Railways / Indian Railways',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 17,
    title: 'Kadapa Railway Station Master Plan',
    category: 'PUBLIC PROJECTS',
    location: 'Kadapa',
    year: 'Dec 2023',
    status: 'Ongoing',
    area: 'Amrit Bharat Scheme',
    client: 'South Central Railways / Indian Railways',
    image: 'https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 18,
    title: 'Yadgir Railway Station Redevelopment',
    category: 'PUBLIC PROJECTS',
    location: 'Yadgir',
    year: 'Sep 2024',
    status: 'Ongoing',
    area: 'Amrit Bharat Scheme',
    client: 'Indian Railways',
    image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 19,
    title: 'Raichur Railway Station Redevelopment',
    category: 'PUBLIC PROJECTS',
    location: 'Raichur',
    year: 'Sep 2024',
    status: 'Ongoing',
    area: 'Amrit Bharat Scheme',
    client: 'Indian Railways',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 20,
    title: 'Telangana District Collectorate Complexes (26 Districts)',
    category: 'PUBLIC PROJECTS',
    location: 'Telangana State',
    year: '2022',
    status: 'Completed',
    area: 'State Administrative Hubs',
    client: 'Government of Telangana',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800'
  },

  // HOUSING & APARTMENTS
  {
    id: 21,
    title: 'Vijay Luxury Apartments',
    category: 'HOUSING & APARTMENTS',
    location: 'Anantapur',
    year: 'Feb 2025',
    status: 'Ongoing',
    area: '48’ x 66’',
    client: 'Mr. Vijay',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 22,
    title: 'Padmavati Apartments',
    category: 'HOUSING & APARTMENTS',
    location: 'Anantapur',
    year: 'Jun 2024',
    status: 'Ongoing',
    area: '130’ x 60’',
    client: 'Padmavati Group',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 23,
    title: 'Sakaar Luxury Apartments',
    category: 'HOUSING & APARTMENTS',
    location: 'Anantapur',
    year: 'Mar 2024',
    status: 'Ongoing',
    area: '112’ x 50’',
    client: 'Mr. Narasimhulu',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 24,
    title: 'Ashok Apartment Complex',
    category: 'HOUSING & APARTMENTS',
    location: 'Anantapur',
    year: 'Mar 2026',
    status: 'Ongoing',
    area: '80’ x 60’',
    client: 'Mr. Ashok',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 25,
    title: 'Dr. Jeelani Guntakal Apartments',
    category: 'HOUSING & APARTMENTS',
    location: 'Guntakal',
    year: 'Jun 2026',
    status: 'Ongoing',
    area: '64’ x 340’',
    client: 'Dr. Jeelani',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },

  // URBAN DESIGN
  {
    id: 26,
    title: 'Under Ram Nagar Flyover Streetscape',
    category: 'URBAN DESIGN',
    location: 'Anantapur',
    year: 'Mar 2023',
    status: 'Ongoing',
    area: 'Public Urban Corridor',
    client: 'Anantapur Municipal Corporation (AMC)',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 27,
    title: 'Telugu Thalli Streetscape & Urban Design',
    category: 'URBAN DESIGN',
    location: 'Anantapur',
    year: 'Dec 2024',
    status: 'Ongoing',
    area: 'Urban Civic Zone',
    client: 'AUDA & AMC',
    image: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 28,
    title: 'JNTU Street Revitalization',
    category: 'URBAN DESIGN',
    location: 'Anantapur',
    year: 'Aug 2023',
    status: 'Ongoing',
    area: 'Campus Urban Corridor',
    client: 'Anantapur Municipal Corporation',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 29,
    title: 'Yoga Park & Public Recreation Space',
    category: 'URBAN DESIGN',
    location: 'Anantapur',
    year: 'Jan 2026',
    status: 'Ongoing',
    area: 'Civic Eco Park',
    client: 'Anantapur Urban Development Authority',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=800'
  },

  // HEALTH CARE
  {
    id: 30,
    title: 'Dr. Hemanthamani Hospital',
    category: 'HEALTH CARE',
    location: 'Anantapur',
    year: 'Mar 2024',
    status: 'Completed',
    area: '50’ x 56’',
    client: 'Dr. Hemanthamani',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 31,
    title: 'Radha Srinivas Specialty Hospital',
    category: 'HEALTH CARE',
    location: 'Rayadurgam',
    year: 'Sep 2025',
    status: 'Ongoing',
    area: '50’ x 120’',
    client: 'Radha Srinivas',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },

  // HOSPITALITY
  {
    id: 32,
    title: 'Boutique City Cafe',
    category: 'HOSPITALITY',
    location: 'Anantapur',
    year: 'Mar 2023',
    status: 'Completed',
    area: 'Hospitality Design',
    client: 'Private Hospitality Partner',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
  },

  // MASTER PLAN
  {
    id: 33,
    title: 'Amrit Bharat Railway Stations Redevelopment Master Plan',
    category: 'MASTER PLAN',
    location: 'South Central Railway Zone',
    year: '2023 - 2026',
    status: 'Ongoing',
    area: '12 Railway Stations',
    client: 'Ministry of Railways / South Central Railways',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 34,
    title: 'Anantapur Urban Master Infrastructure Plan',
    category: 'MASTER PLAN',
    location: 'Anantapur',
    year: '2024 - 2026',
    status: 'Ongoing',
    area: 'Municipal Zone',
    client: 'AUDA & AMC',
    image: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&q=80&w=800'
  },

  // INTERIORS
  {
    id: 35,
    title: 'Contemporary Residence Interior',
    category: 'INTERIORS',
    location: 'Anantapur',
    year: 'Dec 2025',
    status: 'Ongoing',
    area: '33’ x 66’',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  }
];

const categories = [
  'ALL',
  'RESIDENTIAL',
  'COMMERCIAL',
  'PUBLIC PROJECTS',
  'HOUSING & APARTMENTS',
  'URBAN DESIGN',
  'HEALTH CARE',
  'HOSPITALITY',
  'MASTER PLAN',
  'INTERIORS'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
  }
};

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <motion.div
      className="container page-container"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ position: 'relative' }}
    >
      <header className="page-header">
        <h1 className="text-title">Selected Works ({projectsData.length}+)</h1>
        
        {/* Category Filters */}
        <div className="work-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} {cat === 'ALL' ? `(${projectsData.length})` : `(${projectsData.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <motion.div className="work-grid" variants={containerVariants} key={selectedCategory}>
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card" 
            variants={itemVariants}
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay-gradient"></div>
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category} — {project.location}</span>
              <span className="project-details-tag">{project.status} | {project.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="project-modal-box"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="project-modal-close"
                onClick={() => setActiveProject(null)}
              >
                <XIcon size={18} />
              </button>
              
              <img src={activeProject.image} alt={activeProject.title} className="project-modal-img" />
              
              <div className="project-modal-info">
                <h2>{activeProject.title}</h2>
                <span className="typology-badge">{activeProject.category}</span>
                
                <div className="project-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Location</span>
                    <span className="meta-val">{activeProject.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Year</span>
                    <span className="meta-val">{activeProject.year}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span className="meta-val">{activeProject.status}</span>
                  </div>
                  {activeProject.area && (
                    <div className="meta-item">
                      <span className="meta-label">Area</span>
                      <span className="meta-val">{activeProject.area}</span>
                    </div>
                  )}
                  {activeProject.client && (
                    <div className="meta-item" style={{ gridColumn: '1 / -1' }}>
                      <span className="meta-label">Client</span>
                      <span className="meta-val">{activeProject.client}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
