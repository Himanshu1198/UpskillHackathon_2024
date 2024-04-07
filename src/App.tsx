import './App.css'
import Footer from './Footer'
import { GlobeDemo } from './GlobeSection'
import LandingPage from './LandingPage'
import BeMentor from './MentorshipPage/BeMentor/BeMentor'
// import MentorMain from './MentorshipPage/BeMentor/MentorMain'
import HeroSection from './MentorshipPage/HeroSection'
// import HeroSection from './MentorshipPage/HeroSection'
import MentorshipPage from './MentorshipPage/MentorshipPage'
import Navbar from './Navbar'
import List from './Page2/Followers'
import Followers from './Page2/Followers'
import PageTwo from './Page2/PageTwo'
import SidePanel from './Page2/SidePanel'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Section1 from './Section1'
import { TypewriterEffectSmoothDemo } from './Typewriter'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import MentorMatch from './MentorshipPage/FindMentor/MentorMatch'
import MentorMain from './MentorshipPage/BeMentor/MentorMain'
import { useEffect } from 'react'
function App() {
  // useEffect(()=>{
  //   localStorage.setItem('userData',JSON.stringify(null))
  // })
  return (
    <>
<Router>
  {/* <Navbar /> */}
  <Routes>
    <Route path='/' element={<><LandingPage /></>}/>
    <Route path='/login' element={<><Login /></>}/>
    <Route path='/signup' element={<><Signup /></>}/>
    <Route path='/mentorship' element={<MentorshipPage />}/>
    <Route path='/PageTwo' element={<PageTwo />}/>
    <Route path='/BeMentor' element={<MentorMain />}/>
    <Route path='/FindMentor' element={<MentorMatch />}/>
  </Routes>
</Router>     
    </>
  )
}
export default App
