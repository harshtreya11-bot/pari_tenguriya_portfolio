import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Cpu,
  Shield,
  Globe,
  Lock,
  Flame,
  Search,
  Server,
  Code,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  LayoutGrid,
  Sliders
} from 'lucide-react';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);

  const skillCategories = [
    {
      id: 'secops',
      title: 'Security Operations & Threat Intelligence',
      shortTitle: 'SecOps & Threat Intel',
      badge: 'Tier-1 SOC / Intel',
      icon: Shield,
      emoji: '🛡️',
      accent: '#10b981',
      accentGlow: 'rgba(16, 185, 129, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(18, 22, 20, 0.85) 60%)',
      desc: 'Incident response, active Wazuh SIEM telemetry triage, MITRE ATT&CK adversary behavior mapping, and Sigma detection engineering.',
      skills: [
        'Wazuh SIEM',
        'MISP',
        'MITRE ATT&CK',
        'Sigma Detection Rules',
        'Log Analysis',
        'IOC Analysis',
        'Incident Response Lifecycle',
        'Cyber Kill Chain',
        'Threat Detection',
        'Security Monitoring'
      ]
    },
    {
      id: 'network',
      title: 'Network & Infrastructure Security',
      shortTitle: 'Network Security',
      badge: 'Enterprise Routing & Defense',
      icon: Globe,
      emoji: '🌐',
      accent: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.14) 0%, rgba(18, 22, 24, 0.85) 60%)',
      desc: 'Hardened network architecture, Layer-2/3 perimeter controls, Active Directory services, VLAN segmentation, and encrypted tunneling.',
      skills: [
        'Cisco Networking',
        'VLAN',
        'STP',
        'Layer-2 Security',
        'Routing Protocols',
        'AD DS',
        'DNS',
        'RRAS',
        'IIS',
        'VPN',
        'iptables',
        'Network Security'
      ]
    },
    {
      id: 'identity',
      title: 'Identity & PKI',
      shortTitle: 'Identity & PKI',
      badge: 'Public Key Infrastructure',
      icon: Lock,
      emoji: '🔐',
      accent: '#a855f7',
      accentGlow: 'rgba(168, 85, 247, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.14) 0%, rgba(22, 18, 26, 0.85) 60%)',
      desc: 'Enterprise trust establishment, Certificate Authority deployment, cryptographic lifecycle governance, X.509 issuance, and CRL distribution.',
      skills: [
        'Active Directory Certificate Services',
        'Certificate Authority',
        'X.509',
        'SSL/TLS',
        'CRL',
        'Certificate Lifecycle Management',
        'Group Policy'
      ]
    },
    {
      id: 'perimeter',
      title: 'Perimeter Security',
      shortTitle: 'Perimeter Defense',
      badge: 'Firewall & Next-Gen Edge',
      icon: Flame,
      emoji: '🔥',
      accent: '#f97316',
      accentGlow: 'rgba(249, 115, 22, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.14) 0%, rgba(26, 20, 18, 0.85) 60%)',
      desc: 'Next-Gen firewall engineering, deep packet inspection, intrusion detection/prevention policies, and strict zero-trust zone segmentation.',
      skills: [
        'Sophos Firewall / SFOS',
        'Firewall Rules',
        'IPS/IDS',
        'VPN',
        'Network Segmentation'
      ]
    },
    {
      id: 'testing',
      title: 'Security Testing & Analysis',
      shortTitle: 'Offensive & VAPT',
      badge: 'Vulnerability Assessment',
      icon: Search,
      emoji: '🔎',
      accent: '#ef4444',
      accentGlow: 'rgba(239, 68, 68, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.14) 0%, rgba(26, 18, 18, 0.85) 60%)',
      desc: 'Proactive vulnerability identification, offensive simulation, network packet decoding with Wireshark, reconnaissance, and ARP poison detection.',
      skills: [
        'Wireshark',
        'Nmap',
        'Burp Suite',
        'Nikto',
        'Bettercap',
        'Hydra',
        'Nessus',
        'Kali Linux',
        'VAPT',
        'Reconnaissance',
        'MITM',
        'ARP Poisoning'
      ]
    },
    {
      id: 'platforms',
      title: 'Platforms & Infrastructure',
      shortTitle: 'Platforms & Systems',
      badge: 'Virtualization & Cloud',
      icon: Server,
      emoji: '💻',
      accent: '#3b82f6',
      accentGlow: 'rgba(59, 130, 246, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.14) 0%, rgba(18, 20, 26, 0.85) 60%)',
      desc: 'Production server operations across Linux & Windows environments, hypervisor configurations, and virtual network topology simulation.',
      skills: [
        'Windows Server',
        'Ubuntu Server',
        'Kali Linux',
        'VMware Workstation',
        'AWS',
        'Cisco Packet Tracer',
        'GNS3'
      ]
    },
    {
      id: 'scripting',
      title: 'Scripting & Integration',
      shortTitle: 'DevSec Automation',
      badge: 'Python & API Pipelines',
      icon: Code,
      emoji: '🐍',
      accent: '#eab308',
      accentGlow: 'rgba(234, 179, 8, 0.22)',
      bgGradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.14) 0%, rgba(26, 24, 18, 0.85) 60%)',
      desc: 'Automated threat response scripting, custom REST API connectors linking Wazuh SIEM to MISP TIP, and security workflow orchestration.',
      skills: [
        'Python',
        'REST APIs',
        'Wazuh–MISP Integration',
        'SIEM Threat-Intel Automation'
      ]
    }
  ];

  const total = skillCategories.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-play timer effect
  useEffect(() => {
    if (isAutoPlaying && !isHovered && viewMode === 'slider') {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, viewMode, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const activeCategory = skillCategories[currentIndex];

  return (
    <>
      <style>{`
        .skills-section {
          padding: 100px 24px;
          max-width: 1280px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .light-mode .skills-section {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        /* Ambient glow in background */
        .skills-ambient-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow, rgba(16, 185, 129, 0.15)) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          transition: background 0.8s ease;
        }

        /* Header Area */
        .skills-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 36px;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 1;
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
          margin: 0 0 6px 0;
        }

        .light-mode .section-title {
          color: #09090b;
        }

        .section-subtitle {
          font-size: 15px;
          color: #a1a1aa;
          margin: 0;
          max-width: 540px;
        }

        .light-mode .section-subtitle {
          color: #64748b;
        }

        /* View Mode Switcher */
        .skills-view-toggle {
          display: inline-flex;
          align-items: center;
          padding: 4px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          gap: 4px;
        }

        .light-mode .skills-view-toggle {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #a1a1aa;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .toggle-btn.active {
          background: #ffffff;
          color: #09090b;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .light-mode .toggle-btn.active {
          background: #09090b;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Quick Category Filter Pills */
        .category-nav-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 2px 20px 2px;
          margin-bottom: 24px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          z-index: 1;
        }

        .category-nav-bar::-webkit-scrollbar {
          display: none;
        }

        .category-nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #a1a1aa;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .light-mode .category-nav-pill {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
          color: #4b5563;
        }

        .category-nav-pill:hover {
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .light-mode .category-nav-pill:hover {
          border-color: rgba(0, 0, 0, 0.2);
          color: #09090b;
        }

        .category-nav-pill.active {
          background: var(--pill-accent-bg, rgba(16, 185, 129, 0.15));
          border-color: var(--pill-accent, #10b981);
          color: #ffffff;
          box-shadow: 0 0 16px var(--pill-glow, rgba(16, 185, 129, 0.25));
        }

        .light-mode .category-nav-pill.active {
          color: #09090b;
        }

        /* ========================================================
           AUTO SLIDE MOVER 3D STAGE
        ======================================================== */
        .slider-stage-wrapper {
          position: relative;
          width: 100%;
          min-height: 480px;
          perspective: 1400px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          z-index: 1;
        }

        .slider-track {
          position: relative;
          width: 100%;
          max-width: 820px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 3D Moving Card */
        .skill-mover-card {
          position: absolute;
          width: 100%;
          max-width: 800px;
          background: rgba(18, 18, 24, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          padding: 36px 40px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          cursor: pointer;
          transition:
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.4s ease,
            box-shadow 0.4s ease;
          overflow: hidden;
          will-change: transform, opacity;
        }

        .light-mode .skill-mover-card {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        /* Top Accent Highlight Line */
        .card-top-beam {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-accent, #10b981), transparent);
          opacity: 0.9;
        }

        /* Top Ambient Radial Glow */
        .card-ambient-corner {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--card-glow, rgba(16, 185, 129, 0.3)) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Position States for 3D Auto Slide Mover */
        .skill-mover-card.state-active {
          transform: perspective(1400px) translateX(0) scale(1) rotateY(0deg);
          opacity: 1;
          filter: blur(0px);
          z-index: 10;
          pointer-events: auto;
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.6),
            0 0 40px var(--card-glow, rgba(16, 185, 129, 0.2));
        }

        .light-mode .skill-mover-card.state-active {
          border-color: var(--card-accent, #10b981);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.1),
            0 0 35px var(--card-glow, rgba(16, 185, 129, 0.18));
        }

        .skill-mover-card.state-prev {
          transform: perspective(1400px) translateX(-78%) scale(0.85) rotateY(16deg);
          opacity: 0.35;
          filter: blur(2px);
          z-index: 5;
          pointer-events: auto;
        }

        .skill-mover-card.state-prev:hover {
          opacity: 0.6;
          filter: blur(0.5px);
        }

        .skill-mover-card.state-next {
          transform: perspective(1400px) translateX(78%) scale(0.85) rotateY(-16deg);
          opacity: 0.35;
          filter: blur(2px);
          z-index: 5;
          pointer-events: auto;
        }

        .skill-mover-card.state-next:hover {
          opacity: 0.6;
          filter: blur(0.5px);
        }

        .skill-mover-card.state-hidden {
          transform: perspective(1400px) scale(0.7);
          opacity: 0;
          filter: blur(6px);
          pointer-events: none;
          z-index: 1;
        }

        /* Card Header */
        .card-header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 16px;
        }

        .card-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .card-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-glow, rgba(16, 185, 129, 0.15));
          border: 1px solid var(--card-accent, #10b981);
          box-shadow: 0 0 20px var(--card-glow, rgba(16, 185, 129, 0.25));
          color: var(--card-accent, #10b981);
          font-size: 24px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .skill-mover-card:hover .card-icon-badge {
          transform: scale(1.08) rotate(3deg);
        }

        .card-title-group h3 {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .light-mode .card-title-group h3 {
          color: #09090b;
        }

        .card-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--card-accent, #10b981);
        }

        .light-mode .card-badge-pill {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .card-index-indicator {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .index-number {
          font-size: 14px;
          font-weight: 700;
          font-family: monospace;
          color: #71717a;
          letter-spacing: 0.05em;
        }

        .live-status-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          color: var(--card-accent, #10b981);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--card-accent, #10b981);
          box-shadow: 0 0 8px var(--card-accent, #10b981);
          animation: statusPulse 2s infinite ease-in-out;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* Category Description */
        .card-desc-text {
          font-size: 14px;
          line-height: 1.6;
          color: #a1a1aa;
          margin: 0 0 24px 0;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .light-mode .card-desc-text {
          color: #4b5563;
          border-bottom-color: rgba(0, 0, 0, 0.08);
        }

        /* Skill Pills Container */
        .skills-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
        }

        .modern-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e4e4e7;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .light-mode .modern-skill-pill {
          background: rgba(0, 0, 0, 0.035);
          border-color: rgba(0, 0, 0, 0.09);
          color: #1f2937;
        }

        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--card-accent, #10b981);
          opacity: 0.7;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .modern-skill-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--card-accent, #10b981);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px var(--card-glow, rgba(16, 185, 129, 0.2));
        }

        .light-mode .modern-skill-pill:hover {
          background: rgba(0, 0, 0, 0.08);
          border-color: var(--card-accent, #10b981);
          color: #09090b;
        }

        .modern-skill-pill:hover .pill-dot {
          opacity: 1;
          transform: scale(1.4);
        }

        /* Card Footer */
        .card-footer-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 12px;
          color: #71717a;
        }

        .light-mode .card-footer-info {
          border-top-color: rgba(0, 0, 0, 0.06);
          color: #64748b;
        }

        .footer-count-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: var(--card-accent, #10b981);
        }

        .hover-pause-tip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          opacity: 0.8;
        }

        /* ========================================================
           SLIDER CONTROLS BAR
        ======================================================== */
        .slider-control-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          position: relative;
          z-index: 10;
          flex-wrap: wrap;
        }

        .nav-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(12px);
        }

        .light-mode .nav-arrow-btn {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #09090b;
        }

        .nav-arrow-btn:hover {
          background: var(--active-accent, #10b981);
          border-color: var(--active-accent, #10b981);
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 0 20px var(--active-glow, rgba(16, 185, 129, 0.4));
        }

        .play-pause-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #e4e4e7;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(12px);
        }

        .light-mode .play-pause-btn {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.12);
          color: #1f2937;
        }

        .play-pause-btn:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .light-mode .play-pause-btn:hover {
          border-color: rgba(0, 0, 0, 0.3);
          color: #000000;
        }

        /* Dots pagination */
        .dots-pagination-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .light-mode .slider-dot {
          background: rgba(0, 0, 0, 0.2);
        }

        .slider-dot.active {
          width: 28px;
          background: var(--active-accent, #10b981);
          box-shadow: 0 0 12px var(--active-glow, rgba(16, 185, 129, 0.5));
        }

        /* Auto-Slide Progress Bar */
        .slider-progress-track {
          width: 100%;
          max-width: 320px;
          height: 3px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          margin: 16px auto 0;
        }

        .light-mode .slider-progress-track {
          background: rgba(0, 0, 0, 0.08);
        }

        .slider-progress-fill {
          height: 100%;
          background: var(--active-accent, #10b981);
          box-shadow: 0 0 8px var(--active-accent, #10b981);
          transition: width 0.1s linear;
        }

        /* ========================================================
           GRID VIEW (ALTERNATIVE MODE)
        ======================================================== */
        .skills-grid-view {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .grid-skill-card {
          background: rgba(18, 18, 24, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 30px;
          backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .light-mode .grid-skill-card {
          background: rgba(255, 255, 255, 0.88);
          border-color: rgba(0, 0, 0, 0.09);
        }

        .grid-skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--card-accent, #10b981);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 30px var(--card-glow, rgba(16, 185, 129, 0.2));
        }

        .light-mode .grid-skill-card:hover {
          box-shadow:
            0 16px 36px rgba(0, 0, 0, 0.08),
            0 0 24px var(--card-glow, rgba(16, 185, 129, 0.15));
        }

        /* ========================================================
           RESPONSIVE BREAKPOINTS
        ======================================================== */
        @media (max-width: 900px) {
          .skills-grid-view {
            grid-template-columns: 1fr;
          }

          .skill-mover-card {
            padding: 28px 24px;
          }

          .skill-mover-card.state-prev {
            transform: perspective(1400px) translateX(-95%) scale(0.8);
            opacity: 0.15;
          }

          .skill-mover-card.state-next {
            transform: perspective(1400px) translateX(95%) scale(0.8);
            opacity: 0.15;
          }
        }

        @media (max-width: 640px) {
          .skills-section {
            padding: 70px 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .slider-stage-wrapper {
            min-height: 520px;
          }

          .skill-mover-card {
            padding: 24px 18px;
          }

          .skill-mover-card.state-prev,
          .skill-mover-card.state-next {
            display: none;
          }

          .card-header-flex {
            flex-direction: column;
            align-items: flex-start;
          }

          .card-index-indicator {
            align-items: flex-start;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
          }

          .modern-skill-pill {
            font-size: 12.5px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <section
        id="skills"
        className="skills-section"
        style={{
          '--active-accent': activeCategory.accent,
          '--active-glow': activeCategory.accentGlow
        }}
      >
        {/* Dynamic ambient color glow that morphs with the current slide */}
        <div
          className="skills-ambient-glow"
          style={{ '--accent-glow': activeCategory.accentGlow }}
        />

        {/* Section Header */}
        <div className="skills-header-row">
          <div>
            <div className="section-tag">
              <Cpu size={14} />
              <span>Core Competencies & Tooling</span>
            </div>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Specialized expertise across SIEM telemetry, threat analysis, network defense, PKI infrastructure, and security automation.
            </p>
          </div>

          {/* View Mode Toggle: Auto Slider vs Grid */}
          <div className="skills-view-toggle">
            <button
              type="button"
              className={`toggle-btn ${viewMode === 'slider' ? 'active' : ''}`}
              onClick={() => setViewMode('slider')}
              title="Interactive Auto Slide Mover"
            >
              <Sliders size={14} />
              <span>Auto Slider</span>
            </button>
            <button
              type="button"
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Overview Grid"
            >
              <LayoutGrid size={14} />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="category-nav-bar">
          {skillCategories.map((cat, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-nav-pill ${isActive ? 'active' : ''}`}
                style={{
                  '--pill-accent': cat.accent,
                  '--pill-accent-bg': `${cat.accent}20`,
                  '--pill-glow': cat.accentGlow
                }}
                onClick={() => {
                  goToSlide(idx);
                  if (viewMode !== 'slider') setViewMode('slider');
                }}
              >
                <span>{cat.emoji}</span>
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* ====================================================
            VIEW MODE 1: AUTO SLIDE MOVER 3D STAGE
        ==================================================== */}
        {viewMode === 'slider' ? (
          <div
            className="slider-wrapper-outer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slider-stage-wrapper">
              <div className="slider-track">
                {skillCategories.map((cat, idx) => {
                  const IconComponent = cat.icon;
                  const diff = (idx - currentIndex + total) % total;

                  let stateClass = 'state-hidden';
                  if (diff === 0) {
                    stateClass = 'state-active';
                  } else if (diff === 1) {
                    stateClass = 'state-next';
                  } else if (diff === total - 1) {
                    stateClass = 'state-prev';
                  }

                  return (
                    <div
                      key={cat.id}
                      className={`skill-mover-card ${stateClass}`}
                      style={{
                        '--card-accent': cat.accent,
                        '--card-glow': cat.accentGlow
                      }}
                      onClick={() => {
                        if (diff === 1) nextSlide();
                        if (diff === total - 1) prevSlide();
                      }}
                    >
                      {/* Top accent beam & radial corner glow */}
                      <div className="card-top-beam" />
                      <div className="card-ambient-corner" />

                      {/* Header */}
                      <div className="card-header-flex">
                        <div className="card-header-left">
                          <div className="card-icon-badge">
                            <IconComponent size={26} />
                          </div>
                          <div className="card-title-group">
                            <h3>
                              <span>{cat.emoji}</span>
                              <span>{cat.title}</span>
                            </h3>
                            <span className="card-badge-pill">
                              <Sparkles size={11} />
                              <span>{cat.badge}</span>
                            </span>
                          </div>
                        </div>

                        <div className="card-index-indicator">
                          <span className="index-number">
                            {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                          </span>
                          <span className="live-status-chip">
                            <span className="live-dot" />
                            <span>Active Module</span>
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="card-desc-text">{cat.desc}</p>

                      {/* Skill Pills */}
                      <div className="skills-pills-wrap">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="modern-skill-pill">
                            <span className="pill-dot" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer Info */}
                      <div className="card-footer-info">
                        <span className="footer-count-chip">
                          ⚡ {cat.skills.length} Certified Competencies
                        </span>
                        <span className="hover-pause-tip">
                          {isHovered ? '⏸️ Auto-slide paused' : '⟳ Auto sliding • Hover to hold'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slider Controls Bar */}
            <div className="slider-control-center">
              <button
                type="button"
                className="nav-arrow-btn"
                onClick={prevSlide}
                title="Previous Category"
                aria-label="Previous Category"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                className="play-pause-btn"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                title={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              >
                {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isAutoPlaying ? 'Auto Moving' : 'Paused'}</span>
              </button>

              <div className="dots-pagination-wrap">
                {skillCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => goToSlide(idx)}
                    title={`Slide to ${cat.title}`}
                    aria-label={`Slide to ${cat.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="nav-arrow-btn"
                onClick={nextSlide}
                title="Next Category"
                aria-label="Next Category"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          /* ====================================================
             VIEW MODE 2: OVERVIEW GRID
          ==================================================== */
          <div className="skills-grid-view">
            {skillCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="grid-skill-card"
                  style={{
                    '--card-accent': cat.accent,
                    '--card-glow': cat.accentGlow
                  }}
                >
                  <div className="card-top-beam" />
                  <div className="card-ambient-corner" />

                  <div className="card-header-flex">
                    <div className="card-header-left">
                      <div className="card-icon-badge">
                        <IconComponent size={24} />
                      </div>
                      <div className="card-title-group">
                        <h3 style={{ fontSize: '18px' }}>
                          <span>{cat.emoji}</span>
                          <span>{cat.title}</span>
                        </h3>
                        <span className="card-badge-pill">
                          <Sparkles size={11} />
                          <span>{cat.badge}</span>
                        </span>
                      </div>
                    </div>

                    <div className="card-index-indicator">
                      <span className="index-number">
                        {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <p className="card-desc-text" style={{ fontSize: '13.5px' }}>
                    {cat.desc}
                  </p>

                  <div className="skills-pills-wrap">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="modern-skill-pill">
                        <span className="pill-dot" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer-info">
                    <span className="footer-count-chip">
                      ⚡ {cat.skills.length} Competencies
                    </span>
                    <button
                      type="button"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: cat.accent,
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                      onClick={() => {
                        goToSlide(idx);
                        setViewMode('slider');
                      }}
                    >
                      Focus in Slider →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
