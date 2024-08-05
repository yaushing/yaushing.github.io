import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import ProjectScreen from './ProjectScreen';


const App = () => {
  return (
    <Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/project" element={<ProjectScreen />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
