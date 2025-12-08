import React from 'react';
import { Menu, Heart, Share2, Flag, Battery, Wifi, Signal } from 'lucide-react';
export function PhoneMockup() {
  return <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[3px] h-[32px] absolute -left-[17px] top-[72px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[46px] absolute -left-[17px] top-[124px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[46px] absolute -left-[17px] top-[178px] bg-gray-800 rounded-l-lg"></div>
      <div className="w-[3px] h-[64px] absolute -right-[17px] top-[142px] bg-gray-800 rounded-r-lg"></div>

      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>

      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col relative">
        {/* Status Bar */}
        <div className="h-6 bg-white flex justify-between items-center px-4 text-[10px] font-medium text-black pt-2">
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="w-1 h-1 rounded-full border border-black"></div>
            </div>
            <span>QPoll</span>
            <Wifi className="w-3 h-3 ml-1" />
          </div>
          <span>9:41 AM</span>
          <div className="flex items-center gap-1">
            <span>100%</span>
            <Battery className="w-4 h-3" />
          </div>
        </div>

        {/* App Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
          <span className="text-[#4A90E2] font-medium">5 points</span>
          <Menu className="w-5 h-5 text-gray-600" />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-4 flex flex-col items-center justify-center">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-[240px] aspect-[4/5] flex flex-col items-center text-center relative">
            <h3 className="font-serif text-xl text-gray-700 leading-tight mt-4 mb-8">
              Which Trinidad and Tobago politician would you let watch your
              children?
            </h3>

            <button className="bg-[#4A90E2] text-white rounded-full px-8 py-2 text-sm font-medium shadow-md hover:bg-[#357ABD] transition-colors mt-auto mb-8">
              respond
            </button>

            <div className="absolute bottom-4 text-[10px] text-gray-400 w-full text-center">
              4 votes · 23 hours left
            </div>
          </div>
        </div>

        {/* App Footer */}
        <div className="h-12 border-t border-gray-100 flex justify-between items-center px-6 bg-white">
          <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
            <div className="w-2 h-[1px] bg-gray-400 rotate-45"></div>
          </div>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <Share2 className="w-4 h-4 text-gray-400" />
          <Flag className="w-4 h-4 text-gray-400" />
        </div>

        {/* Home Indicator Area (Simulated for older iPhone style) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center opacity-0">
          {/* Hidden home button for layout spacing if needed, but using modern rounded corners */}
        </div>
      </div>
    </div>;
}