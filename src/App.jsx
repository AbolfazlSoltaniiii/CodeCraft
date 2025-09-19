import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import CodeEditor from "./components/editor/codeEditor/CodeEditor.jsx";
import Preview from "./components/editor/preview/Preview.jsx";

const App = () => {
  let projectInfo = localStorage.getItem("ProjectInfo");
  projectInfo = JSON.parse(projectInfo);

  const [title, setTitle] = useState(projectInfo?.title || "Untitled");
  const [html, setHtml] = useState(projectInfo?.html || "");
  const [css, setCss] = useState(projectInfo?.css || "");
  const [js, setJs] = useState(projectInfo?.js || "");

  const [code, setCode] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(`
      ${html}
      <style>${css}</style>
      <script>${js}</script>
    `);
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
      <Navigation title={title} updateTitle={setTitle} onSaveClick={onSaveClick} />

      <div className="flex flex-1">
        <CodeEditor
          language="html"
          value={html}
          onChange={(value) => setHtml(value)}
          onMount={(editor) => editor.focus()}
        />
        <CodeEditor
          language="css"
          value={css}
          onChange={(value) => setCss(value)}
        />
        <CodeEditor
          language="javascript"
          value={js}
          onChange={(value) => setJs(value)}
        />
      </div>

      <Preview code={code} />
    </div>
  );
};

export default App;