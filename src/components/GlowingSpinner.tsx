'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlowingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#060b13] h-[50vh] shadow-2xl shadow-[#00bfa5]/5 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড নিওন গ্লো ইফেক্ট */}
      <div className="absolute w-40 h-40 bg-[#00bfa5]/5 rounded-full filter blur-[50px] pointer-events-none" />

      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* বাইরের ঘূর্ণায়মান গ্লোয়িং ডাবল রিং */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="absolute w-full h-full rounded-full border-2 border-transparent border-t-[#00bfa5] border-b-[#00bfa5]/20"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 191, 165, 0.4))' }}
        />

        {/* ভেতরের অপোজিট ডিরেকশনে ঘূর্ণায়মান রিং */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="absolute w-24 h-24 rounded-full border-2 border-transparent border-l-[#00bfa5]/80 border-r-[#00bfa5]/10"
        />

        {/* একদম ভেতরের অরবিটিং নিওন ডট */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="absolute w-14 h-14 rounded-full border border-dashed border-[#00bfa5]/30 flex items-center justify-center"
        >
          <div className="w-2.5 h-2.5 bg-[#00bfa5] rounded-full absolute -top-1.5 shadow-[0_0_10px_#00bfa5] animate-pulse" />
        </motion.div>

        {/* সেন্ট্রাল লোগো বা টেক্সট প্লেসহোল্ডার */}
        <span className="text-white font-black text-lg tracking-wider select-none animate-pulse">
          S
        </span>
      </div>

      {/* নিচের সাব-টেক্সট */}
      <div className="mt-6 flex flex-col items-center space-y-1 z-10">
        <h3 className="text-sm font-semibold text-[#f8fafc] tracking-wide">
          Connecting to SkillBridge
        </h3>
        <p className="text-[10px] font-medium text-[#00bfa5] uppercase tracking-[0.2em] animate-pulse">
          Loading assets...
        </p>
      </div>
    </div>
  );
}
