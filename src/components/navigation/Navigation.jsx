import React from "react";
import ProjectTitle from "./projectTitle/ProjectTitle.jsx";
import SaveButton from "./button/SaveButton.jsx";

const Navigation = ({title, dispatch, onSaveClick}) => {
  return (
    <nav className="flex justify-between h-16 p-2 bg-gray-950">
      <ProjectTitle title={title} dispatch={dispatch} />
      <SaveButton onSaveClick={onSaveClick} />
    </nav>
  );
};

export default Navigation;