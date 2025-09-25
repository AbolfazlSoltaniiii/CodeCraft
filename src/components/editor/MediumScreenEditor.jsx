import React from "react";
import CodeEditor from "./codeEditor/CodeEditor.jsx";

const MediumScreenEditor = ({dispatch, html, css, js}) => {
  return (
    <div className="hidden md:flex flex-1 flex-col md:flex-row h-screen">
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
  );
};

export default MediumScreenEditor;