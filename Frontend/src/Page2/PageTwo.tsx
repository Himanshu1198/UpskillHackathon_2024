import React from 'react';
import SidePanel from './SidePanel';
import RightPanel from './RightPanel';
import Articles from './Articles';
import Navbar2 from './Navbar2';
import Navbar from '@/Navbar';

export default function PageTwo() {
  return (
    <>
    <div>
      <Navbar />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 h-auto">
        <div className="lg:col-span-1">
          <div className="w-full lg:w-2/5">
            <SidePanel />
          </div>
        </div>
        <div className="lg:col-span-3">
          <RightPanel />
          <Articles/>
        </div>
      </div>
      </div>
    </>
  );
}