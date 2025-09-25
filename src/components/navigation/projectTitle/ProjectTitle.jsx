import React, { useEffect, useRef, useState } from "react";

const ProjectTitle = ({title, dispatch}) => {
  const [isEditing, setIsEditing] = useState(false);

  const titleRef = useRef(null);

  const onTitleBlur = (e) => {
    const newTitle = e.target.textContent.trim();

    dispatch({
      type: "updateField", payload: {
        field: "title",
        data: newTitle !== "" ? newTitle : "Untitled"
      }
    });

    setIsEditing(false);
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    setIsEditing(false);
  };

  const onEditingClick = () => {
    setIsEditing(!isEditing);
  };

  const onTitleInput = (e) => {
    const text = e.target.textContent.trim();

    if (text.length >= 10) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (!isEditing) return;

    const titleElement = titleRef.current;

    dispatch({
      type: "updateField", payload: {
        field: "title",
        data: ""
      }
    });
    titleElement.focus();
  }, [isEditing]);

  return (
    <div className="flex items-center justify-center text-white text-2xl">
      <span
        className="mx-1 outline-none"
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        onBlur={onTitleBlur}
        onKeyDown={onKeyDown}
        ref={titleRef}
        onInput={onTitleInput}
      >
        {title}
      </span>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="size-5 cursor-pointer" onClick={onEditingClick}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
      </svg>
    </div>
  );
};

export default ProjectTitle;