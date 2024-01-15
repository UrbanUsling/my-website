import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Navbar } from "./components/navbar"
import ImageLoop from './ImageLoop';

const Home: React.FC = () => {
  return (
    <div>
      {<ImageLoop />}
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/filmlist" />
        {/* Add more routes as needed */}
        </Routes>  
      </Router>
    </div>
  );
};

export default Home;