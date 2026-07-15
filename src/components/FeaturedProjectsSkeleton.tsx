'use client';

import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

export default function FeaturedProjectsSkeleton() {
  const skeletonCards = Array(4).fill(null);

  return (
    <section className="bg-[#060b13] text-white py-16 px-4 md:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* --- TOP TITLE AREA SKELETON --- */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-4 animate-pulse">
          <div className="inline-flex items-center space-x-2 bg-[#0a1120] border border-[#131f35]/60 px-4 py-2 rounded-full w-40 h-8">
            <FiBriefcase className="text-[#0d1527] w-3.5 h-3.5" />
            <div className="h-2 bg-[#0d1527] rounded w-full"></div>
          </div>

          <div className="h-8 bg-[#0a1120] rounded-lg w-3/4 md:w-full mt-2"></div>

          <div className="space-y-2 w-full flex flex-col items-center pt-2">
            <div className="h-3 bg-[#0a1120] rounded w-5/6"></div>
            <div className="h-3 bg-[#0a1120] rounded w-2/3"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-[#0a1120] border border-[#131f35]/60 rounded-2xl overflow-hidden flex flex-col justify-between h-[440px] p-0"
            >
              <div className="relative h-44 w-full bg-[#070d19] shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-[#0d1527] animate-pulse"></div>
                <div className="absolute inset-x-3 top-3 flex items-center justify-between z-10">
                  <div className="w-20 h-6 bg-[#060b13]/80 border border-[#131f35]/40 rounded-md"></div>
                  <div className="w-12 h-6 bg-[#060b13]/80 border border-[#131f35]/40 rounded-md"></div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0a1120]">
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-[#0d1527] rounded-md w-11/12"></div>
                  <div className="h-4 bg-[#0d1527] rounded-md w-2/3"></div>

                  <div className="space-y-2 pt-2">
                    <div className="h-3 bg-[#0d1527]/70 rounded-md w-full"></div>
                    <div className="h-3 bg-[#0d1527]/70 rounded-md w-5/6"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 pb-5 border-b border-[#131f35]/40 mb-2 animate-pulse">
                    <div className="h-3 bg-[#0d1527]/60 rounded-md w-full"></div>
                    <div className="h-3 bg-[#0d1527]/60 rounded-md w-full"></div>
                    <div className="h-3 bg-[#0d1527]/60 rounded-md w-full"></div>
                    <div className="h-3 bg-[#0d1527]/60 rounded-md w-full"></div>
                  </div>

                  <div className="w-full h-9 bg-[#0d1527] border border-[#131f35]/40 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 animate-pulse">
          <div className="w-44 h-11 bg-[#0a1120] border border-[#1e293b]/60 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
