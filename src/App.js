import React from "react";
import ReactDOM from "react-dom";
import Banner from "./Banner";
import Content from "./Content";
const App = () => {
  return (
    <div id="wrapper">
      <Banner />
      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
