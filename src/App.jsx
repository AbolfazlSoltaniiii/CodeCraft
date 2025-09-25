import React, { useEffect, useReducer } from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import Preview from "./components/editor/preview/Preview.jsx";
import SmallScreenEditor from "./components/editor/SmallScreenEditor.jsx";
import MediumScreenEditor from "./components/editor/MediumScreenEditor.jsx";

let projectInfo = localStorage.getItem("ProjectInfo");
projectInfo = JSON.parse(projectInfo);

const initialState = {
  title: projectInfo?.title || "Untitled",
  html: projectInfo?.html || "",
  css: projectInfo?.css || "",
  js: projectInfo?.js || "",
  code: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateCode": {
      return {
        ...state,
        code: action.payload
      };
    }

    case "updateField": {
      return {
        ...state,
        [action.payload.field]: action.payload.data
      };
    }

    case "resetFields": {
      localStorage.removeItem("ProjectInfo");

      return {
        ...state,
        title: "Untitled",
        html: "",
        css: "",
        js: ""
      };
    }
  }
};

const App = () => {
  const [{title, html, css, js, code}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: "updateCode",
        payload: `${html} <style>${css}</style> <script>${js};</script>`
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const onSaveClick = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Project Title is required");
      return false;
    }

    localStorage.setItem("ProjectInfo", JSON.stringify({
      title,
      html,
      css,
      js
    }));
  };

  const onDiscardClick = (e) => {
    e.preventDefault();

    dispatch({type: "resetFields"});
  };

  return (
    <div className="flex flex-col h-screen">
      <Navigation title={title} dispatch={dispatch} onSaveClick={onSaveClick} onDiscardClick={onDiscardClick} />

      <SmallScreenEditor dispatch={dispatch} html={html} css={css} js={js} />
      <MediumScreenEditor dispatch={dispatch} html={html} css={css} js={js} />

      <Preview code={code} />
    </div>
  );
};

export default App;