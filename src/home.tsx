import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import ImageLoop from './ImageLoop';
import CardComponentWrapper from './CardComponent';
import FilmListPage from './FilmListPage';
import FilmInfoPage from './FilmInfoPage';
import useFilmsData from './components/useFilmsData';

const Home: React.FC = () => {


  const filmsData = useFilmsData();


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
          <Route path="/film/:id" element={
          <>

            <FilmInfoPage filmsData={filmsData} />
          
          </>}
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
