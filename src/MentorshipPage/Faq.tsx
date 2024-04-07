export default function Faq(){
    return(
        <>
          <div className="divider"></div>
          <div className=" mb-6">
        <div className="bg-white w-50 flex flex-col justify-around">
            <p className="text-2xl">FAQs</p>
        <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What is the goal of 1:1 mentorship sessions?
  </div>
  <div className="collapse-content ml-12 mr-12"> 
    <p className="ml-12 mr-12">The platform is primarily designed to help you achieve your aspirations through 1:1 mentorship sessions by seasoned mentors in a variety of fields. The mentorship framework allows you to connect with suitable mentors to receive the right guidance and achieve your goals easily.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Who is eligible to take 1:1 mentorship sessions?
  </div>
  <div className="collapse-content"> 
    <p className="ml-12 mr-12">Whether you are a student, fresher or a working professional, these mentorship sessions can be taken up by anyone who has goals and wants to achieve them.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How does the Mentorship work?

  </div>
  <div className="collapse-content"> 
    <p className="ml-12 mr-12">Sign up as a user to browse through hundreds of qualified mentors from diverse domains. Choose a mentor which best suits your career or educational goals.</p>
  </div>
</div>
</div>
</div>
        </>
    )
}