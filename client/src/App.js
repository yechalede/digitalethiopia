import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import DashBoard from './screens/DashBoard';
import LandingPage from './screens/LandingPage';
function App() {
  
  return (
    <Router>
      <LandingPage/> 
    </Router>
  );
}

export default App;
