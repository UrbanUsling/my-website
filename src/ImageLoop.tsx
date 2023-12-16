import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const ImageLoop: React.FC = () => {
  const images = [
    '/static/images/hollywood1.jpg',
    '/static/images/hollywood2.jpg',
    '/static/images/hollywood3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Switch to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      style={{
        position: 'relative',
        height: '620px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            width: 'auto',
            height: '600px',
            position: 'absolute',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

const rootContainer = document.getElementById('home');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(<ImageLoop />);
} else {
  console.error('Root container not found or not a valid DOM element');
}
