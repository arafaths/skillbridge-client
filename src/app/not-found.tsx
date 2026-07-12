'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040810] text-white flex items-center justify-center px-4 md:px-8 select-none font-sans overflow-hidden relative">
      {/* Background Decorative Glow Layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-10 relative z-10">
        {/* ==================== ANIMATED GRAPHIC REGION ==================== */}
        <div className="relative flex justify-center">
          {/* Main Huge 404 Text with Gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-[9rem] md:text-[13rem] font-black tracking-tighter leading-none bg-gradient-to-b from-white via-white/40 to-transparent bg-clip-text text-transparent opacity-90 drop-shadow-[0_0_50px_rgba(0,191,165,0.05)]"
          >
            404
          </motion.h1>

          {/* Floating Absolute Graphic Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-12 md:top-16 bg-[#060c16] border border-[#0f172a] px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2.5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-red-400">
              Connection Lost
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-4 right-4 md:right-12 bg-[#060c16] border border-[#0f172a] p-3 rounded-xl shadow-lg flex items-center space-x-2"
          >
            <HelpCircle size={16} className="text-[#00bfa5]" />
            <span className="text-[11px] text-[#64748b] font-medium">
              Page Not Found
            </span>
          </motion.div>
        </div>

        {/* ==================== TYPOGRAPHY DETAILS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4 px-4"
        >
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Oops! Youve drifted into empty space.
          </h2>
          <div className="w-12 h-0.5 bg-[#00bfa5] mx-auto" />
          <p className="text-xs md:text-sm text-[#64748b] max-w-sm mx-auto leading-relaxed font-normal">
            The project workspace or talent profile you are looking for doesnt
            exist or has been relocated. Lets get you back on track!
          </p>
        </motion.div>

        {/* ==================== ACTION CONTROLS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
        >
          {/* Primary Action Button */}
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-colors duration-200 shadow-lg shadow-[#00bfa5]/5"
          >
            <Home size={15} />
            <span>Back to Home</span>
          </Link>

          {/* Secondary Action Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-transparent border border-[#1e293b] hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-all duration-200"
          >
            <ArrowLeft size={15} className="opacity-70" />
            <span>Go Previous Page</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
