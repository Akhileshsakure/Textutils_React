import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        // console.log('some change');
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let upText = text.toUpperCase();
        // console.log('Up');
        setText(upText);
        props.triggerAlert('Converted to Uppercase!', 'success');
    }
    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        // console.log('Low');
        setText(lowText);
        props.triggerAlert('Converted to Lowercase!', 'success');
    }

    return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3" >
            <h2>{props.heading}</h2>
            <textarea className="form-control mb-2" placeholder='Enter text here' style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'rgb(32 38 45)'}} id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert To lowercase</button>
        </div>
        <div className='my-3'>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).includes("")?text.split(/\s+/).length-1:text.split(/\s+/).length} words, {text.length} characters</p>
            <p>{text.split(/\s+/).includes("")?(text.split(/\s+/).length-1)*0.005:(text.split(/\s+/).length)*0.005} minute read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
    </>
    )
}
