import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import CodeEditor from "./components/editor/codeEditor/CodeEditor.jsx";
import Preview from "./components/editor/preview/Preview.jsx";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

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

  return (
    <div className="flex flex-col h-screen">
      <Navigation />

      <div className="flex flex-1">
        <CodeEditor
          language="html"
          onChange={(value) => setHtml(value)}
          onMount={(editor) => editor.focus()}
        />
        <CodeEditor
          language="css"
          onChange={(value) => setCss(value)}
        />
        <CodeEditor
          language="javascript"
          onChange={(value) => setJs(value)}
        />
      </div>

      <Preview code={code} />
    </div>
  );
};

export default App;