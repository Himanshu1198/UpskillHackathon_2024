import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BeMentorForm from './BeMentorForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function BeMentor(){
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/BeMentorForm');
  };


    return(
        <>
        <div>
          
      <div className="mt-[2rem]">
        <div className="flex pt-32 mt-[-50px] text-left ml-6 bg-white">
          <div className="w-1/2 flex flex-col justify-center items-start p-8">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r text-transparent from-blue-400 to-blue-600 bg-clip-text">Become a Mentor</span>
              <br />
              & Empower Talent!
            </h1>
            <p className="text-lg text-gray-600">Join our community of mentors and share your expertise to empower aspiring individuals to achieve their dreams. Together, let's shape the future of tomorrow's leaders.</p>
            <div className="hero-buttons flex">
            <button onClick={handleApplyClick} className="px-8 py-2 mt-6 font-medium rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Apply Now!
              </button>
              
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://i0.wp.com/www.lifeofanarchitect.com/wp-content/uploads/2020/01/Mentorship.jpg?fit=800%2C457&ssl=1" alt="Mentorship" className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* <Route path="/BeMentorForm" element={<BeMentorForm />} /> */}



<div className="container-2">
<section  className="text-gray-600 body-font">
  <div  className="container px-5 py-24 mx-auto">
  <p className="text-2xl text-gray-800 flex items-center justify-center mb-10">Why be a Mentor?</p>

    <div  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div  className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <svg className="p-9 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill="#5b2de6" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
      </div>
      <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2  className="text-gray-900 text-lg title-font font-medium mb-2">Craft Your Personal Brand</h2>
        <p  className="leading-relaxed text-base">Let your uniqueness shine through and leave a lasting impression.</p>
       
      </div>
    </div>
    <div  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2  className="text-gray-900 text-lg title-font font-medium mb-2">Unlock the Power of Teaching</h2>
        <p  className="leading-relaxed text-base">Embrace the transformative journey of teaching, where every lesson shared becomes a stepping stone towards greater heights. </p>
        
      </div>
      <div  className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        
<svg className="p-9 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#5b2de6" d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"/></svg>      </div>
    </div>
    <div  className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div  className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <svg className="p-9 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#5b2de6" d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>
      </div>
      <div  className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2  className="text-gray-900 text-lg title-font font-medium mb-2">Guide, Inspire, and Earn Rewards</h2>
        <p  className="leading-relaxed text-base">Inspire growth, ignite curiosity, and empower others to reach their full potential.</p>
        
      </div>
    </div>
    {/* <button  className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
</div>
</div>


<div className="mentor-faq m-10 mb-12">
<div className="divider"></div>
          <div className=" mb-6">
        <div className="bg-white w-50 flex flex-col justify-around">
            <p className="text-2xl">FAQs</p>
        <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What are the approval criteria to be a mentor?
  </div>
  <div className="collapse-content ml-12 mr-12"> 
    <p className="ml-12 mr-12">Our team will go through your previous work experience, qualifications and your skills.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I conduct paid sessions?
  </div>
  <div className="collapse-content"> 
    <p className="ml-12 mr-12">Yes, mentors can conduct both, free and paid sessions, as per their choice.

</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What are the general requirements for becoming a growth mentor?

  </div>
  <div className="collapse-content"> 
    <p className="ml-12 mr-12">Relevant skills as per the mentee’s ambitions<br/>
Counseling skills including active listening and a non-judgemental approach<br/>
Sensitivity and understanding<br/>
Patience and the ability to remain calm in stressful situations</p>
  </div>
</div>
</div>
</div>
</div>
        </>
    )
}