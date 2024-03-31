// import { useState } from 'react'
import './App.css'
import { GlobeDemo } from './GlobeSection'
import Navbar from './Navbar'
import Section1 from './Section1'
// import Navbar from './Navbar'
// import Section1 from './Section1'
import { TypewriterEffectSmoothDemo } from './Typewriter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/* <Navbar/>
        <Section1/> */}
        <Navbar/>

        <div className="welcome-container">
        <Section1/>
        {/* <TypewriterEffectSmoothDemo/> */}
        </div>

        <GlobeDemo/>
        
    </>
  )
}

export default App
