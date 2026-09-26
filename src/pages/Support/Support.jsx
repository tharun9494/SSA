import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  CheckCircle,
  FileQuestion,
  Headphones,
  Calendar
} from 'lucide-react';
import './Support.css';

const faqs = [
  {
    q: 'How do I initiate a new architectural or structural project with S.S. Associates?',
    a: 'You can begin by contacting our office via phone (+91 95426 30670), email (studio@ssassociates.com), or by submitting the consultation request form below. We will arrange an initial discovery meeting to review your site dimensions, survey documents, budgetary guidelines, and functional aspirations.'
  },
  {
    q: 'What site documents are required before commencing architectural design?',
    a: 'To begin conceptual planning, we typically require: (1) Registered sale deed or title document, (2) Topographical land survey with boundary dimensions and North orientation, (3) Soil test geotechnical report (for structural engineering calculations), and (4) Existing road width and adjacent structure details.'
  },
  {
    q: 'Does S.S. Associates manage the entire municipal and DTCP building approval process?',
    a: 'Yes. Our team has four decades of expertise liaising with the Municipal Corporation and DTCP authorities. We prepare complete statutory scrutiny drawings, calculate Floor Area Ratios (FAR), ensure setback compliance, and coordinate clearances through the single-window APDPMS portal.'
  },
  {
    q: 'How often do your structural engineers and architects visit the construction site?',
    a: 'We conduct key milestone site inspections, specifically: (1) Initial foundation marking and soil strata verification, (2) Plinth beam rebar inspection prior to concrete pouring, (3) Roof slab reinforcement and electrical conduit layout verification before casting, and (4) Critical architectural finishing milestones.'
  },
  {
    q: 'How long does a Government Valuation report take to prepare?',
    a: 'Standard bank mortgage or capital gains valuation reports are typically finalized within 3 to 5 business days following on-site physical inspection and verification of title deeds, approved building plans, and tax assessment receipts.'
  },
  {
    q: 'Can you assist if our ongoing construction is experiencing structural issues or cracks?',
    a: 'Yes. Our senior structural team conducts structural health integrity audits, non-destructive testing (NDT), load redistribution evaluations, and issues retrofitting/strengthening solutions for distressed buildings.'
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Consultation',
    desc: 'Speak directly with our senior project coordination team.',
    contact: '+91 95426 30670',
    link: 'tel:+919542630670',
    actionText: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Correspondence',
    desc: 'Send drawings, RFPs, or project briefs directly to our studio.',
    contact: 'studio@ssassociates.com',
    link: 'mailto:studio@ssassociates.com',
    actionText: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Studio Visit',
    desc: 'Visit our design headquarters for in-person review & presentations.',
    contact: 'Kamalanagar, Anantapur, AP',
    link: 'https://maps.app.goo.gl/HceqbRbxvj4Ktr2c9',
    actionText: 'View on Maps'
  },
  {
    icon: Clock,
    title: 'Studio Hours',
    desc: 'Monday through Saturday: 09:30 AM – 07:30 PM (IST). Sunday by appointment.',
    contact: 'Mon - Sat: 9:30 AM - 7:30 PM',
    link: null,
    actionText: null
  }
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Architecture',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      className="support-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Header */}
      <section className="support-hero">
        <div className="support-hero-content">
          <span className="support-eyebrow">Client Support & Inquiries</span>
          <h1 className="support-title">How Can We Help You?</h1>
          <p className="support-lead">
            Whether you are embarking on a new architectural project, need structural engineering guidance, 
            or require assistance with municipal sanctions and asset valuation, our team is here to support you.
          </p>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section className="support-channels-section">
        <div className="support-container">
          <div className="channels-grid">
            {supportChannels.map((channel, idx) => {
              const IconComp = channel.icon;
              return (
                <div key={idx} className="channel-card">
                  <div className="channel-icon-box">
                    <IconComp size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="channel-title">{channel.title}</h3>
                  <p className="channel-desc">{channel.desc}</p>
                  <div className="channel-contact">{channel.contact}</div>
                  {channel.link && (
                    <a 
                      href={channel.link} 
                      className="channel-action-link"
                      target={channel.link.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {channel.actionText} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Two-Column Content: Ticket Form + FAQs */}
      <section className="support-main-section">
        <div className="support-container">
          <div className="support-layout">
            
            {/* Left Column: Form */}
            <div className="support-form-wrapper">
              <div className="form-header">
                <span className="support-eyebrow">Quick Inquiry</span>
                <h2>Submit a Support Request</h2>
                <p>Provide details about your query or project. Our engineering and design team will respond within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="support-success-card">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Request Received</h3>
                  <p>Thank you for contacting S.S. Associates. A senior coordinator has been notified and will reach out to you shortly.</p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', serviceType: 'Architecture', message: '' });
                    }}
                    className="reset-form-btn"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="support-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType">Nature of Inquiry</label>
                    <select 
                      id="serviceType" 
                      name="serviceType" 
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="Architecture">Architectural Design & Planning</option>
                      <option value="Structural">Structural Engineering & Soil Inspection</option>
                      <option value="Valuation">Chartered Valuation & Property Appraisal</option>
                      <option value="Sanctions">Municipal Sanctions & DTCP Approvals</option>
                      <option value="OngoingProject">Ongoing Project Site Support</option>
                      <option value="Other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Site Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your site location, plot size, structural requirement, or question..."
                    ></textarea>
                  </div>

                  <button type="submit" className="support-submit-btn">
                    <span>Send Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: FAQs */}
            <div className="support-faq-wrapper">
              <div className="faq-header">
                <span className="support-eyebrow">Frequently Asked Questions</span>
                <h2>Common Inquiries</h2>
                <p>Quick answers regarding our engagement model, drawings, and site visits.</p>
              </div>

              <div className="faq-accordion">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                      <button 
                        className="faq-question-btn"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-q-text">{faq.q}</span>
                        <span className="faq-toggle-icon">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer-box">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Support;
