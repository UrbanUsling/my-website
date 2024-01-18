import React from 'react';
import YouTube from 'react-youtube';

interface MovieClipProps {}

const MovieClip: React.FC<MovieClipProps> = () => {
  // Fixed YouTube video ID
  const videoId = 'WuC2r8OMt0c';

  // Options for the YouTube component
  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={options} />
    </div>
  );
};

export default MovieClip;
