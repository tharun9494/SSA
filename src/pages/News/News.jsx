import React from 'react';
import { motion } from 'framer-motion';
import './News.css';

const newsItems = [
  { id: 1, date: 'October 12, 2023', title: 'Cadence featured in Architectural Digest', excerpt: 'Our recent project, The Layered House, has been featured in the latest issue of Architectural Digest.' },
  { id: 2, date: 'September 05, 2023', title: 'Winner of the National Design Award', excerpt: 'We are honored to receive the National Design Award for our innovative approach to sustainable architecture.' },
  { id: 3, date: 'August 20, 2023', title: 'New office opening in Mumbai', excerpt: 'We are expanding our presence with a new studio space in the heart of Mumbai to better serve our clients.' },
  { id: 4, date: 'July 15, 2023', title: 'Interview with the Founders', excerpt: 'Read the latest interview with our founders as they discuss the future of urban design and architecture.' },
];

const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const News = () => {
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
        <h1 className="text-title">News</h1>
      </header>

      <motion.div className="news-list" variants={containerVariants}>
        {newsItems.map((item) => (
          <motion.div key={item.id} className="news-item" variants={itemVariants}>
            <div className="news-meta">
              <span className="news-date">{item.date}</span>
            </div>
            
            <div className="news-content">
              <div className="news-title-row">
                <h3>{item.title}</h3>
                <span className="news-arrow-indicator">
                  <ArrowRightIcon size={14} />
                </span>
              </div>
              <p>{item.excerpt}</p>
            </div>

            {/* Micro-animated bottom border line that draws horizontally on scroll */}
            <motion.div 
              className="news-item-border"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default News;
