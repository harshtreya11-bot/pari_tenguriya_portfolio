import React from 'react';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <>
      <style>{`
        .education-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .education-section {
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

        .edu-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
        }

        .edu-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 36px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .light-mode .edu-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .degree-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 8px;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #60a5fa;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .light-mode .degree-badge {
          background: rgba(37, 99, 235, 0.12);
          border-color: rgba(37, 99, 235, 0.25);
          color: #1d4ed8;
        }

        .edu-h3 {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .light-mode .edu-h3 {
          color: #111827;
        }

        .college-name {
          font-size: 16px;
          color: #a1a1aa;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .light-mode .college-name {
          color: #4b5563;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #d4d4d8;
        }

        .light-mode .meta-item {
          color: #1f2937;
        }

        .cgpa-pill {
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-weight: 600;
          font-size: 13.5px;
        }

        .light-mode .cgpa-pill {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.3);
          color: #047857;
        }

        .edu-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #a1a1aa;
        }

        .light-mode .edu-desc {
          color: #4b5563;
        }

        .journey-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .light-mode .journey-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .journey-h4 {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .light-mode .journey-h4 {
          color: #111827;
        }

        .journey-item {
          position: relative;
          padding-left: 20px;
          border-left: 2px solid rgba(255, 255, 255, 0.12);
        }

        .light-mode .journey-item {
          border-left-color: rgba(0, 0, 0, 0.12);
        }

        .journey-title {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .light-mode .journey-title {
          color: #111827;
        }

        .journey-meta {
          font-size: 13.5px;
          color: #a1a1aa;
          margin-top: 4px;
          display: flex;
          justify-content: space-between;
        }

        .light-mode .journey-meta {
          color: #4b5563;
        }

        .score-tag {
          color: #10b981;
          font-weight: 600;
        }

        .light-mode .score-tag {
          color: #047857;
        }

        @media (max-width: 900px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="education" className="education-section">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academics</span>
          </div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-grid">
          {/* Main Degree Card */}
          <div className="edu-card">
            <div className="degree-badge">
              <GraduationCap size={15} />
              <span>Bachelor of Technology</span>
            </div>

            <h3 className="edu-h3">B.Tech — Cyber Security</h3>
            <div className="college-name">
              <BookOpen size={15} />
              <span>Arya College of Engineering, Jaipur</span>
            </div>

            <div className="meta-row">
              <div className="meta-item">
                <Calendar size={15} />
                <span>2023 – 2027</span>
              </div>
              <div className="cgpa-pill">
                8.7 CGPA
              </div>
            </div>

            <p className="edu-desc">
              Specialized B.Tech program building a comprehensive foundation across network security, system administration, cryptography, security operations, and digital forensics.
            </p>
          </div>

          {/* Academic Journey Card */}
          <div className="journey-card">
            <h4 className="journey-h4">
              <Award size={18} />
              <span>Academic Journey</span>
            </h4>

            <div className="journey-item">
              <div className="journey-title">Senior Secondary (Class XII) — CBSE</div>
              <div className="journey-meta">
                <span>2022</span>
                <span className="score-tag">92%</span>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-title">Higher Secondary (Class X) — CBSE</div>
              <div className="journey-meta">
                <span>2020</span>
                <span className="score-tag">88.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
