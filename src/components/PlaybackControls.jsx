import React from 'react';

function PlaybackControls({ isPlaying, onPlayPause, onNext, onPrev }) {
  return (
    <div className="playback-controls">
      <button onClick={onPrev}>⏮️</button>
      <button onClick={onPlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
      <button onClick={onNext}>⏭️</button>
    </div>
  );
}

export default PlaybackControls;
