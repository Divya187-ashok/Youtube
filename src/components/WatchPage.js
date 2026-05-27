import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closedMenu } from "./appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = ({ info }) => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedMenu());
  }, []);
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

    </div>
  );
};

export default WatchPage;
