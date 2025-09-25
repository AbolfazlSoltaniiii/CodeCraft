import React, { useState } from "react";
import LanguageTab from "../languageTab/LanguageTab.jsx";
import CodeEditor from "./codeEditor/CodeEditor.jsx";

const SmallScreenEditor = ({dispatch, html, css, js}) => {
  const [activeLanguageTab, setActiveLanguageTab] = useState("html");

  return (
    <>
      <div className="flex md:hidden">
        <LanguageTab
          language="html"
          activeLanguageTab={activeLanguageTab}
          onClick={() => setActiveLanguageTab("html")}
        />
        <LanguageTab
          language="css"
          activeLanguageTab={activeLanguageTab}
          onClick={() => setActiveLanguageTab("css")}
        />
        <LanguageTab
          language="javascript"
          activeLanguageTab={activeLanguageTab}
          onClick={() => setActiveLanguageTab("javascript")}
        />
      </div>

      <span className="h-full md:hidden">
      {
        activeLanguageTab === "html"
          ?
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
          :
          activeLanguageTab === "css"
            ?
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
            :
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
      }
      </span>
    </>
  );
};

export default SmallScreenEditor;