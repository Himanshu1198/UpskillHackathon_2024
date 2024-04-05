import React from "react";

export default function Panel2(){
    return(
        <>
        <div className="bg-violet-700 text-gray-300 stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title text-gray-400">Endorsements</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc text-gray-400">↗︎ 300 (18%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title text-gray-400">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc text-gray-400">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title text-gray-400">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc text-gray-400">↘︎ 90 (14%)</div>
  </div>
</div>
        </>
    )
}