
import { useState } from 'react'

function App() {
  const [value, setValue] = useState({ normal:'default', texto: '', chancho: '', check: false, estado: 'feliz'})
  const handleChange = ({target})=>{
    setValue((vals)=>({
      ...vals,
      [target.name]: target.type === 'checkbox'? target.checked : target.value
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
      <br/>
      <br/>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={ value.check }
      /> Acepta termino y condiciones

      <br/>
      <br/>

      <div>
        <label>Chancho: </label>
        <input onChange={ handleChange } name="estado" type="radio" value="feliz" checked={value.estado === 'feliz'} /> Feliz
        <input onChange={ handleChange } name="estado" type="radio" value="triste" checked={value.estado === 'triste'} /> Triste
        <input onChange={ handleChange } name="estado" type="radio" value="felipe" checked={value.estado === 'felipe'} /> Felipe
      </div>

    </div>
  );
}



export default App;
