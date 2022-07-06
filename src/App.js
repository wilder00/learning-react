
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  console.log(value);
  return (
    <div>
      <input type='text' name="normal" value={value} onChange={handleChange} /> <br/>
      { value.length < 5 ? <span>Longitud minima de 5</span> : null}
    </div>
  );
}



export default App;
