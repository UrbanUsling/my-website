import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import ImageLoop from './ImageLoop';
import CardComponentWrapper from './CardComponent';
import FilmListPage from './FilmListPage';
import FilmInfoPage from './FilmInfoPage';
import MovieClip from './MovieClip';

const Home: React.FC = () => {
  

  return (
    <div>
      <Router>
        <h1 className="headers">Filmvärldens affär och fansite</h1>
        <NavbarComponent />
        <div className="d-flex justify-content-center align-items-center"><MovieClip /></div>
        
        
        <Routes>
          <Route
            path="/filmlist"
            element={
              <>
                <FilmListPage />
              </>
            }
          />
          <Route
            path="/film/:id"
            element={<FilmInfoPage />}
          />
          <Route
            path="/"
            element={
              <>
                <ImageLoop />
                <CardComponentWrapper />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
