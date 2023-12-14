import React from 'react';
import { createRoot } from 'react-dom/client';

interface AppProps {
  title: string;
  text: string;
  imgSrc: string;
}

const App: React.FC<AppProps> = ({ title, text, imgSrc }) => {
    return (
      <div className="col">
        <div className="card custom-card mx-auto">
          <img src={imgSrc} className="card-img-top passa" alt="Card" />
          <div className="card-body custom-card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    );
  };

  document.querySelectorAll('[id^="root"]').forEach((rootContainer) => {
    const title = rootContainer.getAttribute('data-title') || '';
    const text = rootContainer.getAttribute('data-text') || '';
    const imgSrc = rootContainer.getAttribute('data-img-src') || '';
  
    const testData = { title, text, imgSrc };
  
    createRoot(rootContainer).render(<App {...testData} />);
  });
