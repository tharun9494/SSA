import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const projects = [
  { id: 1, title: 'The Layered House', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'KDP Office', category: 'Interior', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Eclipse', category: 'Architecture', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Zenith', category: 'Interior', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Aura Villa', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Studio 54', category: 'Interior', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const Work = () => {
  return (
    <motion.div
      className="container page-container"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ position: 'relative' }}
    >
      {/* Absolute Architectural Grid Overlay in Background */}
      <div className="architectural-grid-lines" aria-hidden="true">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <header className="page-header">
        <h1 className="text-title">Selected Work</h1>
      </header>

      <motion.div className="work-grid" variants={containerVariants}>
        {projects.map((project) => (
          <motion.div key={project.id} className="project-card" variants={itemVariants}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay-gradient"></div>
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
