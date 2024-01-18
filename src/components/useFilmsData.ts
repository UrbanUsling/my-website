// useFilmsData.ts
import { useState, useEffect } from 'react';
interface Film {
    id: number;
    title: string;
    actors: string;
    releaseYear: number;
    price: number;
    copies: number;
  }

const useFilmsData = () => {
  const [filmsData, setFilmsData] = useState<Film[]>([]);

  useEffect(() => {
    console.log("hämtar filmer")
    const fetchFilmsData = async () => {
      try {
        const response = await fetch('/films'); // Use the new API endpoint
        const data = await response.json();
        setFilmsData(data);
      } catch (error) {
        console.error('Error fetching films data:', error);
      }
    };

    fetchFilmsData();
  }, []); // Run only once on component mount

  return filmsData;
};

export default useFilmsData;
