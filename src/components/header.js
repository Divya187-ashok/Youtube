import React from "react";
import { toggleMenu } from "./appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className="flex items-center p-2 shadow-lg">
      <div className="flex items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="#000000"
          className="cursor-pointer"
          onClick={() => toggleMenuHandler()}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>

        <img
          className="w-20 h-10 object-contain"
          src="http://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt="YouTube Logo"
        />
      </div>
      <div className="flex items-center justify-between w-full px-4">
        {/* Search Section */}
        <div className="flex items-center mx-80">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 px-4 py-1 rounded-l-full w-64 outline-none"
          />

          <button className="bg-gray-200 px-4 py-1 rounded-r-full hover:bg-gray-300">
           Search
          </button>
        </div>

        {/* User Icon*/}
        <div>
          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
