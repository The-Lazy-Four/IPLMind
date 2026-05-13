"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// ═══════════════════════════════════════════════
// FOOTER DATA
// ═══════════════════════════════════════════════

const QUICK_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Play Game", href: "#play", icon: "sports_cricket" },
  { label: "Leaderboard", href: "/leaderboard", icon: "leaderboard" },
  { label: "Themes", href: "#themes", icon: "palette" },
  { label: "About", href: "#about", icon: "info" },
  { label: "How It Works", href: "#how", icon: "help" },
];

const FEATURES = [
  { label: "Bayesian AI Reasoning", icon: "psychology" },
  { label: "Semantic Player DNA", icon: "fingerprint" },
  { label: "Historical IPL Intelligence", icon: "history" },
  { label: "300+ IPL Players", icon: "groups" },
  { label: "Adaptive Learning", icon: "model_training" },
  { label: "Akinator-Style Gameplay", icon: "videogame_asset" },
];

const TECH_STACK = [
  { label: "Next.js", color: "#000000", bg: "rgba(0,0,0,0.08)" },
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
  { label: "Tailwind", color: "#38BDF8", bg: "rgba(56,189,248,0.12)" },
  { label: "Gemini API", color: "#8B5CF6", bg: "rgba(139,92,246,0.12)" },
  { label: "OpenRouter", color: "#FF6B2E", bg: "rgba(255,107,46,0.12)" },
  { label: "Semantic AI", color: "#10B981", bg: "rgba(16,185,129,0.12)" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:contact@iplmind.dev",
    icon: (
      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
        mail
      </span>
    ),
  },
  {
    label: "Portfolio",
    href: "#",
    icon: (
      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
        language
      </span>
    ),
  },
];

// ═══════════════════════════════════════════════
// ANIMATED DIVIDER
// ═══════════════════════════════════════════════
function FooterDivider() {
  return (
    <div className="footer-divider-wrap">
      <motion.div
        className="footer-divider-glow"
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════
// CRICKET BALL ACCENT
// ═══════════════════════════════════════════════
function CricketBallAccent() {
  return (
    <motion.div
      className="footer-cricket-ball"
      animate={{
        y: [0, -8, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      🏏
    </motion.div>
  );
}

// ═══════════════════════════════════════════════
// MAIN FOOTER COMPONENT
// ═══════════════════════════════════════════════
export default function Footer({ onStartGame }) {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <footer
      className={`iplmind-footer theme-${theme}`}
      role="contentinfo"
      aria-label="IPLMind Footer"
    >
      {/* ═══ Animated Top Divider ═══ */}
      <FooterDivider />

      {/* ═══ Main Footer Content ═══ */}
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* ── SECTION A: Branding ── */}
        <motion.div className="footer-section footer-branding" variants={itemVariants}>
          <div className="footer-logo-row">
            <span className="footer-logo">IPL Mind</span>
            <CricketBallAccent />
          </div>
          <p className="footer-tagline">
            AI-Powered IPL Guessing Engine
          </p>
          <p className="footer-tagline-sub">
            Think of an IPL player. Let the AI read your cricket mind.
          </p>

          {/* Mini CTA */}
          {onStartGame && (
            <motion.button
              className="footer-cta-btn"
              onClick={onStartGame}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
              Play Now
            </motion.button>
          )}
        </motion.div>

        {/* ── SECTION B: Quick Links ── */}
        <motion.div className="footer-section footer-links" variants={itemVariants}>
          <h3 className="footer-section-title">Quick Links</h3>
          <nav aria-label="Footer navigation">
            <ul className="footer-link-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    <span
                      className="material-symbols-outlined footer-link-icon"
                      style={{ fontSize: 16 }}
                    >
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* ── SECTION C: Features ── */}
        <motion.div className="footer-section footer-features" variants={itemVariants}>
          <h3 className="footer-section-title">Features</h3>
          <ul className="footer-feature-list">
            {FEATURES.map((feat) => (
              <li key={feat.label} className="footer-feature-item">
                <span
                  className="material-symbols-outlined footer-feature-icon"
                  style={{ fontSize: 16 }}
                >
                  {feat.icon}
                </span>
                <span>{feat.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── SECTION D: Tech Stack ── */}
        <motion.div className="footer-section footer-tech" variants={itemVariants}>
          <h3 className="footer-section-title">Tech Stack</h3>
          <div className="footer-tech-grid">
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech.label}
                className="footer-tech-chip"
                style={{
                  "--chip-color": tech.color,
                  "--chip-bg": tech.bg,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="footer-tech-dot"
                  style={{ background: tech.color }}
                />
                {tech.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ═══ Social & Contact Row ═══ */}
      <motion.div
        className="footer-social-row"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="footer-social-buttons">
          {SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="footer-social-btn"
              aria-label={social.label}
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ═══ Copyright Strip ═══ */}
      <div className="footer-copyright">
        <div className="footer-copyright-inner">
          <p className="footer-copyright-text">
            © 2026 IPLMind — Built with AI, Cricket & Chaos 🏏
          </p>
          <span className="footer-hackathon-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
              code
            </span>
            GDG Hackathon
          </span>
        </div>
      </div>
    </footer>
  );
}
