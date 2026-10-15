import React from 'react';
import { Trophy, Medal, Users, Sparkles } from 'lucide-react';

export default function Achievements() {
  return (
    <>
      <style>{`
        .achievements-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .achievements-section {
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

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .achieve-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .light-mode .achieve-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .achieve-card:hover {
          border-color: rgba(255, 255, 255, 0.22);
          transform: translateY(-4px);
        }

        .achieve-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .achieve-h3 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .light-mode .achieve-h3 {
          color: #111827;
        }

        .achieve-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #a1a1aa;
        }

        .light-mode .achieve-desc {
          color: #4b5563;
        }

        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="achievements" className="achievements-section">
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="section-title">Achievements & Extracurriculars</h2>
        </div>

        <div className="achievements-grid">
          <div className="achieve-card">
            <div className="achieve-icon-box">🏆</div>
            <div>
              <h3 className="achieve-h3">Hackathon — Team Lead</h3>
              <p className="achieve-desc">
                Led a multidisciplinary team developing “Sun Solution – Integrated Dashboard”, focused on improving data monitoring and operational management efficiency under competitive deadline pressure.
              </p>
            </div>
          </div>

          <div className="achieve-card">
            <div className="achieve-icon-box">🥇</div>
            <div>
              <h3 className="achieve-h3">Hack-O-Shop 2.0 — Winner</h3>
              <p className="achieve-desc">
                Winner of the Hack-O-Shop 2.0 Ethical Hacking Workshop & Competition, organized by the IEEE Student Branch, VGU. Demonstrated superior practical exploits and defense strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
