import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from './LandingScreen';
import ProjectsSchoolScreen from './ProjectsSchoolScreen';
import ProjectsHomeScreen from './ProjectsHomeScreen';
import HobbiesScreen from './HobbiesScreen';
import AchievementsScreen from './AchievementsScreen';
import Screen404 from './Screen404';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/about" element={<HobbiesScreen />} />
          <Route path="/schoolProjects" element={<ProjectsSchoolScreen />} />
          <Route path="/homeProjects" element={<ProjectsHomeScreen />} />
          <Route path="/achievements" element={<AchievementsScreen />} />
          <Route path="/*" element={<Screen404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
