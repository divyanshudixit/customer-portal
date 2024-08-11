import React, { useEffect, useState } from 'react';
import { queryArray } from '../mockCustomers';

interface ImageGridProps {}

const ImageGrid: React.FC<ImageGridProps> = () => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetchNewPhotos();
    const interval = setInterval(fetchNewPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchNewPhotos = async () => {
    try {
      const newPhotos = await fetchNewPhotosFromAPI();
      setCurrentPhotos(newPhotos);
    } catch (error) {
      console.error('Error fetching new photos:', error);
    }
  };

  return (
    <div className="image-grid">
      {currentPhotos.map((photo, index) => (
        <img key={index} src={photo} alt={`Customer photo ${index}`} />
      ))}
    </div>
  );
};

export default ImageGrid;

const fetchNewPhotosFromAPI = async (): Promise<string[]> => {
  const apiKey = process.env.REACT_APP_API_KEY;

  if (!apiKey) {
    throw new Error('API key is not defined');
  }

  const timestamp = new Date().getTime(); 
  const randomQuery = queryArray[Math.floor(Math.random() * queryArray.length)];

  const response = await fetch(`https://api.pexels.com/v1/search?query=${randomQuery}&per_page=9&timestamp=${timestamp}`, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data.photos.map((photo: any) => photo.src.medium);
};
