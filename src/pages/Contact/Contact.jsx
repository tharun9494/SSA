import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

// Inline SVGs for social media & interactive icons to ensure robust Rollup bundling
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

const CompassIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
);

const ChevronDownIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);

const ChevronUpIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
);

const MapPinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

// Animation configurations
const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
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

const categories = [
  'architecture',
  'structural engineering',
  'interior design',
  'urban planning',
  'careers'
];

const categoryHints = {
  'architecture': "let's design your dream space. tell us about your plot and design aspirations.",
  'structural engineering': "provide structural design requirements, soil reports, or valuation parameters.",
  'interior design': "share your interior styling ideas, residential rooms, or commercial fit-out goals.",
  'urban planning': "describe large-scale public masterplans, developments, or infrastructure projects.",
  'careers': "tell us about your academic credentials, design tools, and structural engineering passion."
};

const checklistData = [
  {
    num: "01",
    title: "site dimensions & survey",
    desc: "accurate plot dimensions, survey drawings, or a rough hand-drawn sketch of the site boundaries. this allows us to understand site constraints, setbacks, and solar orientations from the start."
  },
  {
    num: "02",
    title: "legal title & registry documents",
    desc: "relevant land registry title deeds, conversion certificates (e.g., non-agricultural conversion permission), and local municipal plan approvals. these documents help identify legal zoning parameters."
  },
  {
    num: "03",
    title: "design inspiration & mood board",
    desc: "a collection of architectural design styles, color palettes, materials, or specific layout ideas you like (pinterest boards, design magazine scans). this guides our stylistic alignment."
  },
  {
    num: "04",
    title: "spatial inventory & program",
    desc: "a list of required spaces, such as the number of bedrooms, specific functional areas (e.g., home office, prayer room, double-height ceiling), and general spatial expectations."
  },
  {
    num: "05",
    title: "financial budget & timeline goals",
    desc: "approximate project budget brackets and target completion dates. matching materials and design scale to realistic budgets ensures execution viability."
  }
];

