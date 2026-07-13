'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserPlus,
  Image as ImageIcon,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function RegisterPage() {
  // Password visible state hooks
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // Form State (Added imageUrl)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    imageUrl: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Dynamic Password Validations Metrics
  const hasCapital = /[A-Z]/.test(formData.password);
  const hasSmall = /[a-z]/.test(formData.password);
  const hasMinLength = formData.password.length >= 6;
  const isMatched =
    formData.password && formData.password === formData.confirmPassword;

  // Global form validity setup
  const isFormValid =
    hasCapital &&
    hasSmall &&
    hasMinLength &&
    isMatched &&
    formData.fullName &&
    formData.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setErrorMsg('');

    try {
      console.log('Registration Data Submitted:', formData);

      const { data, error } = await authClient.signUp.email({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        image: formData.imageUrl || undefined,
      });

      if (data) {
        toast.success('Account created successfully!');
        router.push('/');
      }

      if (error) {
        setErrorMsg(error.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white flex items-center justify-center px-4 py-12 select-none font-sans relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Wrapper Container */}
      <div className="max-w-xl w-full bg-[#060c16] border border-[#0f172a] rounded-[2rem] p-8 md:p-10 space-y-8 shadow-2xl relative z-10">
        {/* Top Feature Tag Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-[#060c16] border border-[#1e293b]/50 px-4 py-1.5 rounded-full">
            <UserPlus size={14} className="text-[#00bfa5]" />
            <span className="text-[11px] text-[#00bfa5] font-semibold tracking-wider">
              Create Account
            </span>
          </div>
        </div>

        {/* Heading Typography Stack */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Join SkillBridge
          </h1>
          <p className="text-[#64748b] text-xs md:text-sm max-w-sm mx-auto leading-relaxed font-normal">
            Create your account and start exploring freelance opportunities.
          </p>
        </div>

        {/* Display BetterAuth Error Messages if any */}
        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-xl text-xs font-medium text-center">
            {errorMsg}
          </div>
        )}

        {/* Primary Interactive Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input Stack */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User size={16} className="absolute left-4 text-[#334155]" />
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={e =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Email Address Input Stack */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail size={16} className="absolute left-4 text-[#334155]" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Optional Image URL Input Stack */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs text-[#64748b] font-semibold tracking-wide">
                Profile Image URL
              </label>
              <span className="text-[10px] text-[#475569] font-medium tracking-wider">
                OPTIONAL
              </span>
            </div>
            <div className="relative flex items-center">
              <ImageIcon size={16} className="absolute left-4 text-[#334155]" />
              <input
                type="url"
                placeholder="https://example.com/avatar.png"
                value={formData.imageUrl}
                onChange={e =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Password Input Stack */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock size={16} className="absolute left-4 text-[#334155]" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-12 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200"
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

          {/* Confirm Password Input Stack */}
          <div className="space-y-2">
            <label className="text-xs text-[#64748b] font-semibold tracking-wide">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <Lock size={16} className="absolute left-4 text-[#334155]" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                required
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={e =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full bg-[#040810] border border-[#1e293b] focus:border-[#00bfa5] rounded-xl pl-11 pr-12 py-3.5 text-xs md:text-sm text-white placeholder-[#334155] focus:outline-none transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 text-[#334155] hover:text-white transition-colors duration-150"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Dynamic Password Validation UI Widgets */}
          {formData.password && (
            <div className="bg-[#040810]/50 border border-[#1e293b]/40 rounded-xl p-4 space-y-2.5 transition-all duration-300">
              <p className="text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                Password Requirements
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 text-xs">
                  {hasCapital ? (
                    <CheckCircle2 size={14} className="text-[#00bfa5]" />
                  ) : (
                    <XCircle size={14} className="text-[#64748b]" />
                  )}
                  <span
                    className={
                      hasCapital
                        ? 'text-[#00bfa5] font-medium'
                        : 'text-[#475569]'
                    }
                  >
                    At least 1 Capital letter
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  {hasSmall ? (
                    <CheckCircle2 size={14} className="text-[#00bfa5]" />
                  ) : (
                    <XCircle size={14} className="text-[#64748b]" />
                  )}
                  <span
                    className={
                      hasSmall ? 'text-[#00bfa5] font-medium' : 'text-[#475569]'
                    }
                  >
                    At least 1 Small letter
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  {hasMinLength ? (
                    <CheckCircle2 size={14} className="text-[#00bfa5]" />
                  ) : (
                    <XCircle size={14} className="text-[#64748b]" />
                  )}
                  <span
                    className={
                      hasMinLength
                        ? 'text-[#00bfa5] font-medium'
                        : 'text-[#475569]'
                    }
                  >
                    Minimum 6 Characters
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  {isMatched ? (
                    <CheckCircle2 size={14} className="text-[#00bfa5]" />
                  ) : (
                    <XCircle size={14} className="text-[#64748b]" />
                  )}
                  <span
                    className={
                      isMatched
                        ? 'text-[#00bfa5] font-medium'
                        : 'text-[#475569]'
                    }
                  >
                    Passwords Match
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Form Action Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full font-bold py-3.5 rounded-xl text-xs md:text-sm flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg mt-2 ${
              isFormValid && !loading
                ? 'bg-[#00bfa5] hover:bg-[#00a68f] text-black shadow-[#00bfa5]/5 cursor-pointer'
                : 'bg-[#1e293b] text-[#475569] cursor-not-allowed border border-[#0f172a]'
            }`}
          >
            <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
            {!loading && <ArrowRight size={15} />}
          </button>
        </form>

        {/* Secondary Account Alternate Route Navigation */}
        <div className="text-center pt-2">
          <p className="text-xs md:text-sm text-[#64748b] font-medium">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-[#00bfa5] hover:underline font-semibold ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
