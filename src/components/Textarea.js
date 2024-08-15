import React, { useState } from "react";

export default function (props) {
  const handleupclick = () => {
    console.log("text get converted");
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handlelowclick = () => {
    console.log("text get converted");
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handleonchange = (event) => {
    console.log("change ");
    settext(event.target.value);
  };

  // const getgmail = () => {
  //   // console.log("");
  //   let newtext = text.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g)
  //   settext(newtext);
  // };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    settext(newText);
}

const handleReverse = (event) => {
  /* Convert string to array*/
  let strArr = text.split("");
  /* Reverse array*/
  strArr = strArr.reverse();
  /* Convert array to string*/
  let newText = strArr.join("");
  settext(newText);
};

const handleExtraSpaces = ()=>{
  let words = text.split(' ');
  let joinedWords = '';
  // console.log(words);
  words.forEach((elem)=>{
      if(elem[0] != undefined){
          joinedWords += elem + " ";
          console.log(joinedWords);
      }
  })
  settext(joinedWords);
}






  const [text, settext] = useState("enter the text");
  return (
    <>
      <div classNameName="mb-3 ">
        {/* <label for="exampleFormControlTextarea1" className="form-label"></label>
         */}
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-warning  my-2 " onClick={handleupclick}>
        Convert to uppercase
      </button>
      <button className="btn btn-warning  my-2 mx-2" onClick={handlelowclick}>
        Convert to lowercase
      </button>
    
      <button
        type="submit"
        onClick={handleCapitalize}
        className="btn btn-warning mx-2 my-2"
      >
        Capitalize
      </button>

      <button
        type="submit"
        onClick={handleReverse}
        className="btn btn-warning mx-2 my-2"
      >
        Reverse
      </button>

      <button
        type="submit"
        onClick={handleExtraSpaces}
        className="btn btn-warning mx-2 my-2"
      >
       rmSpace
      </button>

      <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2 my-2 "
      >
        Speak
      </button>


      <div className="container">
        <h1>your text summary</h1>

        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length}minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
