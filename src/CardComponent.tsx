// CardComponent.tsx
import React, { useEffect, useState } from 'react';

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const CardComponent: React.FC<CardProps> = ({ title, text, imgSrc }) => {
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

const CardComponentWrapper: React.FC = () => {
  const [cardData, setCardData] = useState<CardProps[]>([]);

  useEffect(() => {
    // Fetch data dynamically (adjust the URL accordingly)
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
        const cards = [];
        for (let i = 0; i < numCards; i++) {
          const title = nonEmptyLines[i * linesPerCard] || '';
          const text = nonEmptyLines[i * linesPerCard + 1] || '';
          const imgSrc = nonEmptyLines[i * linesPerCard + 2] || '';

          cards.push({ title, text, imgSrc });
        }

        console.log('Card data:', cards);
        setCardData(cards);
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <>
    <div className ="container">
      <h3 className="headers" >Toppval av filmer och artister enlig våra användare</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center">
          {cardData.map((card, index) => (
          <CardComponent key={index} {...card} />
          ))}
        </div>
    </div>
    </>
  );
};

export default CardComponentWrapper;
