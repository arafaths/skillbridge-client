'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FiMapPin,
  FiCalendar,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiBarChart2,
  FiUser,
  FiArrowRight,
  FiBookmark,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProjectDetailsSkeleton from '@/components/ProjectDetails/ProjectDetailsSkeleton';
import RelatedProjectsSkeleton from '@/components/ProjectDetails/RelatedProjectsSkeleton';

interface ProjectDetails {
  _id: string;
  title: string;
  category: string;

  shortDesc: string;
  description: string[];

  thumbnail: string;
  images: string[];

  minBudget: number;
  maxBudget: number;

  postedDate: string;
  deadline: string;
  daysLeft: number;

  experienceLevel: string;
  projectType: string;
  duration: string;

  requirements: string[];
  skills: string[];

  author: {
    name: string;
    avatar: string;
    location: string;
    email: string;
    joined: string;
  };
}

interface RelatedProject {
  _id: string;
  title: string;
  category: string;
  thumbnail: string;
  minBudget: number;
  maxBudget: number;
}

export default function ProjectDetailsPage() {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<RelatedProject[]>([]);

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/projects/${id}`);

        setProject(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  useEffect(() => {
    if (!project) return;
    axios
      .get(`http://localhost:5000/projects/related/${project._id}`)
      .then(res => {
        setRelatedProjects(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRelatedLoading(false);
      });
  }, [project]);

  if (loading) {
    return <ProjectDetailsSkeleton />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen py-10 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= LEFT CONTENT AREA ================= */}
        <div className="lg:col-span-2 space-y-8">
          {/* ১. মেইন ইমেজ গ্যালারি সেকশন */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#111827] bg-[#0b0f19] aspect-[16/9] group">
              <img
                src={project.images?.[activeImgIndex] || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* থাম্বনেইল স্ট্রিপ */}
            <div className="grid grid-cols-4 gap-4">
              {project.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImgIndex(index)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 bg-[#0b0f19] transition-all ${
                    activeImgIndex === index
                      ? 'border-[#00bfa5]'
                      : 'border-[#111827] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ২. হেডার ইনফরমেশন */}
          <div className="space-y-4">
            <span className="inline-block text-[#00bfa5] text-xs font-semibold px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-md">
              {project.category}
            </span>
            <h1 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* ৩. গ্রিড আকারে মেটা ডেটা ইনফো */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 py-6 border-y border-[#111827] text-xs md:text-sm">
            <div className="flex items-start space-x-2.5">
              <FiUser className="text-[#00bfa5] shrink-0 mt-0.5" size={16} />
              <div>
                <p className="text-slate-500 font-medium">Client</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.author.name}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiMapPin className="text-[#00bfa5] shrink-0 mt-0.5" size={16} />
              <div>
                <p className="text-slate-500 font-medium">Location</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.author.location}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiCalendar
                className="text-[#00bfa5] shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <p className="text-slate-500 font-medium">Posted</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.postedDate}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiCalendar
                className="text-[#00bfa5] shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <p className="text-slate-500 font-medium">Deadline</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.deadline}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiDollarSign
                className="text-[#00bfa5] shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <p className="text-slate-500 font-medium">Budget</p>
                <p className="text-white font-semibold mt-0.5">
                  ${project.minBudget} - ${project.maxBudget}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiBarChart2
                className="text-[#00bfa5] shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <p className="text-slate-500 font-medium">Experience Level</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.experienceLevel}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiBriefcase
                className="text-[#00bfa5] shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <p className="text-slate-500 font-medium">Project Type</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.projectType}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <FiClock className="text-[#00bfa5] shrink-0 mt-0.5" size={16} />
              <div>
                <p className="text-slate-500 font-medium">Duration</p>
                <p className="text-white font-semibold mt-0.5">
                  {project.duration}
                </p>
              </div>
            </div>
          </div>

          {/* ৪. প্রজেক্ট ডেসক্রিপশন বক্স */}
          <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">
              Project Description
            </h3>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              {project.description?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* ৫. রিকোয়ারমেন্টস এবং স্কিল গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Requirements</h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                {project.requirements?.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <FiCheckCircle
                      className="text-[#00bfa5] shrink-0 mt-0.5"
                      size={15}
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Required */}
            <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white">
                Skills Required
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 bg-[#0b101d] text-slate-400 border border-[#162238] rounded-md hover:border-[#00bfa5]/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR PANELS ================= */}
        <div className="space-y-6">
          {/* ১. প্রজেক্ট ওভারভিউ কার্ড */}
          <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white">Project Overview</h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start space-x-3.5">
                <FiUser className="text-[#00bfa5] mt-0.5" size={16} />
                <div>
                  <p className="text-slate-500 font-medium text-xs">Budget</p>
                  <p className="text-[#00bfa5] font-bold text-sm mt-0.5">
                    ${project.minBudget} - ${project.maxBudget}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <FiCalendar className="text-[#00bfa5] mt-0.5" size={16} />
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    Application Deadline
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {project.deadline}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <FiBriefcase className="text-[#00bfa5] mt-0.5" size={16} />
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    Project Type
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {project.projectType}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <FiBarChart2 className="text-[#00bfa5] mt-0.5" size={16} />
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    Experience Level
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {project.experienceLevel}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <FiClock className="text-[#00bfa5] mt-0.5" size={16} />
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    Project Duration
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {project.duration}
                  </p>
                </div>
              </div>

              {/* ক্লায়েন্ট প্রোফাইল কার্ড */}
              <div className="pt-4 border-t border-[#111827] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={project.author.avatar}
                    alt="client avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-slate-500 font-medium text-xs">Client</p>
                    <p className="text-white font-bold text-sm truncate max-w-[130px]">
                      {project.author.name}
                    </p>
                    <p className="text-slate-500 text-[10px] mt-0.5">
                      Member since {project.author.joined}
                    </p>
                  </div>
                </div>
                <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[9px] font-bold">
                  ✓
                </span>
              </div>
            </div>

            {/* অ্যাকশন বাটনস */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-[#00bfa5] hover:bg-[#00a38c] text-[#030712] font-bold text-sm py-3 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-[#00bfa5]/10">
                <span>Apply Now</span>
                <FiArrowRight size={16} />
              </button>
              {/* <button className="w-full bg-transparent border border-[#162238] hover:border-slate-600 text-slate-300 font-semibold text-sm py-3 rounded-xl flex items-center justify-center space-x-2 transition-all">
                <FiBookmark size={15} />
                <span>Save Project</span>
              </button> */}
            </div>
          </div>

          {/* <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-white">Have a question?</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Message the client to get more details about this project.
            </p>
            <button className="w-full bg-transparent border border-[#162238] hover:border-[#00bfa5]/40 hover:text-white text-slate-400 font-semibold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-all">
              <span>Send Message</span>
              <FiSend size={13} />
            </button>
          </div> */}
        </div>
      </div>

      {/* ================= BOTTOM RELATED PROJECTS ================= */}
      {relatedLoading ? (
        <RelatedProjectsSkeleton />
      ) : (
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-[#111827] space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Related Projects</h2>
            <Link
              href="/projects"
              className="flex items-center space-x-1.5 text-xs text-slate-500 hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProjects.map(rel => (
              <div
                key={rel._id}
                className="bg-[#090d16] border border-[#111827] rounded-2xl overflow-hidden flex flex-col justify-between group h-full"
              >
                <div className="relative h-36 w-full bg-slate-900 overflow-hidden shrink-0">
                  <img
                    src={rel.thumbnail}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 bg-[#0b101d]/80 text-[#00bfa5] border border-[#00bfa5]/20 rounded-md backdrop-blur-sm">
                    {rel.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="text-white font-bold text-xs md:text-sm line-clamp-2 leading-snug group-hover:text-[#00bfa5] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-[#00bfa5] font-extrabold text-xs mt-1.5">
                      ${rel.minBudget} - ${rel.maxBudget}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${rel._id}`}
                    className="w-full bg-[#0b101d] border border-[#162238] hover:border-[#00bfa5]/40 text-slate-400 hover:text-white font-bold text-[11px] py-2 rounded-lg flex items-center justify-center space-x-1 transition-all"
                  >
                    <span>View Details</span>
                    <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
