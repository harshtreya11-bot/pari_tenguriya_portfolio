import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Award, CheckCircle2, Calendar, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

import isc2Cert from '../assets/certificate/ICS2Certificate.jpeg';
import fortinetFCF from '../assets/certificate/FortinetfundamentalofCyberSecurity.jpeg';
import fortinetNSE1 from '../assets/certificate/Fortinet NSE 1 Certified in Cybersecurity_page-0001.jpg';
import fortinetNSE2 from '../assets/certificate/Fortinet NSE 2 Certified in Cybersecurity_page-0001.jpg';
import sophosCert from '../assets/certificate/Shoposfirewallengineer.jpeg';

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  const certs = [
    {
      title: 'ISC2 Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: 'October 2026',
      validUntil: 'September 2029',
      certNumber: '3545254',
      badgeColor: '#10b981',
      image: isc2Cert,
      desc: 'Foundational security principles, access controls, network security, risk identification, and incident management.',
      tags: ['Access Controls', 'Network Security', 'Risk Management', 'Incident Response']
    },
    {
      title: 'Fortinet Certified Fundamentals in Cybersecurity (FCF)',
      issuer: 'Fortinet',
      date: 'July 5, 2026',
      validUntil: 'July 5, 2028',
      certNumber: '9766379486PT',
      badgeColor: '#ef4444',
      image: fortinetFCF,
      desc: 'Fundamental cybersecurity concepts, threat landscape navigation, network defense, and Fortinet security fabric overview.',
      tags: ['Threat Landscape', 'Network Defense', 'Security Fabric']
    },
    {
      title: 'Fortinet NSE 1 Certified in Cybersecurity',
      issuer: 'Fortinet',
      date: 'July 5, 2026',
      validUntil: 'July 5, 2028',
      certNumber: '4977246694PT',
      badgeColor: '#0ea5e9',
      image: fortinetNSE1,
      desc: 'NSE Level 1 certification covering information security awareness, threat landscape, and security concepts.',
      tags: ['Security Awareness', 'Threat Landscape', 'NSE Level 1']
    },
    {
      title: 'Fortinet NSE 2 Certified in Cybersecurity',
      issuer: 'Fortinet',
      date: 'July 5, 2026',
      validUntil: 'July 5, 2028',
      certNumber: '5034126836PT',
      badgeColor: '#8b5cf6',
      image: fortinetNSE2,
      desc: 'NSE Level 2 certification covering Fortinet security solutions, firewall fundamentals, and enterprise security.',
      tags: ['Fortinet Solutions', 'Firewall', 'Enterprise Security', 'NSE Level 2']
    },
    {
      title: 'Sophos Firewall Engineer v22.0 — ET80',
      issuer: 'Sophos Academy',
      date: 'July 24, 2026',
      validUntil: '—',
      certNumber: '—',
      badgeColor: '#3b82f6',
      image: sophosCert,
      desc: 'Technical competency in configuring SFOS firewall policies, IPS, VPN routing, and perimeter network protection.',
      tags: ['Firewall Config', 'IPS', 'VPN Routing', 'Perimeter Defense']
    }
  ];

  const totalSlides = certs.length;

  const goToSlide = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  }, [totalSlides, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  }, [totalSlides, isAnimating]);

  useEffect(() => {
    if (isAutoPlaying && !modalOpen) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, modalOpen, nextSlide]);

  const openModal = (cert) => {
    setModalCert(cert);
    setModalOpen(true);
    setIsAutoPlaying(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCert(null);
    setIsAutoPlaying(true);
    document.body.style.overflow = '';
  };

  const handleKeyDown = useCallback((e) => {
    if (modalOpen && e.key === 'Escape') closeModal();
    if (!modalOpen) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    }
  }, [modalOpen, nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Get visible cards (current, prev, next for peek effect)
  const getVisibleIndices = () => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    const next = (currentSlide + 1) % totalSlides;
    return { prev, current: currentSlide, next };
  };

  const visible = getVisibleIndices();

  return (
    <>
      <style>{`
        .cert-section {
          padding: 100px 24px;
          max-width: 1300px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .light-mode .cert-section {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .cert-section-header {
          margin-bottom: 48px;
          text-align: center;
        }

        .cert-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 13px;
          font-weight: 500;
          color: #a1a1aa;
          margin-bottom: 14px;
        }

        .light-mode .cert-section-tag {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #4b5563;
        }

        .cert-section-title {
          font-size: 38px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .light-mode .cert-section-title {
          color: #09090b;
        }

        .cert-section-subtitle {
          font-size: 15px;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .light-mode .cert-section-subtitle {
          color: #4b5563;
        }

        /* ========== SLIDER CONTAINER ========== */
        .cert-slider-wrapper {
          position: relative;
          width: 100%;
          padding: 20px 0 40px;
        }

        .cert-slider-track {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 28px;
          perspective: 1200px;
          min-height: 420px;
          position: relative;
        }

        /* ========== CERTIFICATE CARD ========== */
        .cert-slide-card {
          flex: 0 0 680px;
          max-width: 680px;
          background: rgba(18, 18, 22, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) scale(1);
          opacity: 1;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .light-mode .cert-slide-card {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        .cert-slide-card.card-center {
          transform: translateX(-50%) scale(1);
          opacity: 1;
          z-index: 10;
        }

        .cert-slide-card.card-left {
          transform: translateX(calc(-50% - 600px)) scale(0.85);
          opacity: 0.4;
          z-index: 5;
          filter: blur(2px);
          pointer-events: none;
        }

        .cert-slide-card.card-right {
          transform: translateX(calc(-50% + 600px)) scale(0.85);
          opacity: 0.4;
          z-index: 5;
          filter: blur(2px);
          pointer-events: none;
        }

        .cert-slide-card.card-hidden {
          transform: translateX(-50%) scale(0.7);
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }

        .cert-slide-card:hover.card-center {
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7),
                      0 0 40px rgba(139, 92, 246, 0.08);
          transform: translateX(-50%) scale(1.02);
        }

        .light-mode .cert-slide-card:hover.card-center {
          border-color: rgba(0, 0, 0, 0.18);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.12);
        }

        /* ========== IMAGE AREA ========== */
        .cert-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }

        .light-mode .cert-image-container {
          background: rgba(245, 245, 245, 0.8);
        }

        .cert-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }

        .cert-slide-card:hover .cert-image-container img {
          transform: scale(1.05);
        }

        .cert-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(18, 18, 22, 0.95), transparent);
          pointer-events: none;
        }

        .light-mode .cert-image-overlay {
          background: linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent);
        }

        .cert-view-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateY(-6px);
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cert-slide-card:hover .cert-view-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .cert-issuer-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 5px 12px;
          border-radius: 9999px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ========== CARD CONTENT ========== */
        .cert-card-body {
          padding: 24px 28px 28px;
        }

        .cert-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .light-mode .cert-card-title {
          color: #111827;
        }

        .cert-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 13px;
          color: #a1a1aa;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .light-mode .cert-card-meta {
          color: #4b5563;
        }

        .cert-card-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .cert-card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #71717a;
          margin-bottom: 16px;
        }

        .light-mode .cert-card-desc {
          color: #6b7280;
        }

        .cert-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cert-card-tag {
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 11.5px;
          font-weight: 500;
          color: #a1a1aa;
          transition: all 0.2s ease;
        }

        .light-mode .cert-card-tag {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
          color: #4b5563;
        }

        .cert-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cert-verified-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #10b981;
          font-weight: 600;
        }

        .cert-click-hint {
          font-size: 12px;
          color: #52525b;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
        }

        .light-mode .cert-click-hint {
          color: #9ca3af;
        }

        .cert-slide-card:hover .cert-click-hint {
          opacity: 1;
          transform: translateX(0);
        }

        /* ========== CONTROLS ========== */
        .cert-slider-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 32px;
        }

        .cert-slider-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #e4e4e7;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
        }

        .light-mode .cert-slider-btn {
          border-color: rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.05);
          color: #374151;
        }

        .cert-slider-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
          color: #ffffff;
        }

        .light-mode .cert-slider-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.2);
          color: #111827;
        }

        .cert-slider-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cert-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0;
        }

        .light-mode .cert-dot {
          background: rgba(0, 0, 0, 0.12);
        }

        .cert-dot.active-dot {
          width: 32px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          box-shadow: 0 0 14px rgba(139, 92, 246, 0.4);
        }

        .cert-dot:hover:not(.active-dot) {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.2);
        }

        .cert-counter {
          font-size: 13px;
          font-weight: 600;
          color: #71717a;
          font-variant-numeric: tabular-nums;
        }

        .light-mode .cert-counter {
          color: #6b7280;
        }

        .cert-counter span {
          color: #ffffff;
        }

        .light-mode .cert-counter span {
          color: #111827;
        }

        /* ========== MODAL ========== */
        .cert-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          animation: certModalFadeIn 0.3s ease forwards;
        }

        @keyframes certModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-modal-content {
          position: relative;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(18, 18, 22, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          animation: certModalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .light-mode .cert-modal-content {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(0, 0, 0, 0.1);
        }

        @keyframes certModalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .cert-modal-img-wrapper {
          width: 100%;
          max-height: 70vh;
          overflow: auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: #000;
        }

        .light-mode .cert-modal-img-wrapper {
          background: #f5f5f5;
        }

        .cert-modal-img-wrapper img {
          width: 100%;
          height: auto;
          display: block;
        }

        .cert-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.25s ease;
        }

        .cert-modal-close:hover {
          background: rgba(239, 68, 68, 0.8);
          border-color: rgba(239, 68, 68, 0.5);
          transform: scale(1.1) rotate(90deg);
        }

        .cert-modal-info {
          padding: 24px 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .cert-modal-info {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .cert-modal-info h3 {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .light-mode .cert-modal-info h3 {
          color: #111827;
        }

        .cert-modal-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 14px;
          color: #a1a1aa;
        }

        .light-mode .cert-modal-meta {
          color: #4b5563;
        }

        .cert-modal-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cert-modal-meta-label {
          color: #71717a;
          font-weight: 500;
        }

        .light-mode .cert-modal-meta-label {
          color: #6b7280;
        }

        .cert-modal-meta-value {
          color: #e4e4e7;
          font-weight: 600;
        }

        .light-mode .cert-modal-meta-value {
          color: #111827;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 900px) {
          .cert-slide-card {
            flex: 0 0 calc(100vw - 60px);
            max-width: calc(100vw - 60px);
          }

          .cert-slide-card.card-left {
            transform: translateX(calc(-50% - 320px)) scale(0.85);
          }

          .cert-slide-card.card-right {
            transform: translateX(calc(-50% + 320px)) scale(0.85);
          }

          .cert-section-title {
            font-size: 28px;
          }

          .cert-image-container {
            height: 180px;
          }

          .cert-card-body {
            padding: 20px 22px 24px;
          }

          .cert-card-title {
            font-size: 17px;
          }

          .cert-modal-content {
            max-width: 95vw;
          }
        }

        @media (max-width: 500px) {
          .cert-section {
            padding: 72px 16px;
          }

          .cert-slide-card {
            flex: 0 0 calc(100vw - 40px);
            max-width: calc(100vw - 40px);
          }

          .cert-slide-card.card-left,
          .cert-slide-card.card-right {
            opacity: 0;
          }

          .cert-slider-track {
            min-height: 380px;
          }

          .cert-image-container {
            height: 160px;
          }
        }
      `}</style>

      <section id="certifications" className="cert-section">
        <div className="cert-section-header">
          <div className="cert-section-tag">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="cert-section-title">Certifications</h2>
          <p className="cert-section-subtitle">
            Earned industry-recognized certifications validating technical security proficiency across multiple domains.
          </p>
        </div>

        {/* ===== SLIDER ===== */}
        <div
          className="cert-slider-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="cert-slider-track" ref={trackRef}>
            {certs.map((cert, idx) => {
              let posClass = 'card-hidden';
              if (idx === visible.current) posClass = 'card-center';
              else if (idx === visible.prev) posClass = 'card-left';
              else if (idx === visible.next) posClass = 'card-right';

              return (
                <div
                  key={idx}
                  className={`cert-slide-card ${posClass}`}
                  onClick={() => posClass === 'card-center' && openModal(cert)}
                  role="button"
                  tabIndex={posClass === 'card-center' ? 0 : -1}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <div className="cert-image-container">
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                    <div className="cert-image-overlay" />
                    <div className="cert-view-badge">
                      <ExternalLink size={11} />
                      View Certificate
                    </div>
                    <div
                      className="cert-issuer-badge"
                      style={{ background: `${cert.badgeColor}cc` }}
                    >
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="cert-card-body">
                    <h3 className="cert-card-title">{cert.title}</h3>

                    <div className="cert-card-meta">
                      <div className="cert-card-meta-item">
                        <Calendar size={13} />
                        <span>{cert.date}</span>
                      </div>
                      {cert.certNumber !== '—' && (
                        <div className="cert-card-meta-item">
                          <span style={{ color: '#71717a' }}>ID:</span>
                          <span style={{ fontFamily: 'monospace', fontSize: '12px' }}>{cert.certNumber}</span>
                        </div>
                      )}
                    </div>

                    <p className="cert-card-desc">{cert.desc}</p>

                    <div className="cert-card-tags">
                      {cert.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="cert-card-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="cert-card-footer">
                      <div className="cert-verified-tag">
                        <CheckCircle2 size={16} />
                        <span>Earned & Verified</span>
                      </div>
                      <div className="cert-click-hint">
                        Click to view full certificate →
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== CONTROLS ===== */}
          <div className="cert-slider-controls">
            <button className="cert-slider-btn" onClick={prevSlide} aria-label="Previous certificate">
              <ChevronLeft size={20} />
            </button>

            <div className="cert-slider-dots">
              {certs.map((_, idx) => (
                <button
                  key={idx}
                  className={`cert-dot ${idx === currentSlide ? 'active-dot' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to certificate ${idx + 1}`}
                />
              ))}
            </div>

            <div className="cert-counter">
              <span>{String(currentSlide + 1).padStart(2, '0')}</span>
              {' / '}
              {String(totalSlides).padStart(2, '0')}
            </div>

            <button className="cert-slider-btn" onClick={nextSlide} aria-label="Next certificate">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {modalOpen && modalCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="cert-modal-img-wrapper">
              <img src={modalCert.image} alt={modalCert.title} />
            </div>
            <div className="cert-modal-info">
              <h3>{modalCert.title}</h3>
              <div className="cert-modal-meta">
                <div className="cert-modal-meta-item">
                  <span className="cert-modal-meta-label">Issuer:</span>
                  <span className="cert-modal-meta-value">{modalCert.issuer}</span>
                </div>
                <div className="cert-modal-meta-item">
                  <span className="cert-modal-meta-label">Achieved:</span>
                  <span className="cert-modal-meta-value">{modalCert.date}</span>
                </div>
                <div className="cert-modal-meta-item">
                  <span className="cert-modal-meta-label">Valid Until:</span>
                  <span className="cert-modal-meta-value">{modalCert.validUntil}</span>
                </div>
                {modalCert.certNumber !== '—' && (
                  <div className="cert-modal-meta-item">
                    <span className="cert-modal-meta-label">Cert #:</span>
                    <span className="cert-modal-meta-value" style={{ fontFamily: 'monospace' }}>
                      {modalCert.certNumber}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
