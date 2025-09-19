import React, { useEffect, useReducer } from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import CodeEditor from "./components/editor/codeEditor/CodeEditor.jsx";
import Preview from "./components/editor/preview/Preview.jsx";

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

  return (
    <div className="flex flex-col h-screen">
      <Navigation title={title} dispatch={dispatch} onSaveClick={onSaveClick} />

      <div className="flex flex-1">
        <CodeEditor
          language="html"
          value={html}
          onChange={(value) => dispatch({
            type: "updateField", payload: {
              field: "html",
              data: value
            }
          })}
          onMount={(editor) => editor.focus()}
        />
        <CodeEditor
          language="css"
          value={css}
          onChange={(value) => dispatch({
            type: "updateField", payload: {
              field: "css",
              data: value
            }
          })}
        />
        <CodeEditor
          language="javascript"
          value={js}
          onChange={(value) => dispatch({
            type: "updateField", payload: {
              field: "js",
              data: value
            }
          })}
        />
      </div>

      <Preview code={code} />
    </div>
  );
};

export default App;