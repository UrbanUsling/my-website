import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import YouTube from 'react-youtube';

interface MovieClipProps {
  videoId: string | null; // Allow for null value
}

const MovieClip: React.FC<MovieClipProps> = ({ videoId }) => {
  useEffect(() => {
    if (videoId) {
      const root = createRoot(document.getElementById('clip')!);

      // Options for the YouTube component
      const options = {
        height: '310', // Set the height as needed
        width: '550', // Set the width as needed
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };

      // Render the MovieClip component with the retrieved videoId and options
      root.render(<YouTube videoId={videoId} opts={options} />);
    }
  }, [videoId]);

  return null;
};

export default MovieClip;

