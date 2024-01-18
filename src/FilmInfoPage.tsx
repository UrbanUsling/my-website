import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieClip from './MovieClip';

interface Film {
  id: number;
  title: string;
  actors: string;
  storyline?: string;
  releaseYear: number;
  price: number;
  copies: number;
  link?: string;
}

interface FilmInfoPageProps {
  filmsData: Film[];
}

const FilmInfoPage: React.FC<FilmInfoPageProps> = ({ filmsData }) => {
  const { id } = useParams<{ id: string }>();
  const filmData = filmsData.find(film => film.id.toString() === id);

  if (!filmData) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <div className="card mb-3" style={{ maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`/static/images/film${filmData.id}.jpg`}
              className="img-fluid rounded-start"
              alt={`Film ${filmData.id}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{filmData.title}</h5>
              <p className="card-text">
                <ul>
                  <li>{filmData.actors}</li>
                  {filmData.storyline && <li>{filmData.storyline}</li>}
                  <li>{filmData.releaseYear}</li>
                </ul>
                {filmData.link && <div id="clip" data-video-id={filmData.link}></div>}
              </p>
              <div className="d-flex">
                <div className="col-2 btn-purchase">
                  {filmData.copies > 0 ? (
                    <a href="#" type="button" className="btn btn-primary">
                      Köp
                    </a>
                  ) : (
                    <span className="text-muted">Tillfälligt slut</span>
                  )}
                </div>
                <div className="col-2 ms-2">
                  {/* Replace <a> with Link */}
                  <Link to="/filmlist" className="btn btn-primary" type="button">
                    Tillbaka
                  </Link>
                </div>
              </div>
              {/* Conditionally render MovieClip based on the presence of a YouTube link */}
              {filmData.link && <MovieClip videoId={filmData.link || null} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInfoPage;
