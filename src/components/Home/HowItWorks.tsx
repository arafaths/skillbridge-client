'use client';

import { JSX } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  UserPlus,
  Search,
  Briefcase,
  ArrowRight,
  Settings,
} from 'lucide-react';

// Strict TypeScript structure for Step Items
interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  desc: string;
  icon: JSX.Element;
}

export default function HowItWorks() {
  // Ordered step sequences aligned with the layout image
  const steps: StepItem[] = [
    {
      id: 'step-1',
      stepNumber: 'Step 01',
      title: 'Create an Account',
      desc: 'Sign up and create your professional profile in just a few minutes.',
      icon: <UserPlus className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      id: 'step-2',
      stepNumber: 'Step 02',
      title: 'Explore Projects',
      desc: 'Browse projects, search by category, and find opportunities that match your skills.',
      icon: <Search className="w-6 h-6 text-[#00bfa5]" />,
    },
    {
      id: 'step-3',
      stepNumber: 'Step 03',
      title: 'Start Your Journey',
      desc: 'Add your own projects or connect with opportunities and grow your freelance career.',
      icon: <Briefcase className="w-6 h-6 text-[#00bfa5]" />,
    },
  ];

  // Motion animation presets with exact TypeScript definitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="bg-[#040810] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- TOP FUNCTIONAL BADGE --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-[#00bfa5]/5 border border-[#00bfa5]/15 px-4 py-1.5 rounded-full mb-6"
        >
          <Settings className="text-[#00bfa5]" size={14} />
          <span className="text-xs text-[#00bfa5] font-medium tracking-wide">
            How It Works
          </span>
        </motion.div>

        {/* --- SECTION HEADINGS --- */}
        <div className="text-center space-y-4 max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4.5xl font-bold tracking-tight text-white leading-tight"
          >
            Get Started in{' '}
            <span className="text-[#00bfa5]">3 Simple Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            SkillBridge makes it easy for freelancers and clients to connect,
            collaborate and achieve amazing results together.
          </motion.p>
        </div>

        {/* --- PROCEDURAL CARDS TIMELINE GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 w-full relative mb-16"
        >
          {steps.map((step, idx) => (
            <div key={step.id} className="relative flex items-center w-full">
              {/* Card Container block */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: 'rgba(0, 191, 165, 0.2)' }}
                className="bg-[#060c16] border border-[#0f172a] rounded-2xl p-8 flex flex-col items-center text-center w-full relative group select-none transition-all duration-300 z-10"
              >
                {/* Concentric Double-Layer Rounded Rings Accent */}
                <div className="w-20 h-20 rounded-full bg-[#031524] border border-[#00bfa5]/10 flex items-center justify-center relative mb-6 shadow-[0_0_30px_rgba(0,191,165,0.03)] group-hover:border-[#00bfa5]/30 transition-colors duration-300">
                  <div className="absolute inset-2 rounded-full bg-[#00bfa5]/10 animate-pulse opacity-40 group-hover:opacity-60" />
                  <div className="w-14 h-14 rounded-full bg-[#00bfa5]/10 flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Card Main Meta Stack */}
                <span className="text-xs font-semibold text-[#00bfa5] tracking-wider uppercase mb-2">
                  {step.stepNumber}
                </span>

                <h3 className="font-bold text-lg md:text-xl text-white mb-3 tracking-wide">
                  {step.title}
                </h3>

                <p className="text-[#64748b] text-xs md:text-sm leading-relaxed max-w-xs font-normal">
                  {step.desc}
                </p>

                {/* Static interactive circular layout downarrow wrapper */}
                {/* <div className="w-9 h-9 rounded-full bg-[#0a1526] border border-[#1e293b] flex items-center justify-center mt-auto group-hover:bg-[#00bfa5] group-hover:border-[#00bfa5] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-black transition-colors duration-300" />
                </div> */}
              </motion.div>

              {/* Connecting Dashed Arrow Liners between grid columns (hidden on Mobile layouts) */}
              {idx < 2 && (
                <div className="hidden lg:flex absolute top-[22%] -right-[15px] w-[30px] z-0 items-center justify-center opacity-40">
                  <span className="text-[#00bfa5] font-light tracking-widest select-none text-xl animate-pulse">
                    ---&gt;
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* --- BOTTOM CONTEXT CALL BACK TRIGGER ROW --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <span className="text-[#64748b] text-sm md:text-base font-medium">
            Ready to get started?
          </span>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#00bfa5] hover:bg-[#00a68f] text-black font-semibold px-6 py-3 rounded-xl text-sm flex items-center space-x-2 transition-colors duration-200 shadow-md shadow-[#00bfa5]/10"
          >
            <span>Create an Account</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
