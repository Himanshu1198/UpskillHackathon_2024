// import { useState } from 'react'
import './App.css'
import { GlobeDemo } from './GlobeSection'
import Navbar from './Navbar'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Section1 from './Section1'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import Navbar from './Navbar'
// import Section1 from './Section1'

import { TypewriterEffectSmoothDemo } from './Typewriter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<>
        <Navbar/>
        <div className="welcome-container">
        <Section1/>
        <GlobeDemo/>
        </div>
        <Panel1 />
        <Panel2 />
    </>}/>
     <Route path='/login' element={<><Login /></>}></Route>
     <Route path='/signup' element={<><Signup /></>}></Route>
     <Route path='/contact' element={<><Panel1 /></>}></Route>
      </Routes>
      <ToastContainer />
    </Router>    
  )
}

export default App
