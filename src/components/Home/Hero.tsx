'use client';

import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiBriefcase,
  FiUsers,
  FiTrendingUp,
  FiMousePointer,
  FiArrowUpRight,
  FiStar,
} from 'react-icons/fi';

export default function Hero() {
  // Stat counter raw data
  const stats = [
    {
      value: '10K+',
      label: 'Projects Posted',
      icon: <FiBriefcase className="text-[#00bfa5] text-xl" />,
    },
    {
      value: '6K+',
      label: 'Freelancers',
      icon: <FiUsers className="text-[#00bfa5] text-xl" />,
    },
    {
      value: '1500+',
      label: 'Companies',
      icon: <FiTrendingUp className="text-[#00bfa5] text-xl" />,
    },
    {
      value: '98%',
      label: 'Success Rate',
      icon: <FiArrowUpRight className="text-[#00bfa5] text-xl" />,
    },
  ];

  // Infinite floating animation config for floating layout badges
  const floatingAnimation = (delay: number) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut' as const, // <--- Add "as const" here to fix the TS Easing error
        delay: delay,
      },
    },
  });

  return (
    <section className="bg-[#060b13] text-white min-h-screen relative overflow-hidden pt-12 pb-20 px-4 md:px-8 flex items-center">
      {/* Background radial effects matching original design */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00796b]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* --- LEFT SIDE: HERO CONTENT (5 Cols) --- */}
        <div className="lg:col-span-5 space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[#0d1527] border border-[#1e293b] px-3.5 py-1.5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#00bfa5] animate-pulse" />
            <span className="text-xs text-[#94a3b8] font-medium tracking-wide">
              The Modern Freelance Marketplace
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              Find Freelance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa5] to-[#00b98a]">
                Opportunities
              </span>{' '}
              That <br />
              Match Your Skills.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#94a3b8] text-base leading-relaxed max-w-lg"
            >
              SkillBridge helps freelancers discover high-quality projects while
              enabling clients to find talented professionals through a fast,
              secure and modern marketplace experience.
            </motion.p>
          </div>

          {/* Trust Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3 text-sm"
          >
            <div className="flex text-amber-500 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-amber-500" size={16} />
              ))}
            </div>
            <span className="text-[#64748b] font-medium">
              Trusted by thousands of freelancers and businesses worldwide.
            </span>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button className="bg-[#00bfa5] text-[#060b13] px-8 py-3.5 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-[#00a38c] transition-all duration-300 shadow-lg shadow-[#00bfa5]/20">
              <span>Explore Projects</span>
              <FiArrowRight size={18} />
            </button>
            <button className="border border-[#1e293b] hover:border-[#94a3b8] px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#0d1527] transition-all duration-300 text-white">
              <span>Post a Project</span>
              <FiArrowRight size={18} />
            </button>
          </motion.div>

          {/* Stats Section grid layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0a1120] border border-[#0d1527] p-4 rounded-xl flex flex-col justify-between h-[100px] hover:border-[#1e293b] transition-all"
              >
                <div className="bg-[#0d1527] w-8 h-8 rounded-lg flex items-center justify-center border border-[#1e293b]">
                  {stat.icon}
                </div>
                <div className="mt-2">
                  <div className="text-xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[#64748b] text-[11px] font-medium leading-none">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: PREMIUM DASHBOARD MOCKUP (7 Cols) --- */}
        <div className="lg:col-span-7 relative flex justify-center items-center mt-12 lg:mt-0">
          {/* Main Dashboard Frame Container */}
          <div className="relative w-full max-w-[620px] aspect-[4/3] bg-[#0a1120] border-4 border-[#1e293b] rounded-2xl overflow-hidden shadow-2xl shadow-[#000]/60 p-4 flex flex-col justify-between">
            {/* Header snippet inside mockup */}
            <div className="flex justify-between items-center border-b border-[#0d1527] pb-3 mb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="bg-[#0d1527] text-[10px] text-[#64748b] px-4 py-1 rounded-full border border-[#1e293b] w-48 text-center truncate">
                skillbridge.com/dashboard/arafat
              </div>
              <div className="w-8" />
            </div>

            {/* Inner Grid layout containing analytics inside mockup */}
            <div className="grid grid-cols-12 gap-3 flex-1 overflow-hidden">
              {/* Left inner side panel mockup */}
              <div className="col-span-3 border-r border-[#0d1527] pr-2 space-y-2.5">
                <div className="text-[#00bfa5] text-[11px] font-semibold bg-[#00bfa5]/10 px-2 py-1.5 rounded-lg flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00bfa5]" />
                  <span>Dashboard</span>
                </div>
                {[
                  'Projects',
                  'Messages',
                  'Freelancers',
                  'My Tasks',
                  'Analytics',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-[#64748b] text-[11px] px-2 py-1 rounded-lg hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Central inner panel mockup */}
              <div className="col-span-9 pl-1 space-y-3.5 flex flex-col justify-between h-full">
                {/* Profile Greeting */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">
                      Welcome back, Arafat 👋
                    </h3>
                    <p className="text-[9px] text-[#64748b]">
                      Heres whats happening today.
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#00bfa5]/20 border border-[#00bfa5] flex items-center justify-center text-[10px] text-[#00bfa5] font-bold">
                    A
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Total Projects', val: '24', pct: '+12%' },
                    { label: 'Active', val: '8', pct: '+8%' },
                    { label: 'Earnings', val: '$12,450', pct: '+18%' },
                    { label: 'Completed', val: '16', pct: '+10%' },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="bg-[#0d1527] p-2 rounded-lg border border-[#1e293b]"
                    >
                      <span className="text-[8px] text-[#64748b] block leading-none mb-1">
                        {d.label}
                      </span>
                      <div className="text-[11px] font-bold text-white">
                        {d.val}
                      </div>
                      <span className="text-[7px] text-[#00bfa5] font-semibold">
                        {d.pct}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simulated activity chart area with actual vector line */}
                <div className="bg-[#0d1527] border border-[#1e293b] p-2 rounded-xl relative flex-1 flex flex-col justify-between">
                  <span className="text-[9px] text-white font-medium block">
                    Earnings Overview
                  </span>
                  {/* SVG line mimic vector chart */}
                  <div className="h-16 w-full relative mt-1 flex items-end">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 30"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 25 Q 15 15, 30 22 T 60 8 T 90 2 T 100 5"
                        fill="none"
                        stroke="#00bfa5"
                        strokeWidth="2"
                      />
                      <path
                        d="M0 25 Q 15 15, 30 22 T 60 8 T 90 2 T 100 5 L 100 30 L 0 30 Z"
                        fill="url(#grad)"
                        opacity="0.15"
                      />
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#00bfa5" />
                          <stop offset="100%" stopColor="#060b13" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between text-[7px] text-[#64748b] pt-1">
                    <span>May 1</span>
                    <span>May 8</span>
                    <span>May 15</span>
                    <span>May 22</span>
                    <span>May 29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- FLOATING ABSOLUTE BADGES (Positioned uniquely around mockup dashboard) --- */}

          {/* 1. TOP LEFT: New Opportunity badge */}
          <motion.div
            variants={floatingAnimation(0.2)}
            initial="initial"
            animate="animate"
            className="absolute -top-6 -left-6 bg-[#0a1120]/90 backdrop-blur-md border border-[#1e293b] px-3.5 py-2.5 rounded-xl shadow-xl hidden md:flex items-center space-x-3 z-20"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f59e0b] to-[#d97706] flex items-center justify-center text-white font-bold text-xs">
              💼
            </div>
            <div>
              <h5 className="text-[10px] text-white font-semibold leading-tight">
                New Opportunity
              </h5>
              <span className="text-[8px] text-[#64748b]">
                Frontend Developer needed
              </span>
            </div>
          </motion.div>

          {/* 2. TOP RIGHT: Project Approved badge */}
          <motion.div
            variants={floatingAnimation(1)}
            initial="initial"
            animate="animate"
            className="absolute -top-10 -right-6 bg-[#0a1120]/90 backdrop-blur-md border border-[#1e293b] px-3.5 py-2.5 rounded-xl shadow-xl hidden md:flex items-center space-x-3 z-20"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <FiCheckCircle size={18} />
            </div>
            <div>
              <h5 className="text-[10px] text-white font-semibold leading-tight">
                Project Approved
              </h5>
              <span className="text-[8px] text-[#64748b]">
                Your project has been approved
              </span>
            </div>
          </motion.div>

          {/* 3. MIDDLE RIGHT: Client Hired badge */}
          <motion.div
            variants={floatingAnimation(1.8)}
            initial="initial"
            animate="animate"
            className="absolute top-1/3 -right-14 bg-[#0a1120]/90 backdrop-blur-md border border-[#1e293b] px-3.5 py-2.5 rounded-xl shadow-xl hidden lg:flex items-center space-x-3 z-20"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 font-bold text-xs">
              🤝
            </div>
            <div>
              <h5 className="text-[10px] text-white font-semibold leading-tight">
                Client Hired
              </h5>
              <span className="text-[8px] text-[#64748b]">
                You have a new hire!
              </span>
            </div>
          </motion.div>

          {/* 4. BOTTOM CENTER-RIGHT: Payment Received badge */}
          <motion.div
            variants={floatingAnimation(2.6)}
            initial="initial"
            animate="animate"
            className="absolute -bottom-6 right-12 bg-[#0a1120]/90 backdrop-blur-md border border-[#1e293b] px-4 py-3 rounded-xl shadow-xl hidden md:flex items-center space-x-3 z-20"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#00bfa5] font-bold text-xs">
              💰
            </div>
            <div>
              <h5 className="text-[10px] text-white font-semibold leading-tight">
                Payment Received
              </h5>
              <span className="text-[8px] text-[#64748b]">
                $2,450 received successfully
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- SCROLL MOUSE INDICATOR (Bottom Center) --- */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer text-xs text-[#64748b] hover:text-white transition-colors duration-200">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <FiMousePointer size={14} className="text-[#00bfa5]" />
        </motion.div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
