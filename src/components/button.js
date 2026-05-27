import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 px-4 py-2 rounded-lg font-medium whitespace-nowrap hover:bg-gray-300">
      {name}
    </button>
  );
};

export default Button;