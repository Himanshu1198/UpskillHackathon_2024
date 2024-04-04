import Navbar from "@/Navbar";
import Mimg from "@/assets/m1.jpg";

export default function HeroSection(){
    return(
        <>
        
        <div className="mt-[2rem]">
            <div className="flex pt-32 mt-[-50px] text-left ml-6 bg-white">
                <div className="w-1/2 flex flex-col justify-center items-start p-8">
                    <h1 className="text-5xl font-bold mb-4">Unlock Guidance</h1>
                    <p className="text-lg text-gray-600">Book a session with unstoppable mentors across domains & work together to build your career!</p>
                    <div className="hero-buttons flex">
                    <button className="px-8 py-2 mt-6 font-medium rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
  Find a mentor
</button>
<button className="dusra-button border-blue-800 underline ml-6 px-8 py-2 mt-6 font-medium rounded-full border-4  bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Be a Mentor
</button>

                    </div>
                </div>
                <div className="w-1/2">
                    <img src={Mimg} alt="Mentorship" className="w-full h-auto" />
                </div>
            </div>
            </div>
        </>
    )
}
