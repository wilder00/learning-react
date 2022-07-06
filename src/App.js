import { useState, useRef } from 'react'

const inicial = { contador: 0 }


const App = ()=>{
  const ref = useRef();
  const inputRef = useRef();
  const click = ()=>{
    console.log(ref.current);
  } 
  const focus = ()=>{
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={focus}> Focus </button>
      <div onClick={click} ref={ref}>lala</div>
    </div>
  )
}

export default App