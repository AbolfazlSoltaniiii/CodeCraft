import React from "react";

const Preview = ({code}) => {
  return (
    <div className="flex flex-col flex-1">
      <span className="font-bold px-2 text-2xl opacity-40 border-b">Preview</span>

      <iframe
        srcDoc={code}
        className="flex-1 w-full"
        title="preview"
      />
    </div>
  );
};

export default Preview;