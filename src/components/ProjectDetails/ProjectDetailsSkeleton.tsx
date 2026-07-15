'use client';

import React from 'react';
import { FiMaximize2 } from 'react-icons/fi';

export default function ProjectDetailsSkeleton() {
  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen py-10 px-4 md:px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= LEFT CONTENT SKELETON ================= */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#111827] bg-[#090d16] aspect-[16/9] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0d1527] animate-pulse"></div>
              <button className="absolute top-4 right-4 bg-[#060b13]/60 text-slate-700 p-2.5 rounded-xl border border-slate-800/50 flex items-center space-x-1.5 backdrop-blur-md text-xs font-semibold">
                <FiMaximize2 className="text-[#111827]" size={14} />
                <div className="w-12 h-3 bg-[#111827] rounded"></div>
              </button>
            </div>

            {/* থাম্বনেইল স্ট্রিপ */}
            <div className="grid grid-cols-4 gap-4">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="aspect-[16/10] rounded-xl border-2 border-[#111827] bg-[#090d16] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#0d1527] animate-pulse"></div>
                  </div>
                ))}
            </div>
          </div>

          {/* ২. হেডার ইনফরমেশন */}
          <div className="space-y-4 animate-pulse">
            <div className="w-28 h-6 bg-[#0d1527] border border-[#111827] rounded-md"></div>
            <div className="h-8 bg-[#0d1527] rounded-lg w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3.5 bg-[#0d1527]/70 rounded-md w-full"></div>
              <div className="h-3.5 bg-[#0d1527]/70 rounded-md w-5/6"></div>
            </div>
          </div>

          {/* ৩. মেটা ডেটা ইনফো গ্রিড */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 py-6 border-y border-[#111827] animate-pulse">
            {Array(8)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <div className="w-4 h-4 bg-[#0d1527] rounded-full shrink-0 mt-0.5"></div>
                  <div className="space-y-1.5 w-full">
                    <div className="h-3 bg-[#0d1527]/50 rounded-md w-12"></div>
                    <div className="h-3.5 bg-[#0d1527] rounded-md w-20"></div>
                  </div>
                </div>
              ))}
          </div>

          {/* ৪. প্রজেক্ট ডেসক্রিপশন বক্স */}
          <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
            <div className="h-5 bg-[#0d1527] rounded-md w-36 animate-pulse"></div>
            <div className="space-y-3 animate-pulse">
              <div className="h-3.5 bg-[#0d1527]/60 rounded-md w-full"></div>
              <div className="h-3.5 bg-[#0d1527]/60 rounded-md w-11/12"></div>
              <div className="h-3.5 bg-[#0d1527]/60 rounded-md w-4/5"></div>
            </div>
          </div>

          {/* ৫. রিকোয়ারমেন্টস এবং স্কিল গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
              <div className="h-4.5 bg-[#0d1527] rounded-md w-28 animate-pulse"></div>
              <div className="space-y-3 animate-pulse">
                {Array(4)
                  .fill(null)
                  .map((_, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <div className="w-4 h-4 bg-[#0d1527] rounded-full shrink-0"></div>
                      <div className="h-3.5 bg-[#0d1527]/70 rounded-md w-40"></div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
              <div className="h-4.5 bg-[#0d1527] rounded-md w-28 animate-pulse"></div>
              <div className="flex flex-wrap gap-2 animate-pulse">
                {Array(6)
                  .fill(null)
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-7 bg-[#0b101d] border border-[#162238]/60 rounded-md"
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR SKELETON ================= */}
        <div className="space-y-6">
          {/* ওভারভিউ কার্ড */}
          <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-6">
            <div className="h-5 bg-[#0d1527] rounded-md w-32 animate-pulse"></div>

            <div className="space-y-5 animate-pulse">
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="w-4 h-4 bg-[#0d1527] rounded-full shrink-0 mt-0.5"></div>
                    <div className="space-y-1 w-full">
                      <div className="h-2.5 bg-[#0d1527]/50 rounded-md w-16"></div>
                      <div className="h-3.5 bg-[#0d1527] rounded-md w-24"></div>
                    </div>
                  </div>
                ))}

              {/* ক্লায়েন্ট প্রোফাইল */}
              <div className="pt-4 border-t border-[#111827] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#0d1527]"></div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-[#0d1527]/50 rounded-md w-8"></div>
                    <div className="h-3 bg-[#0d1527] rounded-md w-20"></div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#0d1527]"></div>
              </div>
            </div>

            {/* অ্যাকশন বাটনস */}
            <div className="space-y-3 pt-2 animate-pulse">
              <div className="w-full h-11 bg-[#0d1527] rounded-xl"></div>
              <div className="w-full h-11 bg-[#090d16] border border-[#162238]/60 rounded-xl"></div>
            </div>
          </div>

          {/* মেসেজ ক্লায়েন্ট প্যানেল */}
          <div className="bg-[#090d16] border border-[#111827] rounded-2xl p-6 space-y-4">
            <div className="h-4.5 bg-[#0d1527] rounded-md w-28 animate-pulse"></div>
            <div className="space-y-1.5 animate-pulse">
              <div className="h-3 bg-[#0d1527]/50 rounded-md w-full"></div>
              <div className="h-3 bg-[#0d1527]/50 rounded-md w-4/5"></div>
            </div>
            <div className="w-full h-11 bg-[#090d16] border border-[#162238]/60 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
