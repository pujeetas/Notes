import React from "react";
import ReactDom from "react-dom/client";
import Body from "./component/Body";

const root = ReactDom.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

root.render(<App />);
