'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiMenu,
  FiX,
  FiBell,
  FiPlus,
  FiUser,
  FiBriefcase,
  FiMail,
  FiSettings,
  FiLogOut,
  FiHome,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// User Data Type Definition
interface UserProfile {
  name: string;
  role: string;
  avatar: string;
}

export default function Navbar() {
  // States to handle logged in user simulation and UI interactions
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Toggle to true/false to test both UI views
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] =
    useState<boolean>(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Explore Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Mock Profile Info
  const user: UserProfile = {
    name: 'Arafat H.',
    role: 'Full Stack Developer',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100', // Placeholder avatar matching layout
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#060b13] border-b border-[#0d1527] px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#00bfa5] to-[#00796b] rounded-lg flex items-center justify-center transform rotate-45 shadow-lg shadow-[#00bfa5]/20">
            <span className="text-white font-black text-xl -rotate-45">S</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight tracking-wide">
              SkillBridge
            </h1>
            <p className="text-[#64748b] text-[10px] hidden md:block">
              Connect Skills with Opportunities
            </p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map(item => {
            // 3. Current URL-er sathe match kore active state nirnoy
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 font-medium ${
                  isActive
                    ? 'text-[#00bfa5]'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {item.name}

                {/* 4. Active item-er niche smooth sliding indicator */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00bfa5]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            className="text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Search"
          >
            <FiSearch size={20} />
          </button>

          {!isLoggedIn ? (
            /* Logged Out Buttons */
            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link
                href={'/login'}
                className="text-[#94a3b8] hover:text-white px-5 py-2 rounded-md border border-[#1e293b] hover:bg-[#0f172a] transition-all"
              >
                Login
              </Link>
              <Link
                href={'/register'}
                className="bg-[#00bfa5] text-[#060b13] px-5 py-2 rounded-md font-semibold hover:bg-[#00a38c] transition-all shadow-md shadow-[#00bfa5]/20"
              >
                Register
              </Link>
            </div>
          ) : (
            /* Logged In Buttons & Profile Dropdown */
            <div className="flex items-center space-x-4 relative">
              <button className="bg-[#00bfa5]/10 text-[#00bfa5] border border-[#00bfa5]/20 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#00bfa5]/20 transition-all font-medium text-sm">
                <FiPlus size={16} />
                <span>Add Project</span>
              </button>

              {/* User Avatar & Dropdown */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border-2 border-[#00bfa5] cursor-pointer object-cover"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                />

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-56 bg-[#0a1120] border border-[#1e293b] rounded-xl p-2 shadow-2xl z-50 text-sm text-[#94a3b8]"
                    >
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#131f35] rounded-lg hover:text-white transition-all"
                      >
                        <FiUser size={16} /> <span>My Profile</span>
                      </button>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#131f35] rounded-lg hover:text-white transition-all"
                      >
                        <FiBriefcase size={16} /> <span>My Projects</span>
                      </button>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#131f35] rounded-lg hover:text-white transition-all"
                      >
                        <FiMail size={16} /> <span>Messages</span>
                      </button>
                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#131f35] rounded-lg hover:text-white transition-all"
                      >
                        <FiSettings size={16} /> <span>Settings</span>
                      </button>
                      <div className="border-t border-[#1e293b] my-1"></div>
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          setIsLoggedIn(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                      >
                        <FiLogOut size={16} /> <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE VIEW TOGGLES */}
        <div className="md:hidden flex items-center space-x-3">
          {isLoggedIn && (
            <>
              {/* Mini Quick Add */}
              <button
                className="bg-[#00bfa5] text-[#060b13] p-1.5 rounded-md"
                aria-label="Add project fast"
              >
                <FiPlus size={18} />
              </button>

              {/* Small Avatar to trigger full mobile profile panel */}
              <img
                src={user.avatar}
                alt="Profile"
                className="w-7 h-7 rounded-full border border-[#00bfa5] object-cover"
                onClick={() => {
                  setIsMobileProfileOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              />
            </>
          )}

          {/* Menu Icon (Burger/X) */}
          <button
            className="text-white p-1"
            onClick={() => {
              if (isLoggedIn && isMobileProfileOpen) {
                setIsMobileProfileOpen(false);
              } else {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }
            }}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE FULL SCREEN OVERLAYS (Framer Motion) --- */}

      {/* 1. Mobile Main Menu Overlay (Logged Out/Navigation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-[#0a1120] border-l border-[#1e293b] p-6 z-50 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-semibold text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#94a3b8]"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="flex flex-col space-y-5 text-base font-medium">
                <Link
                  href={'/'}
                  className="flex items-center space-x-3 text-[#00bfa5]"
                >
                  <FiHome size={18} /> <span>Home</span>
                </Link>
                <Link
                  href={'/projects'}
                  className="flex items-center space-x-3 text-[#94a3b8] hover:text-white"
                >
                  <FiBriefcase size={18} /> <span>Explore Projects</span>
                </Link>
                <Link
                  href={'/about'}
                  className="flex items-center space-x-3 text-[#94a3b8] hover:text-white"
                >
                  <FiUser size={18} /> <span>About</span>
                </Link>
                <Link
                  href={'/contact'}
                  className="flex items-center space-x-3 text-[#94a3b8] hover:text-white"
                >
                  <FiMail size={18} /> <span>Contact</span>
                </Link>
              </div>
            </div>

            {!isLoggedIn && (
              <div className="flex flex-col space-y-3 mb-6">
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-[#94a3b8] border border-[#1e293b] py-2.5 rounded-lg text-center font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#00bfa5] text-[#060b13] py-2.5 rounded-lg text-center font-semibold"
                >
                  Register
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile User Profile Panel Overlay (Logged In Drawer) */}
      <AnimatePresence>
        {isLoggedIn && isMobileProfileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-[#0a1120] border-l border-[#1e293b] p-6 z-50 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-white">
                  Account
                </span>
                <button
                  onClick={() => setIsMobileProfileOpen(false)}
                  className="text-[#94a3b8]"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Profile Card snippet from design */}
              <div className="flex items-center space-x-3 bg-[#131f35]/50 p-3 rounded-xl border border-[#1e293b] mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#00bfa5]"
                />
                <div>
                  <h4 className="text-white text-sm font-semibold leading-none">
                    {user.name}
                  </h4>
                  <span className="text-[#64748b] text-[11px]">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col space-y-4 text-sm text-[#94a3b8] font-medium">
                <button className="flex items-center space-x-3 hover:text-white text-left">
                  <FiUser size={18} /> <span>My Profile</span>
                </button>
                <button className="flex items-center space-x-3 hover:text-white text-left">
                  <FiBriefcase size={18} /> <span>My Projects</span>
                </button>
                <button className="flex items-center space-x-3 hover:text-white text-left">
                  <FiMail size={18} /> <span>Messages</span>
                </button>
                <button className="flex items-center space-x-3 hover:text-white text-left">
                  <FiSettings size={18} /> <span>Settings</span>
                </button>
              </div>
            </div>

            <div className="mb-6 border-t border-[#1e293b] pt-4">
              <button
                onClick={() => {
                  setIsMobileProfileOpen(false);
                  setIsLoggedIn(false);
                }}
                className="w-full flex items-center space-x-3 text-rose-500 font-medium text-sm"
              >
                <FiLogOut size={18} /> <span>Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
