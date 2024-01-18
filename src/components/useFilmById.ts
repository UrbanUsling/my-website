// useFilmById.ts
import { useState, useEffect } from 'react';

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

const useFilmById = (id: string) => {
  const [filmData, setFilmData] = useState<Film | null>(null);

  useEffect(() => {
    console.log('Effect triggered with id:', id);
    const fetchFilmData = async () => {
      try {
        const response = await fetch(`/filmm/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFilmData(data);
        } else {
          console.error('Film not found:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching film data:', error);
      }
    };

    fetchFilmData();
  }, [id]);

  return filmData;
};

export default useFilmById;
