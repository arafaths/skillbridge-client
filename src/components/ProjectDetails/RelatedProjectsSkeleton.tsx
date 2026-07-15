'use client';

import React from 'react';

export default function RelatedProjectsSkeleton() {
  const skeletonCards = Array(4).fill(null);

  return (
    <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-[#111827] space-y-6 select-none">
      <div className="flex justify-between items-center animate-pulse">
        <div className="h-6 bg-[#0d1527] rounded-md w-36"></div>
        <div className="h-4 bg-[#0d1527]/50 rounded-md w-24"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="bg-[#090d16] border border-[#111827] rounded-2xl overflow-hidden flex flex-col justify-between h-[270px]"
          >
            {/* ইমেজ এবং ব্যাজ এরিয়া */}
            <div className="relative h-36 w-full bg-[#070d19] shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#0d1527] animate-pulse"></div>
              <div className="absolute top-2 left-2 w-20 h-5 bg-[#060b13]/80 border border-[#131f35]/40 rounded-md z-10"></div>
            </div>

            {/* কন্টেন্ট এবং বাটন */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#090d16]">
              <div className="space-y-2 animate-pulse">
                <div className="h-4 bg-[#0d1527] rounded-md w-11/12"></div>
                <div className="h-4 bg-[#0d1527] rounded-md w-2/3"></div>
                <div className="h-3 bg-[#0d1527]/80 rounded-md w-16 mt-1.5"></div>
              </div>
              <div className="w-full h-8 bg-[#0b101d] border border-[#162238]/60 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
