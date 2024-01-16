import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import ImageLoop from './ImageLoop';
import CardComponentWrapper from './CardComponent';
import FilmListPage from './FilmListPage';
import FilmInfoPage from './FilmInfoPage';

const Home: React.FC = () => {
  interface Film {
    id: number;
    title: string;
    actors: string;
    releaseYear: number;
    price: number;
    copies: number;
  }

  const [filmsData, setFilmsData] = useState<Film[]>([]);

  return (
    <div>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route
            path="/filmlist"
            element={<FilmListPage films={filmsData} />}
          />
          <Route path="/film/:id" element={<FilmInfoPage />} />
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
