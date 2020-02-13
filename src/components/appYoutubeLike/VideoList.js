import React from "react";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="thumbail-container">
      {listOfVideos}
    </div>
  );
}