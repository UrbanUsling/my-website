import React from 'react';
import { createRoot } from 'react-dom/client';

interface AppProps {
  title: string;
  text: string;
  imgSrc: string;
}

const App: React.FC<AppProps> = ({ title, text, imgSrc }) => {
    const handleCardClick = () => {
        window.location.href = `/filmlist/${encodeURIComponent(title)}`;
    };

    return (
        <div className="col">
            <div className="card custom-card mx-auto" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <img src={imgSrc} className="card-img-top passa" alt="Card" />
                <div className="card-body custom-card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

fetch('static\\textfiles\\movie_data.txt')
  .then(response => response.text())
  .then(data => {
    console.log('Fetched data:', data);

    const cardLines = data.split('\n').map(line => line.trim());

    // Filter out any empty lines
    const nonEmptyLines = cardLines.filter(line => line !== '');

    // Determine the number of lines per card
    const linesPerCard = 3;

    // Calculate the number of cards
    const numCards = Math.floor(nonEmptyLines.length / linesPerCard);

    // Generate cardData array
    const cardData = [];
    for (let i = 0; i < numCards; i++) {
      const title = nonEmptyLines[i * linesPerCard] || '';
      const text = nonEmptyLines[i * linesPerCard + 1] || '';
      const imgSrc = nonEmptyLines[i * linesPerCard + 2] || '';

      cardData.push({ title, text, imgSrc });
    }

    console.log('Card data:', cardData);

    // Render components for each card
    cardData.forEach((card, index) => {
      const rootContainer = document.getElementById(`root${index + 1}`);
      if (rootContainer) {
        console.log(`Rendering card ${index + 1}:`, card);
        createRoot(rootContainer).render(<App {...card} />);
      }
    });
  })
  .catch(error => console.error('Fetch error:', error));



