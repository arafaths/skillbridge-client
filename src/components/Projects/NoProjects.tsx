import React from 'react';
import { motion } from 'framer-motion';

interface NoProjectsProps {
  handleResetFilters: () => void;
}

const NoProjects = ({ handleResetFilters }: NoProjectsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0a1120] rounded-2xl p-16 text-center border border-[#1e293b]"
    >
      <p className="text-[#64748b] text-lg">
        No projects match your search criteria.
      </p>

      <button
        onClick={handleResetFilters}
        className="mt-4 text-[#00bfa5] text-sm hover:underline"
      >
        Clear all filters
      </button>
    </motion.div>
  );
};

export default NoProjects;
