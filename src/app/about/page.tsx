'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  FolderKanban,
  Search,
  Smartphone,
  Briefcase,
  Users2,
  Building2,
  Percent,
  ArrowRight,
} from 'lucide-react';

export default function MainSections() {
  // SECTION A: Core Functional Grid Array Mapping Configuration
  const featureCards = [
    {
      icon: <Shield className="text-[#00bfa5] w-6 h-6" />,
      title: 'Secure Platform',
      desc: 'Your data and transactions are protected with industry-standard security.',
    },
    {
      icon: <FolderKanban className="text-[#00bfa5] w-6 h-6" />,
      title: 'Easy Project Management',
      desc: 'Create, manage and track projects with a powerful and intuitive dashboard.',
    },
    {
      icon: <Search className="text-[#00bfa5] w-6 h-6" />,
      title: 'Smart Search',
      desc: 'Find the right opportunities faster with advanced search and filtering.',
    },
    {
      icon: <Smartphone className="text-[#00bfa5] w-6 h-6" />,
      title: 'Responsive Experience',
      desc: 'Enjoy a seamless experience across all devices, anytime and anywhere.',
    },
  ];

  // SECTION B: Metric Growth Stats Calculation Setup
  const platformStats = [
    {
      icon: <Briefcase className="text-[#00bfa5] w-5 h-5" />,
      count: '10K+',
      label: 'Projects',
    },
    {
      icon: <Users2 className="text-[#00bfa5] w-5 h-5" />,
      count: '6K+',
      label: 'Freelancers',
    },
    {
      icon: <Building2 className="text-[#00bfa5] w-5 h-5" />,
      count: '1500+',
      label: 'Companies',
    },
    {
      icon: <Percent className="text-[#00bfa5] w-5 h-5" />,
      count: '98%',
      label: 'Success Rate',
    },
  ];

  return (
    <div className="w-full bg-[#040810] text-white select-none font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32 py-24">
        {/* ========================================================================= */}
        {/* --- 1. CORE BRAND MISSION SECTION LAYOUT LAYER                         --- */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#060c16] border border-[#0f172a] rounded-[2rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Brand Vector Art Wrapper Grid Block */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Outer Circular Targets Rendering Context */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#00bfa5]/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-[#64748b]/10" />

              {/* Central Dynamic Target Canvas Element Graphic */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#00bfa5]/10 to-transparent flex items-center justify-center border border-[#00bfa5]/30 shadow-[0_0_50px_rgba(0,191,165,0.05)]">
                <div className="w-32 h-32 rounded-full border-8 border-[#00bfa5] flex items-center justify-center relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-[#040810] rounded-full" />
                  </div>
                  {/* Absolute Tilted Arrow Line Mapping Simulation */}
                  <div className="absolute top-0 right-0 w-24 h-1 bg-[#64748b] origin-left rotate-[45deg] before:content-[''] before:absolute before:right-0 before:-top-1 before:w-3 before:h-3 before:bg-[#64748b] before:rotate-45" />
                </div>
              </div>

              {/* Decorative Absolute Cards Array Block */}
              <div className="absolute -top-4 -left-4 bg-[#0a1424] border border-[#1e293b] p-3 rounded-xl shadow-lg flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">
                  👤
                </div>
                <div className="space-y-1">
                  <div className="w-12 h-1.5 bg-white/40 rounded" />
                  <div className="w-8 h-1 bg-white/20 rounded" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-8 bg-[#0a1424] border border-[#1e293b] p-4 rounded-xl shadow-lg space-y-2 w-44">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#00bfa5]" />
                  <div className="w-16 h-1.5 bg-white/40 rounded" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#00bfa5]" />
                  <div className="w-20 h-1.5 bg-white/40 rounded" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#00bfa5]" />
                  <div className="w-12 h-1.5 bg-white/40 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Typography Details Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Our Mission
            </h3>
            <div className="w-10 h-0.5 bg-[#00bfa5]" />
            <div className="space-y-4 text-[#64748b] text-sm md:text-base leading-relaxed font-normal">
              <p>
                Our mission is to empower freelancers and businesses by
                providing a secure, efficient and transparent platform for
                finding work and getting things done.
              </p>
              <p>
                We believe in talent without borders and opportunities without
                limits.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* --- 2. THE CHOOSE CORE FEATURES ADVANTAGE PANEL                       --- */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Why Choose SkillBridge
            </h2>
            <div className="w-12 h-0.5 bg-[#00bfa5] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#060c16] border border-[#0f172a] hover:border-[#00bfa5]/30 p-8 rounded-2xl space-y-5 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1526] border border-[#1e293b] flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="space-y-2.5">
                  <h4 className="font-semibold text-sm md:text-base tracking-wide text-white">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#64748b] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- 3. PLATFORM IN NUMBERS METRIC GROWTH STATS ROW                    --- */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Our Platform in Numbers
            </h2>
            <div className="w-12 h-0.5 bg-[#00bfa5] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#060c16] border border-[#0f172a] p-6 rounded-xl flex items-center space-x-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.01)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0a1526] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                    {stat.count}
                  </h4>
                  <p className="text-xs text-[#64748b] font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- 4. MIDSECTION INLINE CALL TO ACTION PANEL                          --- */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#060c16] border border-[#0f172a] rounded-[2rem] p-8 md:p-14 text-center space-y-8 shadow-[0_0_50px_rgba(0,191,165,0.01)]"
        >
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Start Your Freelance Journey Today
            </h2>
            <div className="w-10 h-0.5 bg-[#00bfa5] mx-auto" />
          </div>
          <p className="text-[#64748b] text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Join SkillBridge today and discover endless opportunities to grow
            your career or find the perfect talent for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-[#1e293b] hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-all duration-200">
              <span>Create Account</span>
              <ArrowRight size={14} className="opacity-60" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
