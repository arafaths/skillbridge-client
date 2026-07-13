'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiMenu,
  FiX,
  FiPlus,
  FiUser,
  FiBriefcase,
  FiMail,
  FiSettings,
  FiLogOut,
  FiHome,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] =
    useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  // BetterAuth Session Hook
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const getUserInitial = () => {
    if (!user?.name) return 'U';
    return user.name.trim().charAt(0).toUpperCase();
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Explore Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Sign Out Handler
  const handleSignOut = async () => {
    const toastId = toast.loading('Signing out...');

    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success('Successfully signed out!', { id: toastId });
            router.push('/login');
          },
          onError: ctx => {
            toast.error(ctx.error.message || 'Failed to sign out', {
              id: toastId,
            });
          },
        },
      });
    } catch (error) {
      toast.error('An unexpected error occurred.', { id: toastId });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#060b13] border-b border-[#0d1527] px-4 py-3 md:px-8 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
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
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map(item => {
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

                {/* Active item sliding indicator */}
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

          {!user ? (
            /* Logged Out View */
            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link
                href="/login"
                className="text-[#94a3b8] hover:text-white px-5 py-2 rounded-md border border-[#1e293b] hover:bg-[#0f172a] transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#00bfa5] text-[#060b13] px-5 py-2 rounded-md font-semibold hover:bg-[#00a38c] transition-all shadow-md shadow-[#00bfa5]/20"
              >
                Register
              </Link>
            </div>
          ) : (
            /* Logged In View */
            <div className="flex items-center space-x-4 relative">
              <button className="bg-[#00bfa5]/10 text-[#00bfa5] border border-[#00bfa5]/20 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#00bfa5]/20 transition-all font-medium text-sm">
                <FiPlus size={16} />
                <span>Add Project</span>
              </button>

              {/* User Avatar & Dropdown Controller */}
              <div className="relative">
                {user.image && !imageError ? (
                  <img
                    src={user.image}
                    alt="Profile"
                    onError={() => setImageError(true)}
                    className="w-9 h-9 rounded-full border-2 border-[#00bfa5] cursor-pointer object-cover"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                  />
                ) : (
                  <div
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="w-9 h-9 rounded-full border-2 border-[#00bfa5] bg-[#00bfa5]/10 text-[#00bfa5] font-bold text-sm flex items-center justify-center cursor-pointer hover:bg-[#00bfa5]/20 transition-all"
                  >
                    {getUserInitial()}
                  </div>
                )}

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
                          handleSignOut();
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
          {user && (
            <>
              <button
                className="bg-[#00bfa5] text-[#060b13] p-1.5 rounded-md"
                aria-label="Add project fast"
              >
                <FiPlus size={18} />
              </button>

              {user.image && !imageError ? (
                <img
                  src={user.image}
                  alt="Profile"
                  onError={() => setImageError(true)}
                  className="w-7 h-7 rounded-full border border-[#00bfa5] object-cover"
                  onClick={() => {
                    setIsMobileProfileOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                />
              ) : (
                <div
                  onClick={() => {
                    setIsMobileProfileOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-7 h-7 rounded-full border border-[#00bfa5] bg-[#00bfa5]/10 text-[#00bfa5] font-bold text-xs flex items-center justify-center cursor-pointer"
                >
                  {getUserInitial()}
                </div>
              )}
            </>
          )}

          <button
            className="text-white p-1"
            onClick={() => {
              if (user && isMobileProfileOpen) {
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

      {/* --- MOBILE FULL SCREEN OVERLAYS --- */}

      {/* 1. Mobile Navigation Overlay */}
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
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 ${pathname === '/' ? 'text-[#00bfa5]' : 'text-[#94a3b8]'}`}
                >
                  <FiHome size={18} /> <span>Home</span>
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 ${pathname === '/projects' ? 'text-[#00bfa5]' : 'text-[#94a3b8]'}`}
                >
                  <FiBriefcase size={18} /> <span>Explore Projects</span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 ${pathname === '/about' ? 'text-[#00bfa5]' : 'text-[#94a3b8]'}`}
                >
                  <FiUser size={18} /> <span>About</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 ${pathname === '/contact' ? 'text-[#00bfa5]' : 'text-[#94a3b8]'}`}
                >
                  <FiMail size={18} /> <span>Contact</span>
                </Link>
              </div>
            </div>

            {!user && (
              <div className="flex flex-col space-y-3 mb-6">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-[#94a3b8] border border-[#1e293b] py-2.5 rounded-lg text-center font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#00bfa5] text-[#060b13] py-2.5 rounded-lg text-center font-semibold"
                >
                  Register
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile User Profile Panel Overlay */}
      <AnimatePresence>
        {user && isMobileProfileOpen && (
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

              {/* Drawer Profile Heading (With Image Fallback Fix) */}
              <div className="flex items-center space-x-3 bg-[#131f35]/50 p-3 rounded-xl border border-[#1e293b] mb-6">
                {user.image && !imageError ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    onError={() => setImageError(true)}
                    className="w-10 h-10 rounded-full object-cover border border-[#00bfa5]"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border border-[#00bfa5] bg-[#00bfa5]/10 text-[#00bfa5] font-bold flex items-center justify-center">
                    {getUserInitial()}
                  </div>
                )}
                <div>
                  <h4 className="text-white text-sm font-semibold leading-none mb-1">
                    {user.name}
                  </h4>
                  <span className="text-[#64748b] text-[11px]">Freelancer</span>
                </div>
              </div>

              {/* Navigation Options */}
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
                  handleSignOut();
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
