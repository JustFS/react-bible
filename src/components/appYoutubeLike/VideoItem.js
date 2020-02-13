import React from "react";
import { Paper } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <div className="thumbnail-card">
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <b>{video.snippet.title}</b>
      </Paper>
    </div>
  );
}