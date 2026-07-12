'use client';

import { JSX } from 'react';
import { motion, Variants } from 'framer-motion';
import { MessageSquare, Star, Smile, Briefcase, ThumbsUp } from 'lucide-react';

// Strict TypeScript structure definitions for Testimonials
interface ReviewItem {
  id: string;
  name: string;
  role: 'Freelancer' | 'Client'; // Specific typography role configuration
  image: string;
  rating: number;
  comment: string;
}

interface PerformanceMetric {
  value: string;
  label: string;
  icon: JSX.Element;
}

export default function Testimonials() {
  // Ordered card data mapping from screenshot layout
  const reviews: ReviewItem[] = [
    {
      id: 'review-1',
      name: 'Sarah Johnson',
      role: 'Freelancer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment:
        'SkillBridge made it easy to discover quality freelance projects and connect with amazing clients.',
    },
    {
      id: 'review-2',
      name: 'Michael Brown',
      role: 'Client',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment:
        'We quickly found talented developers for our startup. The platform is simple and efficient.',
    },
    {
      id: 'review-3',
      name: 'Emily Davis',
      role: 'Freelancer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
      comment:
        'The clean interface and project discovery tools helped me grow my freelance career.',
    },
  ];

  // Global aggregate highlights block metrics data structure
  const metrics: PerformanceMetric[] = [
    {
      value: '10K+',
      label: 'Happy Freelancers',
      icon: <Smile className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      value: '1500+',
      label: 'Satisfied Clients',
      icon: <Briefcase className="w-5 h-5 text-[#00bfa5]" />,
    },
    {
      value: '4.9/5',
      label: 'Average Rating',
      icon: <Star className="w-5 h-5 text-[#00bfa5] fill-[#00bfa5]/20" />,
    },
    {
      value: '98%',
      label: 'Positive Feedback',
      icon: <ThumbsUp className="w-5 h-5 text-[#00bfa5]" />,
    },
  ];

  // Motion variants with strict static typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <section className="bg-[#040810] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- TOP BADGE HEAD --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-[#00bfa5]/5 border border-[#00bfa5]/15 px-4 py-1.5 rounded-full mb-5"
        >
          <MessageSquare className="text-[#00bfa5]" size={13} />
          <span className="text-xs text-[#00bfa5] font-medium tracking-wide">
            Testimonials
          </span>
        </motion.div>

        {/* --- SECTION HEADINGS --- */}
        <div className="text-center space-y-4 max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4.5xl font-bold tracking-tight text-white leading-tight"
          >
            What Our <span className="text-[#00bfa5]">Users</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-sm md:text-base font-normal leading-relaxed"
          >
            See what freelancers and clients think about their experience with
            SkillBridge.
          </motion.p>
        </div>

        {/* --- USER FEEDBACK 3-COLUMN CARDS --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12"
        >
          {reviews.map(review => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgba(0, 191, 165, 0.2)' }}
              className="bg-[#060c16] border border-[#0f172a] rounded-2xl p-8 flex flex-col h-[280px] relative group transition-all duration-300 cursor-pointer"
            >
              {/* Quote Mark Icon Shell in Top Right Corner */}
              <div className="absolute top-8 right-8 text-2xl font-serif text-[#00bfa5]/20 select-none pointer-events-none group-hover:text-[#00bfa5]/40 transition-colors duration-300">
                “ ”
              </div>

              {/* Top Section: Avatar Profile Block */}
              <div className="flex items-center space-x-4 mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#1e293b] group-hover:border-[#00bfa5]/40 transition-colors duration-300"
                />
                <div className="space-y-0.5">
                  <h4 className="font-bold text-base text-white tracking-wide">
                    {review.name}
                  </h4>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-md inline-block
                    ${review.role === 'Freelancer' ? 'bg-[#00bfa5]/10 text-[#00bfa5]' : 'bg-blue-500/10 text-blue-400'}
                  `}
                  >
                    {review.role}
                  </span>
                </div>
              </div>

              {/* Middle Section: Solid Rating Stars Row */}
              <div className="flex text-amber-500 space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 stroke-amber-500"
                  />
                ))}
              </div>

              {/* Bottom Section: Actual Comment Text Block */}
              <p className="text-[#64748b] text-sm leading-relaxed font-normal group-hover:text-[#94a3b8] transition-colors duration-200 line-clamp-3">
                {review.comment}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- GLOBAL BOTTOM METRICS SUMMARY PANEL --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full bg-[#060c16] border border-[#0f172a] rounded-2xl p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
        >
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-4 justify-start pl-4 lg:pl-8 
                ${idx > 0 ? 'lg:border-l lg:border-[#0f172a]' : ''} 
                ${idx === 1 || idx === 3 ? 'border-l-0 sm:border-l-0' : ''}
              `}
            >
              {/* Left-Aligned Vector Icon Core Wrapper */}
              <div className="w-10 h-10 rounded-xl bg-[#0a1526] border border-[#1e293b] flex items-center justify-center shrink-0">
                {metric.icon}
              </div>

              {/* Typography Metrics Stack */}
              <div className="space-y-0.5">
                <div className="text-xl md:text-2xl font-black tracking-tight text-white">
                  {metric.value}
                </div>
                <div className="text-[#64748b] text-xs font-medium tracking-wide">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
