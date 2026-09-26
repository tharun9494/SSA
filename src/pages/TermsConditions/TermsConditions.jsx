import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, AlertCircle, Scale, ShieldCheck } from 'lucide-react';
import '../PrivacyPolicy/PrivacyPolicy.css'; // Reuses clean, responsive legal layout

const TermsConditions = () => {
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
          <span className="legal-eyebrow">Legal & Professional Norms</span>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-date">Last Updated: March 2026</p>
          <p className="legal-lead">
            These Terms and Conditions govern the professional architectural, structural engineering, 
            urban planning, and chartered valuation consultancy services provided by S.S. Associates. 
            By retaining our services or commissioning design drawings, clients agree to the following terms.
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
                  <Scale size={20} className="summary-icon" />
                  <h3>Engagement Basis</h3>
                </div>
                <ul className="summary-list">
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Conforms to Council of Architecture (CoA) standards of professional conduct.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Drawings are licensed for execution strictly on the designated project site.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Structural designs strictly adhere to relevant Bureau of Indian Standards (BIS) codes.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} />
                    <span>Disputes are subject to the exclusive jurisdiction of courts in Anantapur, AP.</span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Document Clauses */}
            <article className="legal-article">
              
              <div className="legal-clause">
                <h2>1. Professional Engagement & Scope</h2>
                <p>
                  S.S. Associates acts as an independent professional consultant providing architectural design, 
                  structural engineering calculations, municipal sanction dossiers, and valuation reports. 
                  The specific scope, stage-wise deliverables, and schedule of fees for each commission are formalized 
                  in the project-specific engagement agreement or service invoice.
                </p>
              </div>

              <div className="legal-clause">
                <h2>2. Client Responsibilities & Site Data</h2>
                <p>To enable accurate and timely design development, the client undertakes to provide:</p>
                <ul>
                  <li>Authentic land ownership documents, revenue survey maps, and boundary demarcations certified by a licensed surveyor.</li>
                  <li>A certified geotechnical soil investigation report from an accredited laboratory prior to the release of structural foundation designs.</li>
                  <li>Direct payment of all government statutory scrutiny fees, municipal development charges, and license levies required for plan approval.</li>
                  <li>Timely review and approvals at each designated design milestone to prevent project stalling.</li>
                </ul>
              </div>

              <div className="legal-clause">
                <h2>3. Design Milestones & Revisions</h2>
                <p>
                  Our design methodology follows structured phases: (1) Conceptual Scheme, (2) Preliminary Design & Client Review, 
                  (3) Statutory Sanction Drawings, and (4) Detailed Working & Structural Drawings.
                </p>
                <p>
                  Reasonable iterative refinements are incorporated within the conceptual design phase. Substantial modifications 
                  requested after the client's formal freeze of the concept, or after the issuance of municipal sanction drawings, 
                  will be treated as scope revisions subject to mutually agreed additional professional fees.
                </p>
              </div>

              <div className="legal-clause">
                <h2>4. Intellectual Property & Copyright</h2>
                <p>
                  Pursuant to the Indian Copyright Act, 1957, and standard architectural practice, all original copyright 
                  in architectural drawings, elevations, 3D renderings, and engineering calculations prepared by S.S. Associates 
                  remains vested in the firm.
                </p>
                <p>
                  The client is granted a single, non-transferable license to execute the design exclusively on the specific site 
                  for which it was commissioned. Drawings shall not be duplicated, adapted for alternative locations, or assigned 
                  to third parties without prior written consent.
                </p>
              </div>

              <div className="legal-clause">
                <h2>5. Structural Engineering & Construction Compliance</h2>
                <p>
                  All structural engineering calculations and reinforcement schedules issued by S.S. Associates comply strictly 
                  with the National Building Code of India (NBC 2016) and corresponding Bureau of Indian Standards (IS 456, IS 1893, IS 13920).
                </p>
                <p>
                  Structural integrity is strictly contingent upon: (a) contractor adherence to specified concrete mix grades and reinforcement placements, 
                  (b) proper curing practices, and (c) execution strictly matching issued good-for-construction (GFC) drawings without unauthorized field alterations.
                </p>
              </div>

              <div className="legal-clause">
                <h2>6. Site Supervision & Advisory Role</h2>
                <p>
                  S.S. Associates conducts periodic quality review visits at critical construction milestones (foundation marking, 
                  plinth level, and slab reinforcement inspection prior to concreting).
                </p>
                <p>
                  The firm functions in a supervisory and advisory capacity to verify fidelity to architectural and structural intent. 
                  Continuous day-to-day site management, labor safety, construction methodology, material procurement, and workmanship 
                  remain the exclusive responsibility of the appointed building contractor.
                </p>
              </div>

              <div className="legal-clause">
                <h2>7. Professional Fees & Payment Terms</h2>
                <p>
                  Consultancy fees are linked to deliverables and stage completion as outlined in the project quotation. 
                  Invoices are payable within 15 calendar days of issuance. Release of subsequent drawing packages (such as structural 
                  working drawings) is subject to settlement of preceding milestone payments.
                </p>
              </div>

              <div className="legal-clause">
                <h2>8. Jurisdiction & Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the Republic of India. 
                  Any dispute, controversy, or claim arising out of or relating to our professional engagement shall be subject 
                  to the exclusive jurisdiction of the competent civil courts situated at Anantapur, Andhra Pradesh.
                </p>
              </div>

            </article>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsConditions;
