import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
    </div>
    //<HomeScreen/>
  );
}

export default App;
