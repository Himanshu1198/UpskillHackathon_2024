import './App.css'
import Footer from './Footer'
import { GlobeDemo } from './GlobeSection'
import Navbar from './Navbar'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Section1 from './Section1'
import { TypewriterEffectSmoothDemo } from './Typewriter'

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="welcome-container">
        <Section1 />
      </div>

      <div className="panel-container flex flex-col">
        <GlobeDemo />
        <div className="panel flex flex-col">
          <Panel1 />
        </div>
      </div>

      <Panel2 />
      <Footer/>


      
    </>
  )
}

export default LandingPage;
