import React, { useState } from "react";
import {
  FolderGit2,
  Shield,
  Lock,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function Projects() {
  const [expanded, setExpanded] = useState({ 0: false, 1: false });

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const projectsData = [
    {
      id: "soc-lab",
      title: "Threat Intelligence Driven SOC",
      subtitle: "Security Operations Lab",
      date: "July 2026",
      category: "SecOps & Threat Intel",
      icon: Shield,
      accentColor: "#38bdf8",
      accentGlow: "rgba(56, 189, 248, 0.22)",
      githubUrl:
        "https://github.com/PariTenguriya/Threat-Intelligence-Driven-Security-Operations-Center-SOC-",
      teaser:
        "Built an enterprise-grade threat-informed SOC monitoring environment combining Wazuh SIEM telemetry, MISP threat intelligence, and MITRE ATT&CK behavioral detection.",
      techStack: [
        "Wazuh",
        "MISP",
        "MITRE ATT&CK",
        "Sysmon",
        "Kali Linux",
        "Windows",
      ],
      challenge:
        "Endpoint monitoring required centralized detection and threat-intelligence context to reduce alert fatigue and validate detections against controlled adversary attacks.",
      result:
        "800+ events/24h processed with real-time, severity-tiered detection and confirmed technique-level coverage across credential access, persistence and authentication anomalies.",
      keyActions: [
        "Built a security operations lab executing controlled Kali Linux attacks against Windows endpoints.",
        "Collected Sysmon telemetry through Wazuh and mapped events directly to MITRE ATT&CK techniques.",
        "Integrated Wazuh with MISP via REST API for automated threat-intelligence enrichment.",
        "Validated Windows security activity using Wazuh FIM + Event ID 4688 and tested T1546.008 (Utilman.exe bypass).",
      ],
      deliverables: [
        "🛡️ Wazuh-based SOC monitoring environment",
        "🔎 Sysmon + Windows endpoint telemetry",
        "🧠 MITRE ATT&CK detection mapping",
        "🌐 MISP threat-intelligence integration",
        "🐍 REST API / Python automation",
        "⚔️ Controlled Kali attack simulation",
      ],
    },
    {
      id: "pki-lab",
      title: "Certificate Authority & SSL/TLS Implementation",
      subtitle: "Enterprise PKI Lab",
      date: "May 2025",
      category: "Identity & Cryptography",
      icon: Lock,
      accentColor: "#818cf8",
      accentGlow: "rgba(129, 140, 248, 0.22)",
      githubUrl: "https://github.com/PariTenguriya",
      teaser:
        "Engineered a 5-node domain Public Key Infrastructure (PKI) environment to eliminate browser security trust warnings, automate certificate issuance, and secure enterprise web traffic.",
      techStack: ["AD CS", "AD DS", "IIS", "SSL/TLS", "CRL", "Group Policy"],
      challenge:
        "A practical lab environment required trusted HTTPS communication and centralized certificate lifecycle management without browser trust warnings.",
      result:
        "Eliminated browser security warnings, established encrypted client-server communication and implemented centralized certificate lifecycle management across 3+ client endpoints.",
      keyActions: [
        "Implemented a 5-node domain-based PKI environment consisting of AD DS, AD CS, IIS and client machines.",
        "Deployed PKI using Active Directory Certificate Services with automated certificate issuance.",
        "Configured CRL distribution and integrated SSL/TLS with IIS web servers for secure HTTPS.",
        "Resolved certificate trust-chain issues using Group Policy Objects (GPO).",
      ],
      deliverables: [
        "🔐 Built a 5-node enterprise PKI lab",
        "🏛️ Implemented AD CS / Certificate Authority",
        "🌐 Secured IIS applications using SSL/TLS",
        "♻️ Implemented CRL-based certificate management",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .projects-section {
          padding: 100px 24px;
          max-width: 1240px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .light-mode .projects-section {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .section-header {
          margin-bottom: 44px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 13px;
          font-weight: 500;
          color: #a1a1aa;
          margin-bottom: 12px;
        }

        .light-mode .section-tag {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #4b5563;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .light-mode .section-title {
          color: #09090b;
        }

        .section-subtext {
          font-size: 15px;
          color: #a1a1aa;
          max-width: 620px;
          line-height: 1.6;
        }

        .light-mode .section-subtext {
          color: #64748b;
        }

        /* ========================================================
           PROJECTS GRID LAYOUT
        ======================================================== */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          align-items: start;
        }

        .project-card {
          background: rgba(18, 18, 24, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 34px 32px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .light-mode .project-card {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.07);
        }

        .project-card:hover {
          border-color: var(--proj-accent, #38bdf8);
          transform: translateY(-4px);
          box-shadow:
            0 24px 60px rgba(0, 0, 0, 0.55),
            0 0 35px var(--proj-glow, rgba(56, 189, 248, 0.2));
        }

        .light-mode .project-card:hover {
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.1),
            0 0 28px var(--proj-glow, rgba(56, 189, 248, 0.15));
        }

        /* Top Accent Highlight Beam */
        .card-top-beam {
          position: absolute;
          top: 0;
          left: 12%;
          right: 12%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--proj-accent, #38bdf8), transparent);
          opacity: 0.9;
        }

        /* Ambient Corner Glow */
        .card-corner-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--proj-glow, rgba(56, 189, 248, 0.25)) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Project Card Header */
        .project-header-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .project-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--proj-glow, rgba(56, 189, 248, 0.15));
          border: 1px solid var(--proj-accent, #38bdf8);
          color: var(--proj-accent, #38bdf8);
          box-shadow: 0 0 20px var(--proj-glow, rgba(56, 189, 248, 0.2));
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-icon-box {
          transform: scale(1.08) rotate(3deg);
        }

        .project-meta-pills {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .project-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--proj-accent, #38bdf8);
        }

        .light-mode .project-category-badge {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .project-date-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #71717a;
          font-weight: 500;
        }

        .light-mode .project-date-chip {
          color: #64748b;
        }

        .project-title {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .light-mode .project-title {
          color: #09090b;
        }

        .project-teaser {
          font-size: 14px;
          line-height: 1.6;
          color: #a1a1aa;
          margin: 0 0 20px 0;
        }

        .light-mode .project-teaser {
          color: #4b5563;
        }

        /* Tech Stack Chips */
        .tech-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .stack-chip {
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #d4d4d8;
          transition: all 0.2s ease;
        }

        .light-mode .stack-chip {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
          color: #1f2937;
        }

        .stack-chip:hover {
          background: var(--proj-glow, rgba(56, 189, 248, 0.2));
          border-color: var(--proj-accent, #38bdf8);
          color: #ffffff;
        }

        .light-mode .stack-chip:hover {
          color: #09090b;
        }

        /* Result Preview Card */
        .result-preview-box {
          background: rgba(16, 185, 129, 0.07);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 16px;
          padding: 16px 18px;
          margin-bottom: 24px;
        }

        .light-mode .result-preview-box {
          background: rgba(16, 185, 129, 0.08);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .result-preview-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #10b981;
          margin-bottom: 6px;
        }

        .result-preview-text {
          font-size: 13.5px;
          line-height: 1.5;
          color: #d1fae5;
          font-weight: 500;
          margin: 0;
        }

        .light-mode .result-preview-text {
          color: #065f46;
        }

        /* ========================================================
           ACTION BUTTONS ROW (VIEW MORE & VIEW ON GITHUB)
        ======================================================== */
        .project-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .project-actions-row {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        /* Button 1: View More / View Less */
        .btn-view-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        .light-mode .btn-view-more {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #111827;
        }

        .btn-view-more:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: var(--proj-accent, #38bdf8);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--proj-glow, rgba(56, 189, 248, 0.25));
        }

        .light-mode .btn-view-more:hover {
          background: rgba(0, 0, 0, 0.09);
          border-color: var(--proj-accent, #38bdf8);
          color: #000000;
        }

        .btn-view-more.active {
          background: var(--proj-glow, rgba(56, 189, 248, 0.18));
          border-color: var(--proj-accent, #38bdf8);
          color: var(--proj-accent, #38bdf8);
        }

        /* Button 2: View on GitHub */
        .btn-view-github {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 600;
          background: #ffffff;
          border: 1px solid #ffffff;
          color: #09090b;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
        }

        .light-mode .btn-view-github {
          background: #09090b;
          border-color: #09090b;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .btn-view-github:hover {
          background: var(--proj-accent, #38bdf8);
          border-color: var(--proj-accent, #38bdf8);
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--proj-glow, rgba(56, 189, 248, 0.45));
        }

        .light-mode .btn-view-github:hover {
          background: var(--proj-accent, #38bdf8);
          border-color: var(--proj-accent, #38bdf8);
          color: #ffffff;
        }

        /* ========================================================
           EXPANDABLE ACCORDION SECTION
        ======================================================== */
        .project-expanded-area {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px dashed rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .light-mode .project-expanded-area {
          border-top-color: rgba(0, 0, 0, 0.12);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .detail-card-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 18px 20px;
        }

        .light-mode .detail-card-box {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .detail-box-label {
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--proj-accent, #38bdf8);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .detail-box-content {
          font-size: 14px;
          line-height: 1.6;
          color: #d4d4d8;
          margin: 0;
        }

        .light-mode .detail-box-content {
          color: #3f3f46;
        }

        /* Actions list */
        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .action-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          line-height: 1.55;
          color: #d4d4d8;
        }

        .light-mode .action-item {
          color: #374151;
        }

        .action-check-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Deliverables tags */
        .deliverables-box {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 18px 20px;
        }

        .light-mode .deliverables-box {
          background: rgba(0, 0, 0, 0.025);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .deliverables-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .deliverable-chip {
          font-size: 13px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 10px;
          background: rgba(10, 10, 14, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #e4e4e7;
        }

        .light-mode .deliverable-chip {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.12);
          color: #111827;
        }

        /* ========================================================
           RESPONSIVE
        ======================================================== */
        @media (max-width: 960px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .project-card {
            padding: 28px 24px;
          }
        }

        @media (max-width: 580px) {
          .projects-section {
            padding: 70px 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .project-card {
            padding: 24px 18px;
          }

          .project-actions-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .btn-view-more,
          .btn-view-github {
            width: 100%;
          }
        }
      `}</style>

      <section id="projects" className="projects-section">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Hands-on Engineering</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtext">
            Production-grade cybersecurity architectures, SIEM detection
            pipelines, and PKI infrastructure engineered for resilience and
            threat mitigation.
          </p>
        </div>

        {/* 2-Column Responsive Grid Form */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => {
            const IconComponent = project.icon;
            const isCardExpanded = Boolean(expanded[idx]);

            return (
              <div
                key={project.id}
                className="project-card"
                style={{
                  "--proj-accent": project.accentColor,
                  "--proj-glow": project.accentGlow,
                }}
              >
                {/* Visual Highlights */}
                <div className="card-top-beam" />
                <div className="card-corner-glow" />

                {/* Top Meta & Icon */}
                <div className="project-header-top">
                  <div className="project-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <div className="project-meta-pills">
                    <span className="project-category-badge">
                      <Sparkles size={11} />
                      <span>{project.category}</span>
                    </span>
                    <span className="project-date-chip">
                      <Calendar size={12} />
                      <span>{project.date}</span>
                    </span>
                  </div>
                </div>

                {/* Project Title & Teaser */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-teaser">{project.teaser}</p>

                {/* Tech Stack Chips */}
                <div className="tech-stack-row">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="stack-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Quantitative Result Box */}
                <div className="result-preview-box">
                  <div className="result-preview-header">
                    <Sparkles size={13} />
                    <span>Key Outcome & Impact</span>
                  </div>
                  <p className="result-preview-text">{project.result}</p>
                </div>

                {/* Action Buttons Row: View More + View on GitHub */}
                <div className="project-actions-row">
                  {/* Button 1: View More / View Less */}
                  <button
                    type="button"
                    className={`btn-view-more ${isCardExpanded ? "active" : ""}`}
                    onClick={() => toggleExpand(idx)}
                    aria-expanded={isCardExpanded}
                  >
                    <span>{isCardExpanded ? "View Less" : "View More"}</span>
                    {isCardExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {/* Button 2: View on GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view-github"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Expandable Details Area (Shown when View More is clicked) */}
                {isCardExpanded && (
                  <div className="project-expanded-area">
                    {/* Challenge Box */}
                    <div className="detail-card-box">
                      <div className="detail-box-label">
                        <Layers size={13} />
                        <span>The Engineering Challenge</span>
                      </div>
                      <p className="detail-box-content">{project.challenge}</p>
                    </div>

                    {/* Key Engineering Actions */}
                    <div className="detail-card-box">
                      <div className="detail-box-label">
                        <CheckCircle2 size={13} />
                        <span>Key Engineering Actions</span>
                      </div>
                      <div className="actions-list">
                        {project.keyActions.map((action, aIdx) => (
                          <div key={aIdx} className="action-item">
                            <CheckCircle2
                              size={15}
                              className="action-check-icon"
                            />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Highlights */}
                    <div className="deliverables-box">
                      <div className="detail-box-label">
                        <ArrowUpRight size={13} />
                        <span>Portfolio Deliverables & Artifacts</span>
                      </div>
                      <div className="deliverables-flex">
                        {project.deliverables.map((item, dIdx) => (
                          <span key={dIdx} className="deliverable-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
