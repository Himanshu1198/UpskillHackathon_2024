// import { useState } from 'react'
import './App.css'
import { GlobeDemo } from './GlobeSection'
import Navbar from './Navbar'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
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
        </div>

        <GlobeDemo/>
        <Panel1/>
        <Panel2/>
        
    </>
  )
}

export default App
