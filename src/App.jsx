import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import ProjectScreen from './ProjectScreen';


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/project" element={<ProjectScreen />} />
      </Routes>
    </div>
  );
}

export default App;
