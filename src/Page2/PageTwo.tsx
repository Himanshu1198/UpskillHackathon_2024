import React from 'react';
import SidePanel from './SidePanel';
import RightPanel from './RightPanel';

export default function PageTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <div className="w-full lg:w-2/5">
          <SidePanel />
        </div>
      </div>
      <div className="lg:col-span-3">
        <RightPanel />
      </div>
    </div>
  );
}
