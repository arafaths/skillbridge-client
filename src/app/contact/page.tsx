'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Plus,
  Minus,
  Headphones,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export default function ContactPage() {
  // FAQ Accordion State Management
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form Field State Management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted Safely:', formData);
    // Add your live API endpoint integration logic here
  };

  // Static Data arrays based on user UI mockup
  const infoCards = [
    {
      icon: <Mail className="text-[#00bfa5] w-5 h-5" />,
      title: 'Email',
      value: 'support@skillbridge.com',
    },
    {
      icon: <Phone className="text-[#00bfa5] w-5 h-5" />,
      title: 'Phone',
      value: '+880 1234-567890',
    },
    {
      icon: <MapPin className="text-[#00bfa5] w-5 h-5" />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
    },
    {
      icon: <Clock className="text-[#00bfa5] w-5 h-5" />,
      title: 'Working Hours',
      value: 'Sunday – Thursday\n9:00 AM – 6:00 PM',
    },
  ];

  const faqData = [
    {
      question: 'How can I contact support?',
      answer:
        'You can reach our dedicated support team via the contact form on this page, or directly email us at support@skillbridge.com. We operate Sunday through Thursday.',
    },
    {
      question: 'How long does it take to receive a response?',
      answer:
        'Typically, our support agents review and respond to all incoming queries within 24 to 48 hours during regular business hours.',
    },
    {
      question: 'Can I report a technical issue?',
      answer:
        "Yes, absolutely. Please select 'Technical Issue' or state it clearly in the subject field of the message form so we can route it directly to our engineering team.",
    },
  ];

  return (
    <div className="w-full bg-[#040810] text-white select-none font-sans overflow-hidden py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* --- 1. HERO HEADER WITH MAILBOX VECTOR GRAPHIC ARCHITECTURE             --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#060c16] border border-[#0f172a] px-3 py-1.5 rounded-full">
              <MessageSquare size={14} className="text-[#00bfa5]" />
              <span className="text-[11px] text-[#00bfa5] font-semibold tracking-wider">
                Contact Us
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              We’re Here to <span className="text-[#00bfa5]">Help</span>
            </h1>
            <p className="text-[#64748b] text-sm md:text-base max-w-md leading-relaxed font-normal">
              Have a question, need support, or want to share feedback? Our team
              is ready to assist you anytime.
            </p>
          </div>

          {/* Mailbox Conceptual Art Block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-48 flex items-center justify-center">
              {/* Mailbox body shell container */}
              <div className="w-56 h-36 bg-[#0a1526] rounded-t-full rounded-b-xl border border-[#1e293b] relative flex items-center justify-center shadow-2xl">
                <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                {/* Envelope element */}
                <div className="w-36 h-24 bg-[#00bfa5] rounded-lg shadow-lg relative transform -rotate-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-[#00a68f] rounded-b-lg transform skew-y-12" />
                  <div className="w-24 h-16 bg-white rounded p-2 flex flex-col space-y-1.5 transform -translate-y-2 shadow-inner">
                    <div className="w-12 h-1 bg-[#64748b]/30 rounded" />
                    <div className="w-16 h-1 bg-[#64748b]/20 rounded" />
                    <div className="w-8 h-1 bg-[#64748b]/20 rounded" />
                  </div>
                </div>
              </div>
              {/* Paper Airplane abstract decoration */}
              <div className="absolute top-0 left-0 text-[#00bfa5] opacity-80 animate-bounce">
                <Send size={24} className="transform -rotate-45" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- 2. INFORMATIONAL MATRIX AND CONTACT CONTEXT SPLIT GRID              --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Info Parameter Grid Row */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#060c16] border border-[#0f172a] p-5 rounded-xl flex items-center space-x-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.01)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0a1526] border border-[#1e293b] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xs text-[#64748b] font-medium tracking-wide mb-0.5">
                    {card.title}
                  </h4>
                  <p className="text-sm font-semibold text-white tracking-wide whitespace-pre-line leading-relaxed">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Interactive Message Form Panel */}
          <div className="lg:col-span-7 bg-[#060c16] border border-[#0f172a] p-6 md:p-8 rounded-2xl shadow-xl w-full">
            <h3 className="text-lg font-bold text-white tracking-wide mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs text-[#64748b] font-semibold tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={e =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full bg-[#040810] border border-[#1e293b] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#00bfa5] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-[#64748b] font-semibold tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#040810] border border-[#1e293b] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#00bfa5] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-[#64748b] font-semibold tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={e =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-[#040810] border border-[#1e293b] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#00bfa5] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-[#64748b] font-semibold tracking-wide">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#040810] border border-[#1e293b] rounded-lg px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[#00bfa5] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold py-3.5 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-colors duration-200 mt-2"
              >
                <span>Send Message</span>
                <Send size={14} className="transform rotate-0" />
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- 3. FREQUENTLY ASKED QUESTIONS INTERACTIVE ACCORDION ROW             --- */}
        {/* ========================================================================= */}
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-[#00bfa5] mx-auto" />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#060c16] border border-[#0f172a] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-sm md:text-base text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className="text-[#64748b] shrink-0 ml-4">
                    {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-[#040810] text-xs md:text-sm text-[#64748b] leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* --- 4. BOTTOM NEED MORE ASSISTANCE BLOCK AREA                            --- */}
        {/* ========================================================================= */}
        <div className="bg-[#060c16] border border-[#0f172a] rounded-[2rem] p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,191,165,0.01)]">
          <div className="w-12 h-12 rounded-full bg-[#0a1526] border border-[#1e293b] flex items-center justify-center mx-auto shadow-inner">
            <Headphones size={20} className="text-[#00bfa5]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Need More Assistance?
            </h2>
            <p className="text-[#64748b] text-xs md:text-sm leading-relaxed font-normal">
              Our support team is always ready to help you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-colors duration-200">
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-[#1e293b] hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-all duration-200">
              <span>Create Account</span>
              <ArrowRight size={14} className="opacity-60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
