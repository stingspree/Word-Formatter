import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lower Case was clicked!");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const HandleClear = () => {
    setText("");
  };
  const HandleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const HandleExSpaces = () => {
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={HandleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#035096",
              color:props.mode === "light" ? "black" : "white"
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleExSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
      </div>
    </>
  );
}
