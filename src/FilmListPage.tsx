import React from 'react';
import { Link } from 'react-router-dom';

interface Film {
  id: number;
  title: string;
  actors: string;
  releaseYear: number;
  price: number;
  copies: number;
}

interface FilmListPageProps {
  films: Film[];
}

const FilmListPage: React.FC<FilmListPageProps> = ({ films }) => {
  // Access films data from the hidden element
  const filmsData: Film[] = JSON.parse((document.getElementById('films-data') as HTMLDivElement)?.innerText || '[]');

  return (
    <div className="container">
      <h1>Filmer</h1>
      {/* Render films based on the fetched data */}
      {filmsData.map(film => (
        <div key={film.id} className="row container">
          <div className="col-1">
            <img
              src={`/static/images/film${film.id}.jpg`}
              alt={`Film ${film.id}`}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-5">
            <h5 style={{ marginBottom: '4px', paddingBottom: '4px', paddingTop: '20px' }}>{film.title}</h5>
            <div>
              <b>Skådespelare:</b> {film.actors}
            </div>
            <div className="border-bottom" style={{ marginBottom: '4px', paddingBottom: '40px' }}>
              <b>Utgivningsår:</b> {film.releaseYear}
            </div>
          </div>
          <div className="col-2">
            <b>Pris(Kr): </b>{film.price}
          </div>
          <div className="col-1">
          <Link to={`/film/${film.id}`} className="btn btn-primary">
              Info
            </Link>
          </div>
          <div className="col-1">
            {film.copies > 0 ? (
              <a href="#" type="button" className="btn btn-primary">
                Köp
              </a>
            ) : (
              <span className="text-muted">Tillfälligt slut</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmListPage;
