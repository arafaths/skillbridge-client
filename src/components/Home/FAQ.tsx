'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { HelpCircle, Plus, Minus, ArrowRight } from 'lucide-react';

// TypeScript FAQ structure configuration
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  // Track open state index (null means all closed initially)
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Step 1 open by default as in screenshot

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'How do I create an account?',
      answer:
        'Click the Register button, fill in your information, and create your free SkillBridge account.',
    },
    {
      id: 2,
      question: 'Can I post a project for free?',
      answer:
        'Yes, posting basic project listings is completely free. You can specify budgets, required skills, and duration parameters to start receiving proposals immediately.',
    },
    {
      id: 3,
      question: 'How can I search for projects?',
      answer:
        'Use our advanced filtering tools on the project marketplace page. You can sort by industry category, budget scope, necessary skill tags, and experience tiers.',
    },
    {
      id: 4,
      question: 'Is my account secure?',
      answer:
        'Absolutely. We utilize state-of-the-art JWT authentication frameworks alongside standard secure socket layers (SSL) to guarantee user credentials and communication pipelines remain heavily encrypted.',
    },
    {
      id: 5,
      question: 'Can I edit or delete my projects?',
      answer:
        'Yes, project creators hold full control to modify parameters or take down current listings directly from their personalized dashboard terminal management view.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#040810] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* --- TOP TRACK BADGE --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-[#00bfa5]/5 border border-[#00bfa5]/15 px-4 py-1.5 rounded-full mb-5"
        >
          <HelpCircle className="text-[#00bfa5]" size={13} />
          <span className="text-xs text-[#00bfa5] font-medium tracking-wide uppercase">
            FAQ
          </span>
        </motion.div>

        {/* --- SECTION HEADINGS --- */}
        <div className="text-center space-y-4 max-w-2xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4.5xl font-bold tracking-tight text-white leading-tight"
          >
            Frequently Asked <span className="text-[#00bfa5]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-sm md:text-base font-normal leading-relaxed"
          >
            Find answers to the most common questions about using SkillBridge.
          </motion.p>
        </div>

        {/* --- ACCORDION WRAPPER --- */}
        <div className="w-full space-y-4">
          {faqData.map(item => {
            const isOpen = openIndex === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-[#060c16]
                  ${isOpen ? 'border-[#00bfa5]/40 shadow-[0_0_25px_rgba(0,191,165,0.02)]' : 'border-[#0f172a] hover:border-[#1e293b]'}
                `}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left focus:outline-none select-none group"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <span
                      className={`text-sm font-semibold transition-colors duration-200
                      ${isOpen ? 'text-[#00bfa5]' : 'text-[#475569]'}
                    `}
                    >
                      {item.id}.
                    </span>
                    <h3
                      className={`font-medium text-sm md:text-base tracking-wide transition-colors duration-200
                      ${isOpen ? 'text-white font-semibold' : 'text-[#cbd5e1] group-hover:text-white'}
                    `}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Icon Indicator Action Trigger */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                    ${isOpen ? 'bg-[#00bfa5] text-black' : 'bg-[#0a1526] border border-[#1e293b] text-[#94a3b8]'}
                  `}
                  >
                    {isOpen ? (
                      <Minus size={14} strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Smooth Animated Height Collapse Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="pb-6 pt-1 px-6 md:px-8 pl-12 md:pl-14 border-t border-[#0f172a]/40">
                        <p className="text-[#64748b] text-xs md:text-sm leading-relaxed font-normal max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER ASSISTANCE ACTION TRIGGER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 text-xs md:text-sm text-[#64748b] pt-12 font-medium"
        >
          <span>Still have questions?</span>
          <a
            href="#support"
            className="text-[#00bfa5] hover:text-[#00a68f] font-semibold flex items-center space-x-1 border-b border-transparent hover:border-[#00a68f] transition-all duration-200 pb-0.5 group"
          >
            <span>Contact our support team</span>
            <ArrowRight
              size={13}
              className="transform group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
