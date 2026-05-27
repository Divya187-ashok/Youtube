import React from "react";
import Sidebar from "./sidebar";
import ButtonList from "./buttonList";
import VideoContainer from "./videoContainer";

const MainContent = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <ButtonList />
        <VideoContainer/>
      </div>
    </div>
  );
};

export default MainContent;
