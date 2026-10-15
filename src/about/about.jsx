import React from "react";
import { User, Shield, Cpu, CheckCircle2, Terminal } from "lucide-react";

export default function About() {
  const tools = [
    { label: "Wazuh", color: "#38bdf8" },
    { label: "MISP", color: "#a78bfa" },
    { label: "Sysmon", color: "#34d399" },
    { label: "Wireshark", color: "#60a5fa" },
    { label: "Nmap", color: "#f472b6" },
    { label: "Burp Suite", color: "#fb923c" },
    { label: "Cisco Networking", color: "#facc15" },
    { label: "Sophos Firewall", color: "#4ade80" },
    { label: "AD DS", color: "#c084fc" },
    { label: "AD CS", color: "#38bdf8" },
    { label: "Windows Server", color: "#94a3b8" },
    { label: "Python", color: "#fbbf24" },
    { label: "REST APIs", color: "#2dd4bf" },
  ];

  const highlights = [
    {
      icon: <Shield size={20} />,
      color: "#38bdf8",
      borderColor: "rgba(56,189,248,0.35)",
      bgColor: "rgba(56,189,248,0.12)",
      glowColor: "rgba(56,189,248,0.18)",
      title: "Blue Teaming & SOC Focus",
      desc: "Hands-on telemetry correlation, detection engineering, and incident containment.",
    },
    {
      icon: <Cpu size={20} />,
      color: "#fb923c",
      borderColor: "rgba(251,146,60,0.35)",
      bgColor: "rgba(251,146,60,0.12)",
      glowColor: "rgba(251,146,60,0.18)",
      title: "Practical Lab Driven",
      desc: "Building and testing enterprise PKI, SIEM automation pipelines, and active malware sandboxes.",
    },
    {
      icon: <CheckCircle2 size={20} />,
      color: "#34d399",
      borderColor: "rgba(52,211,153,0.35)",
      bgColor: "rgba(52,211,153,0.12)",
      glowColor: "rgba(52,211,153,0.18)",
      title: "MITRE ATT&CK Mapping",
      desc: "Correlating real-time security events to standard adversary techniques and kill-chain stages.",
    },
  ];

  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .light-mode .about-section {
          border-top-color: rgba(0, 0, 0, 0.07);
        }

        /* ── Section header ── */
        .about-section-header {
          margin-bottom: 40px;
        }

        .about-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          font-size: 13px;
          font-weight: 500;
          color: #a1a1aa;
          margin-bottom: 14px;
        }

        .light-mode .about-tag {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #52525b;
        }

        .about-section-title {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
        }

        .light-mode .about-section-title {
          color: #09090b;
        }

        /* ── Two-column grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 28px;
          align-items: stretch;
        }

        /* ── Left bio card ── */
        .about-bio-card {
          background: rgba(14, 14, 20, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;
          padding: 36px 38px;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .light-mode .about-bio-card {
          background: rgba(255, 255, 255, 0.88);
          border-color: rgba(0, 0, 0, 0.09);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        .about-bio-text {
          font-size: 15.5px;
          line-height: 1.8;
          color: #c4c4cc;
          margin-bottom: 30px;
        }

        .light-mode .about-bio-text {
          color: #374151;
        }

        .about-bio-text .kw-blue   { color: #38bdf8; font-weight: 500; }
        .about-bio-text .kw-purple { color: #c084fc; font-weight: 500; }
        .about-bio-text .kw-orange { color: #fb923c; font-weight: 500; }
        .about-bio-text .kw-green  { color: #34d399; font-weight: 500; }

        /* ── Tools header ── */
        .tools-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 16px;
          letter-spacing: 0.01em;
        }

        .light-mode .tools-heading {
          color: #111827;
        }

        .tools-heading .terminal-icon {
          color: #38bdf8;
        }

        .tools-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tool-chip {
          font-size: 12.5px;
          font-weight: 500;
          padding: 5px 13px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid;
          cursor: default;
          transition: all 0.22s ease;
          letter-spacing: 0.01em;
        }

        .tool-chip:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.09);
        }

        .light-mode .tool-chip {
          background: rgba(0, 0, 0, 0.04);
        }

        .light-mode .tool-chip:hover {
          background: rgba(0, 0, 0, 0.08);
        }

        /* ── Right highlights card ── */
        .about-highlights-card {
          background: rgba(12, 14, 20, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          padding: 30px 28px;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .light-mode .about-highlights-card {
          background: rgba(255, 255, 255, 0.88);
          border-color: rgba(0, 0, 0, 0.09);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        /* ── Individual highlight item ── */
        .hl-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 14px;
          border: 1px solid;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        .hl-item:hover {
          transform: translateX(4px);
        }

        .hl-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
        }

        .hl-title {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .hl-desc {
          display: none;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-section-title {
            font-size: 28px;
          }
        }

        @media (max-width: 560px) {
          .about-bio-card {
            padding: 24px 22px;
          }
          .about-highlights-card {
            padding: 22px 18px;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        {/* Header */}
        <div className="about-section-header">
          <div className="about-tag">
            <User size={13} />
            <span>Profile</span>
          </div>
          <h2 className="about-section-title">About Me</h2>
        </div>

        {/* Grid */}
        <div className="about-grid">
          {/* ── Left: Bio + Tools ── */}
          <div className="about-bio-card">
            <p className="about-bio-text">
              I'm a Cybersecurity student specializing in Cyber Security with a
              strong focus on <span className="kw-blue">SOC operations</span>,{" "}
              <span className="kw-purple">Blue Teaming</span>, network security,
              and <span className="kw-orange">threat detection</span>. I prefer
              learning by building &amp; breaking things in controlled
              environments— deploying security infrastructure, simulating
              attacks, analyzing endpoint telemetry, mapping activity to{" "}
              <span className="kw-green">MITRE ATT&amp;CK</span>, and
              integrating threat intelligence into detection workflows.
            </p>

            <div className="tools-heading">
              <Terminal size={15} className="terminal-icon" />
              <span>&gt;_ Technical Exposure &amp; Tools</span>
            </div>

            <div className="tools-flex">
              {tools.map((t, idx) => (
                <span
                  key={idx}
                  className="tool-chip"
                  style={{
                    borderColor: `${t.color}55`,
                    color: t.color,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Highlight items ── */}
          <div className="about-highlights-card">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="hl-item"
                style={{
                  borderColor: h.borderColor,
                  background: `linear-gradient(135deg, ${h.bgColor} 0%, rgba(255,255,255,0.02) 100%)`,
                  boxShadow: `0 4px 20px ${h.glowColor}`,
                }}
              >
                <div
                  className="hl-icon-wrap"
                  style={{
                    background: h.bgColor,
                    borderColor: h.borderColor,
                    color: h.color,
                  }}
                >
                  {h.icon}
                </div>
                <p className="hl-title" style={{ color: h.color }}>
                  {h.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