const Contact = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState('architecture');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion Checklist State
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setActiveCategory('architecture');
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <motion.div
      className="contact-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Absolute Architectural Grid Overlay in Background */}
      <div className="architectural-grid-lines" aria-hidden="true">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Premium Full-bleed Banner */}
      <div className="sectionImgHeadWrapper">
        <div className="sectionImgHeadheight">
          <motion.img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="SS Associates Studio Drafting Table" 
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
            contact
          </motion.h2>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="contact-grid-content">
        <div className="contact-columns-grid">
          
          {/* Left Column: Details & Structured Channels */}
          <motion.div 
            className="contact-details-column"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="studio-heading-with-gps">
              <h3 className="contact-sub-heading">studio</h3>
              <div className="gps-coordinates-row">
                <CompassIcon size={12} />
                <span>14.6788° n, 77.5957° e | elev. 335m</span>
              </div>
            </div>
            
            <div className="contact-address-block">
              <p className="firm-title">S.S. Associates</p>
              <p className="address-lines">
                Lakshmi Ratna Towers<br />
                D.No: 15/703, Opp. Jonna Iron Mart<br />
                Kamalanagar, Anantapur<br />
                Andhra Pradesh 515001
              </p>
            </div>

            {/* Structured Departmental Contacts */}
            <div className="departments-contact-stack">
              <h4 className="department-title-divider">departments</h4>
              
              <div className="department-item">
                <span className="dept-tag">general & projects</span>
                <span className="dept-lead">Ar. S.N. Sai Sanketh</span>
                <div className="dept-links">
                  <a href="tel:+919542630670" className="dept-comms"><PhoneIcon size={12} /> +91 95426 30670</a>
                  <a href="mailto:studio@ssassociates.com" className="dept-comms"><MailIcon size={12} /> studio@ssassociates.com</a>
                </div>
              </div>

              <div className="department-item">
                <span className="dept-tag">structures & valuation</span>
                <span className="dept-lead">Er. S. Sudhakar</span>
                <div className="dept-links">
                  <a href="mailto:sudhakar@ssassociates.com" className="dept-comms"><MailIcon size={12} /> sudhakar@ssassociates.com</a>
                </div>
              </div>

              <div className="department-item">
                <span className="dept-tag">careers & internships</span>
                <p className="dept-pitch">we are always looking for creative design partners and structural specialists.</p>
                <div className="dept-links">
                  <a href="mailto:careers@ssassociates.com" className="dept-comms"><MailIcon size={12} /> careers@ssassociates.com</a>
                </div>
              </div>
            </div>

            <h3 className="contact-sub-heading" style={{ marginTop: '2.5rem' }}>connect</h3>
            <div className="contact-social-row">
              <a href="https://www.instagram.com/ssa_associates/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sai-sanketh-40a43b88/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
            </div>

            {/* Premium Grayscale Map Embed */}
            <div className="map-embed-wrapper">
              <iframe 
                title="S.S. Associates Anantapur Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.342930740925!2d77.5956799757657!3d14.678768079089531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac5f9ab8a83%3A0xe54e634eeb8fb4a8!2sKamalanagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-glass-overlay">
                <div className="map-overlay-content">
                  <MapPinIcon size={14} />
                  <span>Kamalanagar, Anantapur</span>
                  <a 
                    href="https://maps.google.com/?q=Kamalanagar,+Anantapur,+Andhra+Pradesh+515001" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="map-redirect-btn"
                  >
                    open maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            className="contact-form-column"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="contact-sub-heading">inquiries</h3>

            {/* Interactive Category Selector */}
            <div className="inquiry-category-selector-wrapper">
              <span className="category-selection-label">what are you looking to build?</span>
              <div className="category-pills-row">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <motion.span 
                key={activeCategory}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="category-helper-hint"
              >
                — {categoryHints[activeCategory]}
              </motion.span>
            </div>
            
            <form className="contact-inquiry-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <input 
                  type="text" 
                  className="contact-form-input" 
                  placeholder="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
                <span className="focus-border-line"></span>
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="email" 
                  className="contact-form-input" 
                  placeholder="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <span className="focus-border-line"></span>
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="text" 
                  className="contact-form-input" 
                  placeholder="subject (optional)" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span className="focus-border-line"></span>
              </div>
              
              <div className="contact-form-group">
                <textarea 
                  className="contact-form-input contact-form-textarea" 
                  placeholder="message / project details" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <span className="focus-border-line"></span>
              </div>
              
              <button type="submit" className="contact-submit-btn">
                <span>send message</span>
              </button>
            </form>
          </motion.div>

        </div>

        {/* Project Preparation Checklist Section (Interactive Accordion) */}
        <motion.div 
          className="contact-checklist-section"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="checklist-header">
            <span className="checklist-tag">preparation guide</span>
            <h3 className="checklist-title">planning your first consultation</h3>
            <p className="checklist-subtitle">to help us draft the structural limits and architectural sketches of your vision, we recommend assembling these key elements before our first discussion:</p>
          </div>

          <div className="checklist-accordion">
            {checklistData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="accordion-title-block">
                      <span className="item-number">{item.num}</span>
                      <span className="item-title">{item.title}</span>
                    </div>
                    <div className="accordion-icon-wrapper">
                      {isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="accordion-content"
                      >
                        <div className="accordion-content-inner">
                          <p>{item.desc}</p>
                          <div className="requirement-check-row">
                            <CheckIcon size={12} />
                            <span>recommended parameter</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Spectacular Submit Success Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dark grid background overlay */}
            <div className="blueprint-grid-bg"></div>

            <motion.div 
              className="success-card"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <button 
                type="button" 
                className="success-close-btn"
                onClick={handleResetForm}
                aria-label="Close message overlay"
              >
                <XIcon size={20} />
              </button>

              <div className="success-blueprint-header">
                <CompassIcon size={18} className="success-compass-icon" />
                <span className="success-card-coordinates">14.6788° n, 77.5957° e | s.s.associates</span>
              </div>

              <div className="success-card-body">
                <span className="success-status-tag">transmission received</span>
                <h4 className="success-heading">inquiry registered</h4>
                
                <div className="architect-letter-wrapper">
                  <p className="letter-salutation">dear {name.toLowerCase()},</p>
                  <p className="letter-body">
                    we have successfully received your inquiry regarding <strong>{activeCategory}</strong> projects. 
                    our multidisciplinary studio is compiling spatial bounds and structural files matching your initial overview.
                  </p>
                  <p className="letter-body">
                    a senior consulting engineer or project architect will contact you at <strong>{email.toLowerCase()}</strong> to schedule an introductory consultation.
                  </p>
                  
                  <div className="letter-signature-block">
                    <p className="letter-closing">best regards,</p>
                    <p className="handwritten-signature">s.s. associates studio</p>
                    <p className="letter-signer-credentials">kamalanagar, anantapur</p>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="success-return-btn"
                  onClick={handleResetForm}
                >
                  return to studio
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
