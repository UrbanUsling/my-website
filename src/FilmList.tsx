// FilmList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Film {
  id: string;
  title: string;
  actors: string;
  releaseYear: number;
  price: number;
  copies: number;
}

interface FilmListProps {
  films: Film[];
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <div className="text-center container" style={{ marginTop: '30px' }}>
      {films.map((film) => (
        <div key={film.id} className="row container">
          {/* Film details go here, use JSX similar to film_items.html */}
          {/* ... */}
          <div className="col-1">
            <Link to={`/film/${film.id}`} className="btn btn-primary">
              Info
            </Link>
          </div>
          <div className="col-1">
            {film.copies > 0 ? (
              <Link to="#" className="btn btn-primary">
                Köp
              </Link>
            ) : (
              <span className="text-muted">Tillfälligt slut</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmList;

