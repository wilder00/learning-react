
import { useState } from 'react'

function App() {
  const [value, setValue] = useState({ normal:'default', texto: '', chancho: ''})
  const handleChange = (e)=>{
    setValue((vals)=>({
      ...vals,
      [e.target.name]: e.target.value
    }))
  }
  console.log(value);
  return (
    <div>
      <input type='text' name="normal" value={value.normal} onChange={handleChange} /> <br/>
      { value.normal.length < 5 ? <span>Longitud minima de 5</span> : null}
      <textarea name='texto' onChange={handleChange} value={ value.texto } />

      <select value={value.chancho} name="chancho" onChange={handleChange}>
        <option value='' disabled>-- seleccione --</option>
        <option value='chanchoFeliz'>Chancho Feliz</option>
        <option value='chanchitoFeliz'>Chanchito Feliz</option>
        <option value='chanchitoTriste'>Chanchito Triste</option>
        <option value='Felipe'> Felipe </option>
      </select>
    </div>
  );
}



export default App;
