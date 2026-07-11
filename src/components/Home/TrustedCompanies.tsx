'use client';

import { motion } from 'framer-motion';
import {
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
  FaAirbnb,
  FaShopify,
  FaSlack,
  FaDropbox,
  FaGithub,
  FaCheckCircle,
} from 'react-icons/fa';
import { SiNotion} from 'react-icons/si';
import { FiFolder, FiUsers, FiBriefcase, FiStar } from 'react-icons/fi';
import { LiaAdobe } from 'react-icons/lia';

export default function TrustedSection() {
  // Company logos with their respective react-icons
  const companies = [
    { name: 'Google', icon: <FaGoogle size={20} /> },
    { name: 'Microsoft', icon: <FaMicrosoft size={20} /> },
    { name: 'Spotify', icon: <FaSpotify size={20} /> },
    { name: 'Airbnb', icon: <FaAirbnb size={20} /> },
    { name: 'Shopify', icon: <FaShopify size={20} /> },
    { name: 'Slack', icon: <FaSlack size={20} /> },
    { name: 'Dropbox', icon: <FaDropbox size={20} /> },
    { name: 'Notion', icon: <SiNotion size={20} /> },
    { name: 'Adobe', icon: <LiaAdobe size={20} /> },
    { name: 'GitHub', icon: <FaGithub size={20} /> },
  ];

  // Stats / Features card layout data
  const featureCards = [
    {
      id: 1,
      value: '10K+',
      label: 'Projects Posted',
      icon: <FiFolder size={22} className="text-[#00bfa5]" />,
      bgIcon: 'bg-[#00bfa5]/10',
    },
    {
      id: 2,
      value: '6K+',
      label: 'Freelancers',
      icon: <FiUsers size={22} className="text-[#00bfa5]" />,
      bgIcon: 'bg-[#00bfa5]/10',
    },
    {
      id: 3,
      value: '1500+',
      label: 'Hiring Companies',
      icon: <FiBriefcase size={22} className="text-[#00bfa5]" />,
      bgIcon: 'bg-[#00bfa5]/10',
    },
    {
      id: 4,
      value: '98%',
      label: 'Client Satisfaction',
      icon: <FiStar size={22} className="text-amber-500" />,
      bgIcon: 'bg-amber-500/10',
    },
  ];

  return (
    <section className="bg-[#060b13] text-white py-20 px-4 md:px-8 border-t border-[#0d1527] relative overflow-hidden">
      {/* HEADER SECTION */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 bg-[#00bfa5]/10 border border-[#00bfa5]/20 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00bfa5]" />
          <span className="text-xs text-[#00bfa5] font-semibold tracking-wide uppercase">
            Trusted Worldwide
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa5] to-[#00b98a]">
            Trusted
          </span>{' '}
          by Growing <br />
          Companies Worldwide
        </h2>

        <p className="text-[#64748b] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Businesses across different industries use SkillBridge to discover
          talented freelancers and build high-performing teams.
        </p>
      </div>

      {/* --- LOGO CAROUSEL CONTAINER --- */}
      <div className="max-w-7xl mx-auto bg-[#0a1120] border border-[#0d1527] rounded-xl py-6 px-4 mb-12 relative overflow-hidden group">
        {/* Gradients masking for fluid fading edge look */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0a1120] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0a1120] to-transparent z-10 pointer-events-none" />

        {/* Infinite Looping Slider with Framer Motion */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex space-x-12 shrink-0 pr-12"
            animate={{ x: [0, '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Duplicated list arrays to ensure seamless infinite looping trick */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-[#64748b] hover:text-[#94a3b8] transition-colors duration-200 cursor-pointer select-none"
              >
                <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {company.icon}
                </div>
                <span className="font-semibold text-base tracking-wide whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- BIG FEATURE STAT CARDS GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featureCards.map(card => (
          <motion.div
            key={card.id}
            whileHover={{ y: -5, borderColor: '#1e293b' }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="bg-[#0a1120] border border-[#0d1527] p-8 rounded-2xl flex flex-col justify-between items-start h-[190px] shadow-xl relative group"
          >
            {/* Icon Block */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border border-[#1e293b] ${card.bgIcon}`}
            >
              {card.icon}
            </div>

            {/* Values Block */}
            <div className="w-full space-y-1 mt-4">
              <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-[#00bfa5] transition-colors">
                {card.value}
              </h3>
              <p className="text-[#64748b] text-sm font-medium">{card.label}</p>
            </div>

            {/* Bottom Accent Line */}
            <div className="w-8 h-[2px] bg-[#00bfa5]/40 group-hover:w-16 group-hover:bg-[#00bfa5] transition-all duration-300 mt-2" />
          </motion.div>
        ))}
      </div>

      {/* BOTTOM BRAND PROMISE FOOTNOTE */}
      <div className="text-center pt-4 flex items-center justify-center space-x-2 text-xs md:text-sm text-[#64748b]">
        <FaCheckCircle className="text-[#00bfa5]" size={14} />
        <p>
          <span className="text-[#00bfa5] font-semibold">
            Secure. Reliable. Professional.
          </span>{' '}
          That’s the SkillBridge promise.
        </p>
      </div>
    </section>
  );
}
