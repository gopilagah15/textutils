import React, { useState } from 'react'

const TextForm = (props) => {
    const {heading} = props;
    const [text, settext] = useState('');
    const updateTExt=(e)=>{
        settext(e.target.value)
    }
    const handleUpClick=()=>{ 
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert('Converted to UpperCase ','success')
    }
    const handleloClick=()=>{ 
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert('Converted to LowerCase ','success')
    }
    const handleExtraSpaces=()=>{ 
      let newText = text.split(/[ ]+/);
      settext(newText.join(' '));
      props.showAlert('Extra spaces removed successfully ','success')
    }
    const handleCopy=()=>{ 
      var text = document.getElementById('myBox');
      text.select();
      document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text Copied successfully ','success')
    }
    const deleteText=()=>{  
      settext('')
      props.showAlert('Text deleted ','danger')
    }
  return ( 
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{heading}</h1>
   <div className="mb-3 my3">
     <textarea className="form-control"  value={text} onChange={updateTExt} style={{background:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} id="myBox" rows="13"></textarea>
   </div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleloClick}>Convert to LowerCase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove spaces</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={deleteText}>Delete text</button>
     </div>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
     <h4>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words {text.length} Characters</h4>
     <h4>{0.008 * text.split(' ').length} minutes read </h4>
     <h5>Preview</h5>
     <p>{text.length>0?text:'Enter text to Preview'}</p>
     </div>
     
     </>
  )
}

export default TextForm
