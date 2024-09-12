import React,{useState} from 'react'


// console.log(useState('Enter text here2'));

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleclearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
       
    }
    // Credits: A
     const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
     }

     //Credits : Coding Wala

     const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success");
     }


    const [text, setText] = useState('');
    // setText("new Text");
  return (
    <>
  
    <div className="container" style={{color: props.mode==='black'?'light':'grey'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='black'?'light':'grey', color: props.mode==='light'?'black':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='black'?'light':'grey'}}>
        <h2>Your  text  summary</h2>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
