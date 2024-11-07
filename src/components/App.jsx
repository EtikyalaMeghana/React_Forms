import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setButton] = React.useState("");

  function changeName(event) {
    setName(event.target.value);
  }

  function changeButton() {
    setButton(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={changeName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={changeButton}>Submit</button>
    </div>
  );
}

export default App;
