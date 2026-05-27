import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "./constants";
import VideoCards from "./videoCards";
import { Link } from "react-router";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async() => {
        const data = await fetch(YOUTUBE_API_KEY);
        const json = await data.json();
        setVideos(json.items)
    }
    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link key={video.id} to={"watch?v="+video.id}>
                    <VideoCards info={video}/>
                </Link>
            ))}
            
        </div>
    )
}

export default VideoContainer;