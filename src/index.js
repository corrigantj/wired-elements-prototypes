import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let textInput = React.createRef();

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`);
  }

  return (
    <div className="App">
      <div>
        <wired-input placeholder="Your name" ref={textInput} />
        <wired-button onClick={handleClick}>Submit</wired-button>
      </div>
      <div>
        <wired-card>
          <h2>This is an H2</h2>
          <p>This is some paragraph body text</p>
        </wired-card>
      </div>
      <div>
        <wired-card elevation="2">
          This is another wired card.
        </wired-card>
      </div>
      <div>
        <wired-card elevation="5">
          And yet another wired card. <br></br>
          This one has a bunc of cards underneath it
        </wired-card>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
