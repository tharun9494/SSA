import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  Building2,
  FileCheck,
  Calculator,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  DraftingCompass
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 'architecture',
    icon: Compass,
    number: '01',
    title: 'Architectural Design',
    subtitle: 'From concept sketches to high-performance built environments',
    description: 'We believe architecture is born from a sensitive dialogue between people, place, light, and materiality. Our architectural practice handles diverse typologies ranging from custom private residences to multi-tier commercial hubs.',
    deliverables: [

      'Photorealistic architectural renderings & virtual walk-throughs',
      'Comprehensive architectural working drawings & construction packages',
      'Integration of natural ventilation, passive cooling & daylighting strategies',
      'Periodic architectural site reviews & quality assurance'
    ],
    tag: 'Core Discipline'
  },
  {
    id: 'urban-planning',
    icon: Building2,
    number: '02',
    title: 'Urban Design & Master Planning',
    subtitle: 'Scalable regional frameworks, residential townships & civic campuses',
    description: 'Our planning consultancy focuses on sustainable land utilization, intuitive mobility networks, and humane urban environments. We structure master plans that harmonize infrastructure with topography and environmental assets.',
    deliverables: [
      'Gated community & plotted layout master planning',
      'Institutional & educational campus master zoning',
      'Open space and landscape design'

    ],
    tag: 'Macro Scale'
  },
  {
    id: 'structural',
    icon: Layers,
    number: '03',
    title: 'Structural Design & Engineering',
    subtitle: 'Over 40 years of structural resilience, stability & economy',
    description: 'Led by veteran structural engineering leadership, our structural wing delivers robust, cost-effective structural systems that withstand seismic forces, severe soil conditions, and high-load commercial usage.',
    deliverables: [
      'Seismic-resistant Reinforced Concrete (RCC) frame design (IS 1893 / IS 13920)',

      'Deep and shallow foundation design based on soil strata geotechnical reports',
      'Detailed structural rebar BBS (Bar Bending Schedules) & construction drawings',

      'Comprehensive Bill of Quantities (BOQ) & structural steel estimation'
    ],
    tag: 'Engineering Excellence'
  },
  {
    id: 'statutory-approvals',
    icon: FileCheck,
    number: '04',
    title: 'Government Sanctions & Statutory Approvals',
    subtitle: 'Navigating municipal clearances, DTCP sanctions & bylaws compliance',
    description: 'Securing legal building permits and regulatory approvals is critical to avoiding construction delays. Our office manages the entire statutory process with deep expertise in regional town planning norms and single-window portals.',
    deliverables: [
      'DTCP (Directorate of Town and Country Planning) layout and building approvals',
      'Municipal Corporation building permission & plan scrutiny submissions',
      'Building bylaws conformity analysis (FAR, setbacks, height restrictions)',
      'Fire Department NOC documentation and life safety compliance'
    ],
    tag: 'Compliance'
  },
  {
    id: 'valuation',
    icon: Calculator,
    number: '05',
    title: 'Chartered Valuation & Real Estate Advisory',
    subtitle: 'Government-registered valuation for banking, legal & asset management',
    description: 'As registered Government Valuers (IBBI & Wealth Tax Act), S.S. Associates provides impartial, court-admissible asset valuation for commercial establishments, industrial properties, land parcels, and residential complexes.',
    deliverables: [
      'Bank mortgage & loan collateral property valuation reports',
      'Capital gains tax assessments & cost of acquisition indexation',
      'Valuation for corporate mergers, balance sheet audits & dispute settlement'

    ],
    tag: 'Advisory'
  },
  {
    id: 'interior-space',
    icon: DraftingCompass,
    number: '06',
    title: 'Interior Architecture & Spatial Styling',
    subtitle: 'Curated interior environments that elevate daily life',
    description: 'Extending the architectural thesis into the interior realm, we craft custom spatial interventions where joinery, bespoke lighting, acoustic balance, and tactile materials form cohesive sanctuaries.',
    deliverables: [
      'Spatial layout, ergonomics & internal circulation design',
      'Custom millwork, cabinetry & architectural joinery drawings',
      'Material palette selection (natural stones, curated timber, architectural metals)',
      'Architectural lighting layouts, luminaire specification & switching schedules',
      'Procurement guidance & site fit-out coordination'
    ],
    tag: 'Interiors'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Inquiry & Site Briefing',
    desc: 'Understanding client aspirations, site topography, microclimate, functional program, and budgetary parameters.'
  },
  {
    num: '02',
    title: 'Concept & Feasibility',
    desc: 'Iterative design studies, 3D massing, spatial choreography, and preliminary structural & regulatory validation.'
  },
  {
    num: '03',
    title: 'Design Development & Sanctions',
    desc: 'Refining architectural drawings, engineering structural calculations, and submitting statutory sanction files.'
  },
  {
    num: '04',
    title: 'Working Drawings & BOQ',
    desc: 'Issuing complete millimeter-precise tender packages, BBS, plumbing, electrical, and specification schedules.'
  },
  {
    num: '05',
    title: 'Execution & Quality Review',
    desc: 'Periodic site visits, checking reinforcement before casting, ensuring flawless execution of architectural intent.'
  }
];

const Services = () => {
  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-eyebrow">Professional Consultancy</span>
          <h1 className="services-title">Our Services</h1>
          <p className="services-lead">
            S.S. Associates is an integrated practice delivering multidisciplinary excellence across
            Architecture, Urban Design, Structural Engineering, Government Sanctions, and Asset Valuation.
            We transform vision into enduring, functional, and beautifully crafted built reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-catalog-section">
        <div className="services-container">
          <div className="services-grid">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.article
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="service-card-header">
                    <div className="service-badge-wrapper">
                      <span className="service-number">{service.number}</span>
                      <span className="service-tag">{service.tag}</span>
                    </div>
                    <div className="service-icon-box">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h2 className="service-card-title">{service.title}</h2>
                  <p className="service-card-subtitle">{service.subtitle}</p>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-deliverables">
                    <h3 className="deliverables-heading">Key Scope & Deliverables</h3>
                    <ul className="deliverables-list">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <CheckCircle2 size={16} className="deliverable-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structured Process Section */}
      <section className="services-process-section">
        <div className="services-container">
          <div className="process-header">
            <span className="services-eyebrow">Methodology</span>
            <h2 className="process-title">How We Deliver Excellence</h2>
            <p className="process-sub">A disciplined, transparent 5-stage progression from concept to handover.</p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step-item">
                <div className="process-step-num">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-container">
          <div className="services-cta-box">
            <div className="cta-text">
              <h2>Have a Project in Mind?</h2>
              <p>Discuss your site, functional needs, or structural requirements with our senior team.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="cta-primary-btn">
                <span>Start Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+919542630670" className="cta-secondary-btn">
                <span>+91 95426 30670</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
