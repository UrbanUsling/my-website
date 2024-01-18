import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import ImageLoop from './ImageLoop';
import CardComponentWrapper from './CardComponent';
import FilmListPage from './FilmListPage';
import FilmInfoPage from './FilmInfoPage';

const Home: React.FC = () => {
  

  return (
    <div>
      <Router>
        <h1 className="headers">Filmvärldens affär och fansite</h1>
        <NavbarComponent />
        <Routes>
          <Route
            path="/filmlist"
            element={
              <>
                <ImageLoop />
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
