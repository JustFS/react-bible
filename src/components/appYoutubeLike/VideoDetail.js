import React from "react";

export default ({ video }) => {
  if (!video) return <div>Search a video above</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-details">
      <div>
        <iframe
          frameBorder="0"
          height="auto"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>
      <div>
        <h4>
          {video.snippet.title} - {video.snippet.channelTitle}
        </h4>
        <h5>
          {video.snippet.channelTitle}
        </h5>
      </div>
    </div>
  );
}