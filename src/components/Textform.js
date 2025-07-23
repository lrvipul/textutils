import React, {useState,useEffect} from 'react'


export default function Textform(props) {
    
    const handleClickUp = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Text converted in to UpperCase",'success')
    }

    const handleClickLo = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Text converted in to Lowercase",'success')
    }

    // const handleClickCamelize = () => {
    //     let newtext = text.toLowerCase();
    //     setText(newtext)
    // }
    
    const handleClickClear = () => {
        setText('')
        props.showAlert("Text Cleared",'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        //let boxtext = document.getElementById('myBox');
        // boxtext.select();
        // navigator.clipboard.writeText(boxtext.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard",'success')
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed from Text",'success')
    }


    const [text, setText] = useState("Enter text here");

    useEffect(() => {
        setText("");
    }, []);
    


  return (
    <div>
          
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control ${props.mode !== 'dark' ? `bg-${props.mode}-subtle` : ''}`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'',color: props.mode==='dark'?'white':'black',border:"1px solid"}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode}  mx-2 my-2`} onClick={handleClickUp}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode}  mx-2 my-2`} onClick={handleClickLo}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode}  mx-2 my-2`} onClick={handleClickClear}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode}  mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode}  mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>your text contains {text.split(/\s+/).filter(text_word => text_word !== "").length} words and {text.trim(" ").length} characters</p>
                <p> {0.01 * text.trim(" ").split(/\s+/).filter(text_word => text_word !== "").length} minutes to read the text</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Text Preview!'}</p>
            </div>
         
    </div>
  )
}
