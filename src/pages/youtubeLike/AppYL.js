import React, { useState } from "react";
import './AppYL.scss'

import { SearchBar, VideoList, VideoDetail } from "../../components/appYoutubeLike/index";

import youtube from "./Api/youtube";

export default ({AppYL}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
        <div className="AppYL">
          <div>
            <SearchBar onSubmit={handleSubmit} />
          </div>
          <div>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="video-list">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: 'AIzaSyBTNHeB7lj_pOwlzn5ArIyoyHHcuOZ8A0Y',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}