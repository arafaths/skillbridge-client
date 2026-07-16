'use client';

import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FiBriefcase,
  FiArrowRight,
} from 'react-icons/fi';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import FeaturedProjectsSkeleton from '../FeaturedProjectsSkeleton';

interface FeaturedProject {
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

const getCategoryStyles = (cat: string) => {
 
  switch (cat) {
    case 'Web Development':
      return 'bg-[#00bfa5]/10 text-[#00bfa5] border-[#00bfa5]/20';
    case 'UI/UX Design':
      return 'bg-[#00b0ff]/10 text-[#00b0ff] border-[#00b0ff]/20';
    case 'Graphic Design':
      return 'bg-[#ff9100]/10 text-[#ff9100] border-[#ff9100]/20';
    case 'Mobile App':
      return 'bg-[#1de9b6]/10 text-[#1de9b6] border-[#1de9b6]/20';
    case 'Digital Marketing':
      return 'bg-[#ff3d00]/10 text-[#ff3d00] border-[#ff3d00]/20';
    case 'Content Writing':
      return 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/20';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<FeaturedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const viewType = 'grid';

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}projects/featured`,
        );

        setProjects(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  if (loading) {
    return <FeaturedProjectsSkeleton/>
  }
  return (
    <section className="bg-[#060b13] text-white py-16 px-4 md:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#00bfa5]/10 text-[#00bfa5] border border-[#00bfa5]/20 px-3 py-1.5 rounded-full text-xs font-semibold">
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-[#f8fafc]">
            Discover <span className="text-[#00bfa5]">Featured</span> Freelance
            Projects
          </h2>

          <p className="text-[#64748b] text-sm md:text-base font-medium leading-relaxed">
            Explore hand-picked freelance opportunities from various industries
            and find projects that match your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project._id}
              viewType={viewType}
              project={project}
              getCategoryStyles={getCategoryStyles}
            />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/projects"
            className="group flex items-center space-x-2 text-sm text-[#94a3b8] hover:text-white px-6 py-3 rounded-lg border border-[#1e293b] bg-[#0a1120] hover:border-[#00bfa5]/40 transition-all shadow-lg"
          >
            <span>View All Projects</span>
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
