import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiMapPin } from 'react-icons/fi';

interface Project {
  _id: string;
  title: string;
  category: string;
  description: string;
  minBudget: number;
  maxBudget: number;
  daysLeft: number;
  thumbnail: string;
  author: {
    name: string;
    location: string;
    avatar: string;
  };
}

interface ProjectCardProps {
  project: Project;
  viewType: 'grid' | 'list';
  getCategoryStyles: (category: string) => string;
}

const ProjectCard = ({
  project,
  viewType,
  getCategoryStyles,
}: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className={`bg-[#0a1120] border border-[#131f35] rounded-2xl overflow-hidden hover:border-[#00bfa5]/40 hover:shadow-xl hover:shadow-[#00bfa5]/5 transition-all duration-300 group flex ${
        viewType === 'list' ? 'flex-col sm:flex-row' : 'flex-col'
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          viewType === 'list' ? 'h-48 sm:h-auto sm:w-64' : 'h-48'
        } shrink-0 bg-slate-900`}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-md ${getCategoryStyles(
              project.category,
            )}`}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-[#00bfa5] transition-colors">
            {project.title}
          </h3>

          <p className="text-[#64748b] text-sm line-clamp-2 mb-4">
            {project.description}
          </p>

          <div className="flex justify-between items-center border-b border-[#131f35] pb-4 mb-4">
            <span className="text-[#00bfa5] font-bold">
              ${project.minBudget} - ${project.maxBudget}
            </span>

            <span className="flex items-center gap-1 text-[#64748b] text-sm">
              <FiClock />
              {project.daysLeft} days left
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={project.author.avatar}
              alt={project.author.name}
              className="w-9 h-9 rounded-full object-cover"
            />

            <div>
              <h4 className="text-white text-sm font-semibold">
                {project.author.name}
              </h4>

              <p className="text-[#64748b] text-xs flex items-center gap-1">
                <FiMapPin />
                {project.author.location}
              </p>
            </div>
          </div>

          <Link
            href={`/projects/${project._id}`}
            className="bg-[#060b13] hover:bg-[#00bfa5] hover:text-black text-[#00bfa5] p-2 rounded-lg transition"
          >
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
