import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from './LandingScreen';
import ProjectsScreen from './ProjectsScreen';
import HobbiesScreen from './HobbiesScreen';
import AchievementsScreen from './AchievementsScreen';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/about" element={<HobbiesScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/achievements" element={<AchievementsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
