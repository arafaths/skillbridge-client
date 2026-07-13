'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  LogIn,
  UserCheck,
} from 'lucide-react';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Interactive Controlled Form Fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Main Email-Password Sign In Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Authenticating credentials...');

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: '/', // লগইন সফল হলে ড্যাশবোর্ডে রিডাইরেক্ট হবে
      });

      if (error) {
        toast.error(error.message || 'Invalid email or password.', {
          id: toastId,
        });
      } else {
        toast.success('Welcome back to SkillBridge!', { id: toastId });
      }
    } catch (err) {
      toast.error('An unexpected system error occurred.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Demo Account Quick Login Handler
  const handleDemoLogin = async () => {
    setLoading(true);
    const toastId = toast.loading('Accessing sandbox environment...');

    try {
      const { data, error } = await authClient.signIn.email({
        email: 'arafaths@my.com',
        password: 'Pa$$w0rd!',
        callbackURL: '/',
      });

      if (error) {
        toast.error('Demo account credentials expired.', { id: toastId });
      } else {
        toast.success('Logged in successfully via Demo Account!', {
          id: toastId,
        });
      }
    } catch (err) {
      toast.error('Failed to resolve server route.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white flex items-center justify-center px-4 py-12 select-none font-sans relative overflow-hidden">
      {/* Background Subtle Gradient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Panel Card Box Container */}
      <div className="max-w-xl w-full bg-[#060c16] border border-[#0f172a] rounded-[2rem] p-8 md:p-10 space-y-8 shadow-2xl relative z-10">
        {/* Top Feature Custom Tag Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-[#060c16] border border-[#1e293b]/50 px-4 py-1.5 rounded-full">
            <LogIn size={14} className="text-[#00bfa5]" />
            <span className="text-[11px] text-[#00bfa5] font-semibold tracking-wider">
              Welcome Back
            </span>
          </div>
        </div>

        {/* Heading Brand Stack */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Sign In to SkillBridge
          </h1>
          <p className="text-[#64748b] text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-normal">
            Login to access your dashboard and manage your freelance projects.
          </p>
        </div>

        {/* Primary Interactive Credentials Submission Fieldset */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input Field Wrap */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail size={16} className="absolute left-4 text-[#334155]" />
              <input
                type="email"
                required
                disabled={loading}
                placeholder="Enter your email address"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Password Input Field Wrap */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock size={16} className="absolute left-4 text-[#334155]" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                disabled={loading}
                placeholder="Enter your password"
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-12 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-[#334155] hover:text-white transition-colors duration-150"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>


          {/* Email Core Sign In CTA Action Controller */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00bfa5] hover:bg-[#00a68f] text-black font-bold py-3.5 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg shadow-[#00bfa5]/5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{loading ? 'Processing...' : 'Sign In'}</span>
            {!loading && <ArrowRight size={15} />}
          </button>
        </form>

        {/* Secondary Alternative Dynamic Action Controls */}
        <div className="space-y-3.5">
          {/* Preset Bypassed Demo Log In Engine */}
          <button
            type="button"
            disabled={loading}
            onClick={handleDemoLogin}
            className="w-full bg-transparent hover:bg-white/5 border border-[#1e293b] text-white font-medium py-3 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2.5 transition-all duration-200 disabled:opacity-50"
          >
            <UserCheck size={16} className="text-[#64748b]" />
            <span className="tracking-wide">Use Demo Account</span>
          </button>
        </div>

        {/* Visual Partition Segment Separator */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-[#1e293b]/40" />
          <span className="relative z-10 bg-[#060c16] px-4 text-[10px] md:text-xs font-bold text-[#334155] tracking-widest uppercase">
            OR
          </span>
        </div>

        {/* Outer Application State Navigation Interlink */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-[#64748b] font-medium">
            Don’t have an account?{' '}
            <Link
              href="/register"
              className="text-[#00bfa5] hover:underline font-semibold ml-1"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
