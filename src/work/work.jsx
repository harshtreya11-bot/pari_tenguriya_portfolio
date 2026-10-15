import React from 'react';
import { Activity, ArrowRight, Shield, Terminal, Network, Lock, Cpu } from 'lucide-react';

export default function Work() {
  const workflows = [
    {
      title: 'SOC & Blue Team',
      icon: Shield,
      steps: ['Detect', 'Investigate', 'Correlate', 'Respond'],
      color: '#38bdf8'
    },
    {
      title: 'Threat Intelligence',
      icon: Terminal,
      steps: ['IOC', 'MISP', 'Enrichment', 'Detection'],
      color: '#818cf8'
    },
    {
      title: 'Network Security',
      icon: Network,
      steps: ['Traffic', 'Analysis', 'Segmentation', 'Defense'],
      color: '#10b981'
    },
    {
      title: 'Infrastructure Security',
      icon: Lock,
      steps: ['Identity', 'PKI', 'Certificates', 'Secure Communication'],
      color: '#f59e0b'
    },
    {
      title: 'Security Engineering',
      icon: Cpu,
      steps: ['Build', 'Simulate', 'Detect', 'Validate'],
      color: '#ec4899'
    }
  ];

  return (
    <>
      <style>{`
        .work-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .work-section {
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

        .work-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .work-card {
          background: rgba(18, 18, 22, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px 32px;
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .light-mode .work-card {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .work-card:hover {
          border-color: rgba(255, 255, 255, 0.22);
          transform: translateX(4px);
        }

        .work-h3 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 220px;
        }

        .light-mode .work-h3 {
          color: #111827;
        }

        .steps-flow {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .step-pill {
          font-size: 13.5px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e4e4e7;
        }

        .light-mode .step-pill {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #1f2937;
        }

        .arrow-icon {
          color: #71717a;
        }

        .light-mode .arrow-icon {
          color: #9ca3af;
        }

        @media (max-width: 800px) {
          .work-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section id="work" className="work-section">
        <div className="section-header">
          <div className="section-tag">
            <Activity size={14} />
            <span>Methodologies</span>
          </div>
          <h2 className="section-title">What I Work On</h2>
        </div>

        <div className="work-grid">
          {workflows.map((wf, idx) => {
            const IconComp = wf.icon;
            return (
              <div key={idx} className="work-card">
                <h3 className="work-h3">
                  <IconComp size={20} color={wf.color} />
                  <span>{wf.title}</span>
                </h3>

                <div className="steps-flow">
                  {wf.steps.map((st, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="step-pill">{st}</span>
                      {sIdx < wf.steps.length - 1 && (
                        <ArrowRight size={14} className="arrow-icon" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
