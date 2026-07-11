'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiChevronRight,
  FiMail,
  FiArrowRight,
} from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  // Footer navigation structures
  const links = {
    explore: [
      'Explore Projects',
      'Popular Categories',
      'Featured Projects',
      'Latest Opportunities',
    ],
    company: ['About', 'Contact', 'Blog', 'Careers'],
    support: ['Help Center', 'FAQ', 'Privacy Policy', 'Terms & Conditions'],
  };

  return (
    <footer className="bg-[#060b13] text-[#94a3b8] text-sm pt-16 pb-8 px-4 md:px-8 border-t border-[#0d1527]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-12">
        {/* 1. BRAND COL */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#00bfa5] to-[#00796b] rounded-lg flex items-center justify-center transform rotate-45 shadow-lg shadow-[#00bfa5]/20">
              <span className="text-white font-black text-xl -rotate-45">
                S
              </span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-none tracking-wide">
                SkillBridge
              </h2>
              <span className="text-[#64748b] text-[10px]">
                Connect Skills with Opportunities
              </span>
            </div>
          </div>

          <p className="text-[#64748b] leading-relaxed max-w-sm">
            SkillBridge is a modern freelance marketplace that connects talented
            freelancers with clients around the world through secure, innovative
            and efficient solutions.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-3 pt-2">
            {[
              { icon: <FiGithub size={18} />, href: '#' },
              {
                icon: <FiLinkedin size={18} className="text-[#00bfa5]" />,
                href: '#',
              },
              { icon: <FiTwitter size={18} />, href: '#' },
              { icon: <FiFacebook size={18} />, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-[#0d1527] border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#00bfa5] hover:bg-[#00bfa5]/5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2. EXPLORE COL */}
        <div>
          <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
            Explore
          </h3>
          <ul className="space-y-3.5">
            {links.explore.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <FiChevronRight
                    className="text-[#00bfa5] transform group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. COMPANY COL */}
        <div>
          <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
            Company
          </h3>
          <ul className="space-y-3.5">
            {links.company.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <FiChevronRight
                    className="text-[#00bfa5] transform group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. SUPPORT & NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
            Support
          </h3>
          <ul className="space-y-3.5">
            {links.support.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <FiChevronRight
                    className="text-[#00bfa5] transform group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. NEWSLETTER FORM PANEL */}
        <div className="md:col-span-2 lg:col-span-1 space-y-4">
          <h3 className="text-white font-semibold text-base tracking-wide">
            Newsletter
          </h3>
          <p className="text-[#64748b] leading-relaxed">
            Get the latest freelance opportunities directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative flex items-center">
              <FiMail className="absolute left-3.5 text-[#64748b]" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#0a1120] border border-[#1e293b] rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#00bfa5] focus:ring-1 focus:ring-[#00bfa5]/30 transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-[#00bfa5] text-[#060b13] py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#00a38c] transition-all shadow-lg shadow-[#00bfa5]/10"
            >
              <span>Subscribe</span>
              <FiArrowRight size={16} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-[#0d1527] pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
        <p>© 2026 SkillBridge. All rights reserved.</p>
        <div className="flex items-center space-x-1">
          <span>Made with</span>
          <span className="text-rose-500 animate-pulse">❤️</span>
          <span>using</span>
          <span className="text-[#00bfa5] font-medium">Next.js</span>
          <span>,</span>
          <span className="text-[#00bfa5] font-medium">TypeScript</span>
          <span>and</span>
          <span className="text-[#00bfa5] font-medium">Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
