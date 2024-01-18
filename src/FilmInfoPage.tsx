import React from 'react';
import { Link, useParams } from 'react-router-dom';
import YouTube from 'react-youtube'; // Import YouTube component
import useFilmById from './components/useFilmById';

const FilmInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const filmData = useFilmById(id || '');

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
              <div className="card-text">
                <ul>
                  <li>{filmData.actors}</li>
                  {filmData.storyline && <li>{filmData.storyline}</li>}
                  <li>{filmData.releaseYear}</li>
                </ul>
                {filmData.link && (
                  <YouTube
                    videoId={filmData.link}
                    opts={{
                      height: '310',
                      width: '550',
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                      },
                    }}
                  />
                )}
              </div>
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
                  <Link to="/filmlist" className="btn btn-primary" type="button">
                    Tillbaka
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInfoPage;
