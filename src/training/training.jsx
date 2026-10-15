import React from 'react';
import { BookOpenCheck, Server, Network, ShieldCheck, Clock } from 'lucide-react';

export default function Training() {
  const trainingItems = [
    {
      title: 'Windows Server Administration',
      curriculum: 'MCSE Curriculum',
      period: '2023–2024',
      status: 'Completed',
      icon: Server,
      desc: 'Hands-on exposure to Windows Server administration, Active Directory infrastructure and enterprise networking services.'
    },
    {
      title: 'Cisco Networking',
      curriculum: 'CCNA Training',
      period: '2024–2025',
      status: 'Completed',
      icon: Network,
      desc: 'Practical networking foundation covering routing, switching, VLANs, network protocols and infrastructure configuration.'
    },
    {
      title: 'Advanced Cisco Networking',
      curriculum: 'CCNP Training',
      period: '2026',
      status: 'In Progress',
      icon: ShieldCheck,
      desc: 'Currently developing advanced networking, enterprise routing architectures, and infrastructure troubleshooting capabilities.'
    }
  ];

  return (
    <>
      <style>{`
        .training-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .training-section {
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
          margin: 0 0 10px 0;
        }

        .light-mode .section-title {
          color: #09090b;
        }

        .section-subtitle {
          font-size: 15px;
          color: #a1a1aa;
        }

        .light-mode .section-subtitle {
          color: #4b5563;
        }

        .training-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 32px;
        }

        .training-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .light-mode .training-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .training-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .light-mode .icon-box {
          background: rgba(0, 0, 0, 0.06);
          color: #111827;
        }

        .status-badge {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .status-badge.completed {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .light-mode .status-badge.completed {
          color: #047857;
        }

        .status-badge.progress {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
        }

        .light-mode .status-badge.progress {
          color: #b45309;
        }

        .training-h3 {
          font-size: 19px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 6px 0;
        }

        .light-mode .training-h3 {
          color: #111827;
        }

        .training-meta {
          font-size: 13.5px;
          font-weight: 500;
          color: #818cf8;
          margin-bottom: 14px;
        }

        .light-mode .training-meta {
          color: #4f46e5;
        }

        .training-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #a1a1aa;
        }

        .light-mode .training-desc {
          color: #4b5563;
        }

        @media (max-width: 960px) {
          .training-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="training" className="training-section">
        <div className="section-header">
          <div className="section-tag">
            <BookOpenCheck size={14} />
            <span>Structured Learning</span>
          </div>
          <h2 className="section-title">Professional Training</h2>
          <p className="section-subtitle">Comprehensive hands-on training tracks in networking and enterprise systems administration.</p>
        </div>

        <div className="training-grid">
          {trainingItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="training-card">
                <div className="card-top">
                  <div className="icon-box">
                    <IconComp size={20} />
                  </div>
                  <span className={`status-badge ${item.status === 'Completed' ? 'completed' : 'progress'}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="training-h3">{item.title}</h3>
                <div className="training-meta">{item.curriculum} • {item.period}</div>
                <p className="training-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
