import React, { useState } from 'react';



export default function TextFoam(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLocaleLowerCase();
      setText(newText)
  }
    const handleClearClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = '';
      setText(newText)
  }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    
    const handleCopy = ()=>{
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleseprationClick = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    // const handleseprationClick = ()=>{
    //   let newText = text.codePointAt;
    //   setText(newText)
    // }
    
    
    // const handleCopy = () =>{
    // console.log('I am copy');
    // var text = document.getElementById("exampleForm")
    
    // }


const [text, setText] = useState('');
// text = "new text"; // Wrong way to change the state
// setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container'>
      <h2>{props.heading} </h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-outline-secondary mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-outline-secondary mx-1" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-outline-secondary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-outline-secondary mx-1" onClick={handleCopy}>
      Copy Text
      </button>
      <button className="btn btn-outline-secondary mx-1" onClick={handleExtraSpaces}>
      Remove extra spaces
      </button>
      <button className="btn btn-outline-secondary mx-1" onClick={handleseprationClick}> 
        Convert into saperate sentenses
      </button>
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p> {text.split (" ").length} words and {text.length}  characters.  </p>
      <p>{0.008 *  text.split (" ").length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
