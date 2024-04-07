import {Link} from 'react-router-dom'
"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Skill",
    },
    
    {
      text: "Sync",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
        <TypewriterEffectSmooth className="md:text-xl" words={words} />
      <p className="text-neutral-400 dark:text-neutral-200 text-xl sm:text-lg">
        <Link to='/login'>
        Login
        </Link>Your road to success starts from here
      </p>
      
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
