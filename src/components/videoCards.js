import React from "react";

const VideoCards = ({ info }) => {

  if (!info) return null;

  const { snippet, statistics } = info;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />

      <ul>
        <li className="font-bold">
          {snippet?.title}
        </li>

        <li>
          {snippet?.channelTitle}
        </li>

        <li>
          {statistics?.viewCount}
        </li>
      </ul>

    </div>
  );
};

export default VideoCards;