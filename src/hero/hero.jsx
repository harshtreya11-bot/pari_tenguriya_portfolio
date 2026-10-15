import React from "react";
import heroAvatar from "../assets/heroimage/pari_home.jpeg";
import resumePdf from "../assets/heroimage/PariTenguriyaResume (2).pdf";
import LetterGlitch from "../components/LetterGlitch";
import {
  ArrowRight,
  Terminal,
  Download,
  ShieldCheck,
  Activity,
  Code2,
} from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const techTags = [
    "Wazuh",
    "MISP",
    "MITRE ATT&CK",
    "Cisco Networking",
    "PKI",
    "SIEM Workflows",
    "Security Automation",
  ];

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 110px 24px 70px;
          background: #060608;
          color: #ffffff;
          overflow: hidden;
        }

        .hero-glitch-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.55;
          pointer-events: none;
        }

        .light-mode .hero-glitch-bg {
          opacity: 0.08;
        }

        .hero-bg-sheen {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 90% 55% at 50% -10%, rgba(255, 255, 255, 0.22) 0%, rgba(180, 180, 200, 0.06) 45%, transparent 80%),
            radial-gradient(ellipse 60% 40% at 85% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 15% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-bg-sheen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(125deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.03) 30%, 
            rgba(255, 255, 255, 0.08) 50%, 
            rgba(255, 255, 255, 0.03) 70%, 
            transparent 100%);
          background-size: 200% 200%;
          animation: silkSheen 12s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes silkSheen {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .light-mode .hero-section {
          background: #f4f4f6;
          color: #09090b;
        }

        .light-mode .hero-bg-sheen {
          background: 
            radial-gradient(ellipse 90% 55% at 50% -10%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.02) 45%, transparent 80%),
            radial-gradient(ellipse 60% 40% at 85% 40%, rgba(0, 0, 0, 0.04) 0%, transparent 60%);
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: flex-start;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          padding: 36px 40px;
          border-radius: 24px;
          background: rgba(6, 6, 8, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
        }

        .light-mode .hero-content {
          background: rgba(244, 244, 246, 0.75);
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          font-size: 14px;
          font-weight: 500;
          color: #e4e4e7;
          margin-bottom: 22px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .light-mode .hero-badge {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.1);
          color: #27272a;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .hero-title {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 22px 0;
          background: linear-gradient(160deg, #ffffff 0%, #f0f0f4 50%, #d4d4d8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          filter: drop-shadow(0 0 18px rgba(255,255,255,0.18));
        }

        .light-mode .hero-title {
          background: linear-gradient(160deg, #09090b 0%, #18181b 60%, #3f3f46 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          filter: drop-shadow(0 0 8px rgba(0,0,0,0.12));
        }

        .hero-summary {
          font-size: 16px;
          line-height: 1.65;
          color: #d4d4d8;
          margin: 0 0 26px 0;
          max-width: 620px;
        }

        .light-mode .hero-summary {
          color: #27272a;
        }

        .tech-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .tech-tag-pill {
          font-size: 12.5px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d4d4d8;
          transition: all 0.2s ease;
        }

        .tech-tag-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .light-mode .tech-tag-pill {
          background: rgba(0, 0, 0, 0.06);
          border-color: rgba(0, 0, 0, 0.12);
          color: #1f2937;
        }

        .light-mode .tech-tag-pill:hover {
          background: rgba(0, 0, 0, 0.12);
          border-color: rgba(0, 0, 0, 0.25);
          color: #000000;
        }

        .cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 9999px;
          background: #ffffff;
          color: #09090b;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
        }

        .btn-primary:hover {
          background: #f4f4f5;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.25);
        }

        .btn-primary .btn-icon {
          transition: transform 0.25s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }

        .light-mode .btn-primary {
          background: #09090b;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .light-mode .btn-primary:hover {
          background: #18181b;
          color: #ffffff;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #f4f4f5;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
        }

        .light-mode .btn-secondary {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.14);
          color: #1f2937;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.28);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .light-mode .btn-secondary:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.3);
          color: #000000;
        }

        .hero-visual-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
        }

        .hero-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(18, 18, 22, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.85);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-card:hover {
          transform: translateY(-6px) scale(1.01);
        }

        .light-mode .hero-card {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .hero-avatar-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          display: block;
        }

        /* Top-Right positioning for SOC Telemetry Active badge prevents ANY overlap with left hero-badge */
        .card-floating-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 9999px;
          background: rgba(10, 10, 14, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 12.5px;
          font-weight: 500;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .light-mode .card-floating-badge {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.12);
          color: #111827;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-corner-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(10, 10, 14, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e4e4e7;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .light-mode .card-corner-badge {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.12);
          color: #111827;
        }

        .card-floating-bar {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(10, 10, 14, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 11.5px;
          font-weight: 500;
          color: #a1a1aa;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .light-mode .card-floating-bar {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(0, 0, 0, 0.12);
          color: #374151;
        }

        @media (max-width: 1080px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-visual-wrapper {
            justify-content: center;
          }
          .hero-title {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="hero-section" id="home">
        <div className="hero-glitch-bg">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            backgroundColor="transparent"
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          />
        </div>
        <div className="hero-bg-sheen" />
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot" />
              <span>SOC & Blue Team Analyst</span>
            </div>

            <h1 className="hero-title">
              Cybersecurity Analyst | SOC & Network Security | Threat Detection
              & Response
            </h1>

            <p className="hero-summary">
              I build and secure infrastructure with a focus on security
              monitoring, threat detection, network defense, and incident
              investigation. Hands-on with Wazuh, MISP, MITRE ATT&CK, Cisco
              networking, PKI, SIEM workflows, and security automation to turn
              security telemetry into actionable insights.
            </p>

            <div className="tech-tags-grid">
              {techTags.map((tag, idx) => (
                <span key={idx} className="tech-tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="cta-group">
              <a href="#projects" className="btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={16} className="btn-icon" />
              </a>

              <a href="#security-lab" className="btn-secondary">
                <Terminal size={16} />
                <span>Explore My Security Lab</span>
              </a>

              <a
                href="https://github.com/PariTenguriya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} />
                <span>View GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pari-tenguriya/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={resumePdf}
                download="Pari_Tenguriya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-card">
              <div className="card-floating-badge">
                <ShieldCheck size={14} color="#10b981" />
                <span>SOC Telemetry Active</span>
              </div>

              <img
                src={heroAvatar}
                alt="Cybersecurity Analyst Avatar"
                className="hero-avatar-img"
              />

              <div className="card-floating-bar">
                <Activity size={13} color="#a1a1aa" />
                <span>Zero Trust • MITRE ATT&CK</span>
              </div>

              <div className="card-corner-badge" title="Security Operations">
                <Code2 size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
