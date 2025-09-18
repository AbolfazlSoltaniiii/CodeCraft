import React from "react";
import ProjectTitle from "./projectTitle/ProjectTitle.jsx";
import SaveButton from "./button/SaveButton.jsx";

const Navigation = () => {
  return (
    <nav className="flex justify-between h-16 p-2 bg-gray-950">
      <ProjectTitle />
      <SaveButton />
    </nav>
  );
};

export default Navigation;