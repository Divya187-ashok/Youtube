import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    return (
        <div className="shadow-lg w-48 h-screen p-4">
            <h3 className="font-bold mb-2">Subscription</h3>
            <ul className="mb-6">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>

            <h3 className="font-bold mb-2">Watch Later</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
            </ul>
        </div>
    )
}

export default Sidebar;