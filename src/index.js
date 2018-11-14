import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  function aktualniDen() {
    return Date();
  }
  const den = "streda";
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>kebab</h2>
      <p>Dnes je {den}.</p>
      <p1>Dnes je {aktualniDen()}.</p1>
      <h2>
        <footer>Ahoj</footer>
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
