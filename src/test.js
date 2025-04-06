// File: src/App.jsx
import React from "react";
import FlowBuilder from "./components/FlowBuilder";

const App = () => {
  return (
    <div className="w-full h-screen">
      <FlowBuilder />
    </div>
  );
};

export default App;

// File: src/utils/nodeTypes.js
export const nodeTypesList = {
  coldEmail: "Cold Email",
  waitDelay: "Wait/Delay",
  leadSource: "Lead Source",
};
