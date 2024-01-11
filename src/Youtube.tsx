import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import YouTube from 'react-youtube';

interface MovieClipProps {
  videoId: string | null; // Allow for null value
}

interface MovieClipState {}

class MovieClip extends Component<MovieClipProps, MovieClipState> {
  _onReady(event: any) {
    event.target.pauseVideo();
  }

  render() {
    const { videoId } = this.props;

    if (!videoId) {
      console.error('Video ID not found or is null.');
      return null; // Don't render anything if videoId is null or undefined
    }

    const options = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        videoId={videoId}
        opts={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }
}

const root = createRoot(document.getElementById('clip')!);

// Retrieve the videoId from the data attribute
const divElement = document.getElementById('clip');
const videoId = divElement?.getAttribute('data-video-id');

// Render the MovieClip component with the retrieved videoId (even if it's null)
root.render(<MovieClip videoId={videoId || null} />);
