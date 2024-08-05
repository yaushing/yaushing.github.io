import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import ProjectsScreen from './ProjectsScreen';


const App = () => {
  return (
    <Router>
      <div>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
