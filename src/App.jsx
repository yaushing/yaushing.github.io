import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import LandingScreen from './LandingScreen';
import ProjectsScreen from './ProjectsScreen';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
