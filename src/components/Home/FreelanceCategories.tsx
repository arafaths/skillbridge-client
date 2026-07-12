'use client';

import { Variants, motion } from 'framer-motion';
import {
  Code,
  Paintbrush,
  Palette,
  Smartphone,
  Megaphone,
  FileText,
  Video,
  BarChart2,
  BrainCircuit,
  ShieldAlert,
  Search,
  Cloud,
  ArrowUpRight,
  Star,
} from 'lucide-react';

export default function FreelanceCategories() {
  // Categories Data structure aligning perfectly with screenshot
  const categories = [
    {
      title: 'Web Development',
      desc: 'Build modern, responsive and scalable websites.',
      count: 245,
      icon: <Code className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'UI/UX Design',
      desc: 'Design beautiful and user-friendly experiences.',
      count: 189,
      icon: <Paintbrush className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Graphic Design',
      desc: 'Create stunning visuals that inspire.',
      count: 312,
      icon: <Palette className="w-5 h-5 text-[#00bfa5]" />,
      badge: { text: 'Most Popular', type: 'popular' },
    },
    {
      title: 'Mobile Development',
      desc: 'Build powerful mobile apps for iOS & Android.',
      count: 168,
      icon: <Smartphone className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Digital Marketing',
      desc: 'Grow brands and reach the right audience.',
      count: 276,
      icon: <Megaphone className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Content Writing',
      desc: 'Write engaging and SEO-friendly content.',
      count: 342,
      icon: <FileText className="w-5 h-5 text-[#00bfa5]" />,
      badge: { text: 'Trending', type: 'trending' },
    },
    {
      title: 'Video Editing',
      desc: 'Edit videos that captivate and engage.',
      count: 127,
      icon: <Video className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Data Analysis',
      desc: 'Turn data into insights and smart decisions.',
      count: 153,
      icon: <BarChart2 className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Artificial Intelligence',
      desc: 'Build intelligent solutions with A/ML.',
      count: 98,
      icon: <BrainCircuit className="w-5 h-5 text-[#00bfa5]" />,
      badge: { text: 'New', type: 'new' },
    },
    {
      title: 'Cyber Security',
      desc: 'Protect systems and secure digital assets.',
      count: 76,
      icon: <ShieldAlert className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'SEO Optimization',
      desc: 'Improve rankings and drive organic traffic.',
      count: 201,
      icon: <Search className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      title: 'Cloud Computing',
      desc: 'Deploy, manage and scale in the cloud.',
      count: 119,
      icon: <Cloud className="w-5 h-5 text-[#00bfa5]" />,
    },
  ];

  // Container variants for staggered entrance animation
  const containerVariants: Variants = {
    // <--- Add : Variants type here
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    // <--- Add : Variants type here
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const, // <--- Add "as const" here to lock the type string
        stiffness: 100,
      },
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
          className="inline-flex items-center space-x-1.5 bg-[#00bfa5]/5 border border-[#00bfa5]/15 px-4 py-1.5 rounded-full mb-5"
        >
          <Star className="text-[#00bfa5] fill-[#00bfa5]/20" size={13} />
          <span className="text-xs text-[#00bfa5] font-medium tracking-wide">
            Popular Categories
          </span>
        </motion.div>

        {/* --- SECTION HEADINGS --- */}
        <div className="text-center space-y-4 max-w-2xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4.5xl font-bold tracking-tight text-white"
          >
            Explore Freelance <span className="text-[#00bfa5]">Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-sm md:text-base font-normal leading-relaxed"
          >
            Discover thousands of freelance opportunities across todays most
            in-demand professional categories.
          </motion.p>
        </div>

        {/* --- CATEGORIES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -4,
                borderColor: 'rgba(0, 191, 165, 0.3)',
                backgroundColor: '#091122',
              }}
              className="bg-[#060c18] border border-[#0f172a] rounded-2xl p-6 flex flex-col justify-between  relative group select-none transition-colors duration-300"
            >
              {/* Context Badges (Top Right corner) */}
              {cat.badge && (
                <div
                  className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1
                  ${cat.badge.type === 'popular' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : ''}
                  ${cat.badge.type === 'trending' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : ''}
                  ${cat.badge.type === 'new' ? 'bg-[#00bfa5]/10 text-[#00bfa5] border border-[#00bfa5]/20' : ''}
                `}
                >
                  {cat.badge.type === 'popular' && (
                    <Star size={10} className="fill-amber-500" />
                  )}
                  {cat.badge.text}
                </div>
              )}

              {/* Top Row: Icon and Typography */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#091424] border border-[#1e293b] flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div className="space-y-1 pr-16">
                  <h3 className="font-semibold text-base text-white tracking-wide group-hover:text-[#00bfa5] transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="text-[#64748b] text-xs leading-normal font-normal line-clamp-2">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Project counter & Interactive Circle Arrow */}
              {/* <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs font-medium text-[#64748b]">
                  <span className="text-[#00bfa5] font-semibold">
                    {cat.count}
                  </span>{' '}
                  Open Projects
                </span>

                <div className="w-8 h-8 rounded-full bg-[#0a1526] border border-[#1e293b] flex items-center justify-center group-hover:bg-[#00bfa5] group-hover:border-[#00bfa5] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:text-black transition-colors duration-300" />
                </div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
