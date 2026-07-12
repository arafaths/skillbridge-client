'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
} from 'lucide-react';

export default function HeroCTA() {
  const trustBadges = [
    {
      label: 'Free Registration',
      icon: <CheckCircle2 size={18} className="text-[#00bfa5]" />,
    },
    {
      label: 'Secure Platform',
      icon: <ShieldCheck size={18} className="text-[#00bfa5]" />,
    },
    {
      label: 'Thousands of Opportunities',
      icon: <Star size={18} className="text-[#00bfa5]" />,
    },
  ];

  return (
    <section className="bg-[#040810] py-16 px-4 sm:px-6 flex justify-center items-center font-sans">
      {/* Main Container Card Box */}
      <div className="w-full max-w-5xl bg-[#060c16] border border-[#111c30] rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#00bfa5]/5 border border-[#00bfa5]/20 px-4 py-1.5 rounded-full mb-8">
          <Rocket className="text-[#00bfa5]" size={14} />
          <span className="text-xs text-[#00bfa5] font-semibold tracking-wider">
            Get Started Today
          </span>
        </div>

        {/* Dynamic Typography Stack */}
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mb-4">
          Ready to Find Your Next <br />
          <span className="text-[#00bfa5]">Freelance Opportunity?</span>
        </h2>

        <p className="text-[#64748b] text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
          Join SkillBridge today to connect with talented professionals,
          discover exciting projects, and grow your freelance career with
          confidence.
        </p>

        {/* Twin Button Trigger Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-14">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center space-x-2 transition-colors duration-200"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-transparent border border-[#1e293b] text-white font-semibold px-8 py-3.5 rounded-xl text-sm flex items-center justify-center space-x-2 transition-all duration-200"
          >
            <span>Create Account</span>
            <ArrowRight size={16} className="opacity-60" />
          </motion.button>
        </div>

        {/* Bottom Trust Badge Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 border-t border-[#0f172a] pt-8 w-full">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 text-xs md:text-sm text-[#64748b] font-medium"
            >
              <div className="flex shrink-0">{badge.icon}</div>
              <span>{badge.label}</span>
              {idx < 2 && (
                <span className="hidden md:inline text-[#162238] ml-6 font-light">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
