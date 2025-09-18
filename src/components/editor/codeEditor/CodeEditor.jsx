import React from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({language, onChange, onMount = () => {}}) => {
  const languageColor = {
    html: "bg-red-950",
    css: "bg-blue-950",
    javascript: "bg-yellow-900"
  };

  return (
    <div className="flex flex-col w-full">
      <div className={`${languageColor[language.toLowerCase()]} text-white text-center text-2xl font-bold p-2`}>
        {language.toUpperCase()}
      </div>

      <Editor
        className="h-80 w-1/3"
        language={language}
        theme="vs-dark"
        onMount={onMount}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;