'use client';

import { motion, Variants } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle,
  Search,
  Briefcase,
  Smartphone,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function WhyChooseUs() {
  // 6 Core Features matching the screenshot grid layout
  const features = [
    {
      title: 'Secure Authentication',
      desc: 'JWT-based authentication with protected routes and secure account management.',
      icon: <ShieldCheck className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      title: 'Verified Opportunities',
      desc: 'Browse trusted freelance projects with clear budgets, deadlines and requirements.',
      icon: <CheckCircle className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      title: 'Powerful Search & Filters',
      desc: 'Find the right opportunity using advanced search, filtering and sorting tools.',
      icon: <Search className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      title: 'Easy Project Management',
      desc: 'Create, manage and organize your freelance projects through a clean dashboard.',
      icon: <Briefcase className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      title: 'Responsive Experience',
      desc: 'Enjoy a seamless experience across desktop, tablet and mobile devices.',
      icon: <Smartphone className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      title: 'Modern User Experience',
      desc: 'Fast performance, elegant design and smooth interactions built for productivity.',
      icon: <Sparkles className="w-6 h-6 text-[#00bfa5]" />,
    },
  ];

  // TypeScript safe variants configuration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90 },
    },
  };

  return (
    <section className="bg-[#040810] text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- TOP BADGE --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-[#00bfa5]/5 border border-[#00bfa5]/15 px-4 py-1.5 rounded-full mb-5"
        >
          <ShieldCheck className="text-[#00bfa5]" size={14} />
          <span className="text-xs text-[#00bfa5] font-medium tracking-wide uppercase">
            Why Choose SkillBridge
          </span>
        </motion.div>

        {/* --- MAIN SECTION HEADINGS --- */}
        <div className="text-center space-y-4 max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4.5xl font-bold tracking-tight text-white leading-tight"
          >
            Why Thousands of Professionals <br /> Choose{' '}
            <span className="text-[#00bfa5]">SkillBridge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            SkillBridge provides a secure, modern and efficient freelance
            marketplace where talented professionals and businesses connect,
            collaborate and grow together.
          </motion.p>
        </div>

        {/* --- 3-COLUMN / 2-ROW FEATURES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -4,
                borderColor: 'rgba(0, 191, 165, 0.25)',
                backgroundColor: '#070e1c',
              }}
              className="bg-[#060c16] border border-[#0f172a] rounded-2xl p-6 flex items-start space-x-5 relative group select-none transition-colors duration-300"
            >
              {/* Left Side Large Round Icon Shell */}
              <div className="w-14 h-14 rounded-full bg-[#091424] border border-[#14233c] flex items-center justify-center shrink-0 group-hover:border-[#00bfa5]/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-[#00bfa5]/5 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Text Context Stack */}
              <div className="flex-1 space-y-2 pr-6">
                <h3 className="font-semibold text-base text-white tracking-wide group-hover:text-[#00bfa5] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-[#64748b] text-xs md:text-sm leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>

              {/* Tiny Floating Arrow Button on bottom-right */}
              {/* <div className="absolute bottom-5 right-5 w-7 h-7 rounded-full bg-[#0a1526] border border-[#1e293b] flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:bg-[#00bfa5] group-hover:border-[#00bfa5] transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-black transition-colors duration-300" />
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM HERO CTA BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-full bg-gradient-to-r from-[#060d1a] to-[#09152b] border border-[#101f38] rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group"
        >
          {/* Subtle tech background circle decoration (as seen on screenshot left side) */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-36 h-36 border border-[#00bfa5]/5 rounded-full pointer-events-none flex items-center justify-center">
            <div className="w-28 h-28 border border-[#00bfa5]/10 border-dashed rounded-full" />
          </div>

          {/* Left Block: Logo Brand Icon & Text Accent */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10 text-center sm:text-left">
            {/* Hexagon-ish App Custom Logo Mark Shell */}
            <div className="w-16 h-16 rounded-2xl bg-[#0a1a2e] border-2 border-[#00bfa5]/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,191,165,0.05)] group-hover:border-[#00bfa5]/40 transition-colors duration-300">
              <div className="text-[#00bfa5] font-black text-2xl tracking-tighter select-none">
                S
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug max-w-xl">
              Everything you need to connect with{' '}
              <br className="hidden sm:inline" />
              opportunities and{' '}
              <span className="text-[#00bfa5]">grow your freelance career</span>
              .
            </h3>
          </div>

          {/* Right Block: Interactive Buttons Pair */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#00bfa5] hover:bg-[#00a68f] text-black font-semibold px-6 py-3 rounded-xl text-sm flex items-center justify-center space-x-2 transition-colors duration-200 shadow-lg shadow-[#00bfa5]/10"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-transparent border border-[#1e293b] hover:bg-white/5 text-white font-medium px-6 py-3 rounded-xl text-sm flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <span>Learn More</span>
              <ArrowRight size={16} className="opacity-60" />
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
