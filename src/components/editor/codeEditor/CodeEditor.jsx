import React, { memo } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({language, value, onChange, onMount = () => {}}) => {
  const languageColor = {
    html: "bg-red-800",
    css: "bg-blue-800",
    javascript: "bg-yellow-600"
  };

  return (
    <div className="flex flex-col w-full">
      <div className={`${languageColor[language.toLowerCase()]} text-white text-center text-2xl font-bold p-2 tracking-widest`}>
        {language.toUpperCase()}
      </div>

      <Editor
        className="w-1/3"
        language={language}
        theme="vs-dark"
        onMount={onMount}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default memo(CodeEditor);