import React from "react";
import Button from "./button";

const ButtonList = () => {

  const list = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Sports",
    "Live",
    "Cricket",
    "Coding",
    "React",
    "Podcasts"
  ];

  return (
    <div className="flex gap-3 p-2 overflow-x-auto">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;