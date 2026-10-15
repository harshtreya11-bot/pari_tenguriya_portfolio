import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Experience() {
  const actions = [
    'Configured SFOS firewall policies and security rules.',
    'Worked with enterprise-oriented firewall configuration and network-security controls.',
    'Developed practical exposure to perimeter security concepts.',
    'Cleared ET80: Sophos Firewall Engineer v22.0 certification during the training period.'
  ];

  return (
    <>
      <style>{`
        .experience-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .experience-section {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .section-header {
          margin-bottom: 40px;
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
          font-size: 34px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }

        .light-mode .section-title {
          color: #09090b;
        }

        .exp-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 40px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .light-mode .exp-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .exp-header {
          border-bottom-color: rgba(0, 0, 0, 0.08);
        }

        .exp-role {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .light-mode .exp-role {
          color: #111827;
        }

        .company-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #a1a1aa;
        }

        .light-mode .company-row {
          color: #4b5563;
        }

        .duration-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 13.5px;
          font-weight: 500;
          color: #e4e4e7;
        }

        .light-mode .duration-pill {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #1f2937;
        }

        .star-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 28px;
        }

        .star-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px;
        }

        .light-mode .star-box {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .star-label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #818cf8;
          margin-bottom: 8px;
        }

        .light-mode .star-label {
          color: #4f46e5;
        }

        .star-content {
          font-size: 14.5px;
          line-height: 1.6;
          color: #d4d4d8;
        }

        .light-mode .star-content {
          color: #3f3f46;
        }

        .action-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #10b981;
          margin-bottom: 12px;
        }

        .light-mode .action-title {
          color: #059669;
        }

        .action-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .action-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: #a1a1aa;
          line-height: 1.5;
        }

        .light-mode .action-item {
          color: #4b5563;
        }

        .action-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .light-mode .action-icon {
          color: #059669;
        }

        .result-box {
          margin-top: 28px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .light-mode .result-box {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .result-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #10b981;
          margin-bottom: 6px;
        }

        .light-mode .result-title {
          color: #047857;
        }

        .result-text {
          font-size: 14.5px;
          color: #ffffff;
          line-height: 1.6;
          font-weight: 500;
        }

        .light-mode .result-text {
          color: #065f46;
        }

        @media (max-width: 768px) {
          .star-grid {
            grid-template-columns: 1fr;
          }
          .exp-card {
            padding: 24px;
          }
        }
      `}</style>

      <section id="experience" className="experience-section">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Industry Exposure</span>
          </div>
          <h2 className="section-title">Internship Experience</h2>
        </div>

        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-role">Sophos Firewall Configuration & Network Security</h3>
              <div className="company-row">
                <Building2 size={16} />
                <span>Rise Tech Software Pvt. Ltd., Jaipur</span>
              </div>
            </div>

            <div className="duration-pill">
              <Calendar size={14} />
              <span>Jun–Jul 2026 • 45 Days</span>
            </div>
          </div>

          <div className="star-grid">
            <div className="star-box">
              <div className="star-label">Situation</div>
              <div className="star-content">
                Enterprise environments require controlled network access, traffic inspection and perimeter security against unauthorized activity.
              </div>
            </div>

            <div className="star-box">
              <div className="star-label">Task</div>
              <div className="star-content">
                Gain practical exposure to firewall administration, security policy creation, and enterprise network-security controls.
              </div>
            </div>
          </div>

          <div className="action-title">Key Actions & Milestones</div>
          <div className="action-list">
            {actions.map((act, idx) => (
              <div key={idx} className="action-item">
                <CheckCircle2 size={16} className="action-icon" />
                <span>{act}</span>
              </div>
            ))}
          </div>

          <div className="result-box">
            <div className="result-title">Result & Impact</div>
            <div className="result-text">
              Built practical firewall administration experience and demonstrated industry competency through earning the Sophos Firewall Engineer v22.0 certification.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
