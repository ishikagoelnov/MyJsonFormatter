import React, { useState } from 'react'
// import '../App.css'

export default function TexArea() {
  const[text,setText]=useState("");
  const isJSONValid=(text)=>{
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}
  const handleFormat=()=>{
    if(isJSONValid(text)===true){
      let newText=JSON.stringify(JSON.parse(text),null,4)
      setText(newText);
    }
    else{
      let a=isJSONValid(text)
      setText(a);
    }
  }
  const handleClear=()=>{
   let newText='';
   setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  return (
    <>
  <div className='text' style={{display:'flex',justifyContent:'space-evenly'}}>
  <div>
  <p>Input:</p>
  <textarea  id="floatingTextarea" rows="17" cols="60"  onChange={handleOnChange} ></textarea>
  </div>
  <div>
  <button disabled={text.length===0} type="button" className='btn btn-success'style={{height:'40px',marginRight:'20px'}} onClick={handleFormat}>Format</button>
  <button disabled={text.length===0} type="button" className='btn btn-danger' style={{height:'40px'}} onClick={handleClear}>Clear</button>
  </div>
  <div>
  <p>Formatted Json:</p>
  <textarea  id="floatingTextarea" rows="17" cols="60" value={text}></textarea>
  </div>
    </div>
    </>
  )
}
