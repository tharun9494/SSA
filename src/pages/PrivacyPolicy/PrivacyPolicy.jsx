import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Eye, CheckCircle2, Mail, MapPin } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="legal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-eyebrow">Legal & Compliance</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-date">Last Updated: March 2026</p>
          <p className="legal-lead">
            At S.S. Associates, we value the trust you place in us when sharing your property details, 
            architectural briefs, and personal information. This Privacy Policy details how we collect, 
            safeguard, and utilize your data in connection with our architectural, planning, engineering, 
            and valuation consultancy services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-body-section">
        <div className="legal-container">
          <div className="legal-layout">
            
            {/* Quick Summary Sidebar */}
            <aside className="legal-sidebar">
              <div className="summary-card">
                <div className="summary-card-header">
                  <Shield size={20} className="summary-icon" />
                  <h3>Policy Highlights</h3>
                </div>
                <ul className="summary-list">
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Your architectural drawings and site documents are treated with strict confidentiality.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Data is shared strictly with statutory sanction bodies (Municipal Corporation/DTCP) as required by law.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>We do not sell, monetize, or trade your contact or project information to third parties.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>All digital models, CAD files, and valuation reports are stored on secured, access-controlled drives.</span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Document Clauses */}
            <article className="legal-article">
              
              <div className="legal-clause">
                <h2>1. Information We Collect</h2>
                <p>
                  To provide comprehensive architectural, structural engineering, and statutory valuation services, 
                  S.S. Associates collects information that you provide directly to us during consultations, site visits, 
                  and contract initiation.
                </p>
                <ul>
                  <li><strong>Personal Contact Information:</strong> Name, phone number, residential address, email address, and official identity proofs where required for statutory filings.</li>
                  <li><strong>Site & Property Records:</strong> Land survey maps, registered title deeds, parent documents, link documents, site dimensions, photographs, and soil investigation reports.</li>
                  <li><strong>Project Program & Briefs:</strong> Spatial requirements, functional schedules, budgetary constraints, aesthetic preferences, and material specifications.</li>
                  <li><strong>Technical & Financial Records:</strong> Previous sanction plans, property tax assessment receipts, structural assessment reports, and cost estimates for valuation filings.</li>
                </ul>
              </div>

              <div className="legal-clause">
                <h2>2. How We Utilize Your Information</h2>
                <p>We process your information exclusively for professional consultancy purposes, including:</p>
                <ul>
                  <li>Generating concept drawings, 3D visualizations, structural calculations, and millimeter-accurate working drawings.</li>
                  <li>Drafting and submitting statutory approval dossiers to the Anantapur Municipal Corporation, DTCP, APDPMS single-window portal, and Fire Safety Directorates.</li>
                  <li>Preparing registered valuation appraisal certificates for banks, legal arbitrations, wealth tax authorities, or capital gains documentation.</li>
                  <li>Conducting on-site quality assurance audits and coordinating with soil testing and structural fabrication agencies.</li>
                  <li>Communicating project progress reports, milestone billings, and responding to inquiries.</li>
                </ul>
              </div>

              <div className="legal-clause">
                <h2>3. Statutory Submissions & Third-Party Disclosure</h2>
                <p>
                  S.S. Associates maintains a strict policy regarding the confidentiality of client data. We do not sell or lease 
                  client data. Disclosures are limited strictly to:
                </p>
                <ul>
                  <li><strong>Statutory Authorities:</strong> Municipal Corporations, Urban Development Authorities (DTCP/KUDA/APCRDA), Revenue Department, and Fire Safety departments solely for obtaining legal building sanctions and licenses.</li>
                  <li><strong>Specialized Technical Consultants:</strong> Soil testing laboratories, MEP (mechanical, electrical, plumbing) engineering partners, and structural proof consultants engaged directly for your project under reciprocal non-disclosure obligations.</li>
                  <li><strong>Legal Compliance:</strong> When compelled by court orders, judicial summons, or applicable laws under Indian jurisdiction.</li>
                </ul>
              </div>

              <div className="legal-clause">
                <h2>4. Intellectual Property & Design Confidentiality</h2>
                <p>
                  All architectural concepts, sketches, 3D renderings, and structural designs formulated by S.S. Associates 
                  remain the intellectual property of the firm as recognized under the Indian Copyright Act, 1957, and Council 
                  of Architecture guidelines.
                </p>
                <p>
                  Photographs of completed projects may be published in our curated monograph, website, or architectural journals 
                  to celebrate design achievement. We respect client privacy and will never disclose internal floor plans, 
                  security arrangements, or precise street addresses of private residences without express permission.
                </p>
              </div>

              <div className="legal-clause">
                <h2>5. Data Security & Storage</h2>
                <p>
                  We implement robust digital and physical security protocols to safeguard CAD drawings, structural BIM models, 
                  and client records against unauthorized access, loss, or disclosure. All digital project archives are preserved 
                  in access-controlled local and cloud repositories equipped with regular backup mechanisms.
                </p>
              </div>

              <div className="legal-clause">
                <h2>6. Your Rights</h2>
                <p>
                  Clients possess the right to request access to their design archives, request corrections to personal records, 
                  or seek clarification regarding statutory dossiers submitted in their name. Requests can be lodged by contacting 
                  our administrative office.
                </p>
              </div>

              <div className="legal-clause">
                <h2>7. Contact & Grievance Redressal</h2>
                <p>
                  For questions, feedback, or concerns regarding this Privacy Policy or our data management procedures, please contact:
                </p>
                <div className="legal-contact-box">
                  <p><strong>S.S. Associates — Administrative Office</strong></p>
                  <p>15/703, Above City Union Bank, Kamalanagar, Anantapur, Andhra Pradesh 515001</p>
                  <p>Phone: <a href="tel:+919542630670">+91 95426 30670</a></p>
                  <p>Email: <a href="mailto:studio@ssassociates.com">studio@ssassociates.com</a></p>
                </div>
              </div>

            </article>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
