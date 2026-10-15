import React from "react";
import { Mail, Download, ShieldCheck, Heart } from "lucide-react";
import resumePdf from "../assets/heroimage/PariTenguriyaResume (2).pdf";

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

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          padding: 100px 24px 60px;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .contact-section {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .contact-card {
          background: linear-gradient(145deg, rgba(20, 20, 26, 0.8), rgba(10, 10, 14, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 32px;
          padding: 60px 32px;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }

        .light-mode .contact-card {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .contact-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 20px;
        }

        .light-mode .contact-tag {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.3);
          color: #047857;
        }

        .contact-title {
          font-size: 38px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .light-mode .contact-title {
          color: #111827;
        }

        .contact-desc {
          font-size: 16.5px;
          line-height: 1.65;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto 36px;
        }

        .light-mode .contact-desc {
          color: #4b5563;
        }

        .contact-btns {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .c-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .light-mode .c-btn {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.14);
          color: #1f2937;
        }

        .c-btn:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .light-mode .c-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.3);
          color: #000000;
        }

        .c-btn-primary {
          background: #ffffff;
          color: #09090b;
          font-weight: 600;
          border: none;
        }

        .light-mode .c-btn-primary {
          background: #09090b;
          color: #ffffff;
        }

        .c-btn-primary:hover {
          background: #e4e4e7;
          color: #000000;
        }

        .light-mode .c-btn-primary:hover {
          background: #18181b;
          color: #ffffff;
        }

        .footer-tagline {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #71717a;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .footer-tagline {
          color: #6b7280;
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 640px) {
          .contact-title {
            font-size: 28px;
          }
          .c-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <div className="contact-tag">
            <ShieldCheck size={14} />
            <span>Open for Opportunities</span>
          </div>

          <h2 className="contact-title">Let's Build More Secure Systems.</h2>

          <p className="contact-desc">
            Interested in SOC operations, Blue Teaming, network security, or
            cybersecurity engineering? I’m open to connecting with recruiters,
            security professionals, and teams working on real-world security
            challenges.
          </p>

          <div className="contact-btns">
            <a
              href="mailto:contact@cyberanalyst.sec"
              className="c-btn c-btn-primary"
            >
              <Mail size={16} />
              <span>Send Email</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/PariTenguriya"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={resumePdf}
              download="Pari_Tenguriya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="footer-tagline">
            Detect • Investigate • Defend • Secure
          </div>
        </div>
      </section>
    </>
  );
}
