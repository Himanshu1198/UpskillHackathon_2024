// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GlobeDemo } from './GlobeSection';
import Navbar from './Navbar';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Section1 from './Section1';
import { TypewriterEffectSmoothDemo } from './Typewriter';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="welcome-container"><Section1 /></div>} />
          <Route path="/globe" element={<GlobeDemo />} />
          <Route path="/panel1" element={<Panel1 />} />
          <Route path="/panel2" element={<Panel2 />} />
          {/* Add more routes as needed */}
          <Route path="/typewriter" element={<TypewriterEffectSmoothDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
