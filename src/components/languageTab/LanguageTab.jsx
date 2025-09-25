import React from "react";

const LanguageTab = ({language, activeLanguageTab, onClick}) => {
  const languageColor = {
    html: "bg-red-800",
    css: "bg-blue-800",
    javascript: "bg-yellow-600"
  };

  return (
    <div
      className={`flex-1 py-3.5 px-4 uppercase text-2xl cursor-pointer border-x border-gray-400 text-center font-bold tracking-wide
       ${activeLanguageTab === language ? `${languageColor[language]} text-white` : "bg-gray-300"}`}
      onClick={onClick}
    >
      {language}
    </div>
  );
};

export default LanguageTab;