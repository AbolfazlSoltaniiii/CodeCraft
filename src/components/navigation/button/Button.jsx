import React from "react";

const Button = ({onClick, children}) => {
  return (
    <button
      className="flex items-center justify-center bg-green-400 p-4 rounded-md cursor-pointer hover:text-white hover:bg-green-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;