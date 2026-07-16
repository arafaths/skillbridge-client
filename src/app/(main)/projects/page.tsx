'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiRotateCcw,
  FiGrid,
  FiList,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from 'react-icons/fi';
import GlowingSpinner from '@/components/GlowingSpinner';
import NoProjects from '@/components/Projects/NoProjects';
import ProjectCard from '@/components/ProjectCard';

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

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBudget, setSelectedBudget] = useState('All Budgets');
  const [sortBy, setSortBy] = useState('Latest');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalPages, setTotalPages] = useState(1);


  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
        params: {
          search: searchQuery,
          category:
            selectedCategory === 'All Categories' ? '' : selectedCategory,
          page: currentPage,
          limit: 8,
        },
      });

      setProjects(res.data.data);
      setTotalProjects(res.data.total);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [searchQuery, selectedCategory, selectedBudget, sortBy, currentPage]);

  const categories = [
    'All Categories',
    'Web Development',
    'UI/UX Design',
    'Graphic Design',
    'Mobile Development',
    'Digital Marketing',
    'Content Writing',
    'Video Editing',
    'Data Analysis',
  ];
  const budgets = [
    'All Budgets',
    'Under $150',
    '$150 - $300',
    '$300 - $600',
    'Over $600',
  ];

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedBudget('All Budgets');
    setSortBy('Latest');
    setCurrentPage(1);
  };

  

  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Web Development':
        return 'bg-[#00bfa5]/10 text-[#00bfa5]';
      case 'UI/UX Design':
        return 'bg-[#00b0ff]/10 text-[#00b0ff]';
      case 'Graphic Design':
        return 'bg-[#ff9100]/10 text-[#ff9100]';
      case 'Mobile Development':
        return 'bg-[#1de9b6]/10 text-[#1de9b6]';
      case 'Digital Marketing':
        return 'bg-[#ff3d00]/10 text-[#ff3d00]';
      case 'Content Writing':
        return 'bg-[#00e5ff]/10 text-[#00e5ff]';
      case 'Video Editing':
        return 'bg-[#ffc400]/10 text-[#ffc400]';
      case 'Data Analysis':
        return 'bg-[#a700ff]/10 text-[#a700ff]';
      default:
        return 'bg-slate-800 text-slate-300';
    }
  };



  return (
    <div className="min-h-screen bg-[#060b13] text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-[#0a1120] border border-[#0d1527] p-4 rounded-xl flex flex-col lg:flex-row items-center gap-4 shadow-xl">
          <div className="relative w-full lg:flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#060b13] text-[#f8fafc] pl-12 pr-4 py-3 rounded-lg border border-[#1e293b] focus:outline-none focus:border-[#00bfa5] transition-all text-sm"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={e => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full appearance-none bg-[#060b13] border border-[#1e293b] text-sm text-[#94a3b8] px-4 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer focus:border-[#00bfa5]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedBudget}
                onChange={e => {
                  setSelectedBudget(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full appearance-none bg-[#060b13] border border-[#1e293b] text-sm text-[#94a3b8] px-4 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer focus:border-[#00bfa5]"
              >
                {budgets.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full appearance-none bg-[#060b13] border border-[#1e293b] text-sm text-[#94a3b8] px-4 py-3 pr-10 rounded-lg focus:outline-none cursor-pointer focus:border-[#00bfa5]"
              >
                <option value="Latest">Latest</option>
                <option value="Lowest Budget">Lowest Budget</option>
                <option value="Highest Budget">Highest Budget</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] pointer-events-none" />
            </div>

            <button
              onClick={handleResetFilters}
              className="flex items-center justify-center space-x-2 bg-[#060b13] border border-[#1e293b] text-sm text-[#94a3b8] px-4 py-3 rounded-lg hover:text-white hover:border-rose-500/50 hover:bg-rose-500/5 transition-all"
            >
              <FiRotateCcw size={15} />
              <span className="hidden sm:inline">Reset Filters</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-[#64748b] py-2">
          <div>
            Showing {(currentPage - 1) * 8 + 1} -
            {Math.min(currentPage * 8, totalProjects)} of {totalProjects}{' '}
            Projects
          </div>
          <div className="flex items-center space-x-2 bg-[#0a1120] p-1 rounded-lg border border-[#1e293b]">
            <button
              onClick={() => setViewType('grid')}
              className={`p-2 rounded-md transition-all ${viewType === 'grid' ? 'bg-[#00bfa5]/10 text-[#00bfa5]' : 'text-[#64748b] hover:text-white'}`}
            >
              <FiGrid size={18} />
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`p-2 rounded-md transition-all ${viewType === 'list' ? 'bg-[#00bfa5]/10 text-[#00bfa5]' : 'text-[#64748b] hover:text-white'}`}
            >
              <FiList size={18} />
            </button>
          </div>
        </div>

        {loading ? (
          <GlowingSpinner />
        ) : (
          <AnimatePresence mode="popLayout">
            {projects.length === 0 ? (
              <NoProjects handleResetFilters={handleResetFilters} />
            ) : (
              <motion.div
                layout
                className={
                  viewType === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'
                    : 'flex flex-col space-y-4'
                }
              >
                {projects.map(project => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    viewType={viewType}
                    getCategoryStyles={getCategoryStyles}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {projects.length > 0 && (
          <div className="flex items-center justify-center space-x-2 pt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2.5 rounded-lg bg-[#0a1120] border border-[#1e293b] text-sm text-[#94a3b8] hover:text-white disabled:opacity-40 disabled:hover:text-[#94a3b8] transition-all cursor-pointer"
            >
              <FiChevronLeft /> <span>Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#00bfa5] text-[#060b13]'
                    : 'bg-[#0a1120] border border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-[#00bfa5]/40'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
              disabled={currentPage === 5}
              className="flex items-center gap-1 px-4 py-2.5 rounded-lg bg-[#0a1120] border border-[#1e293b] text-sm text-[#94a3b8] hover:text-white disabled:opacity-40 disabled:hover:text-[#94a3b8] transition-all cursor-pointer"
            >
              <span>Next</span> <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
