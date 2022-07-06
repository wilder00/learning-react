import { useRef } from 'react';

function App() {

  const input = useRef()
  const file = useRef()
  
  const submit = ()=>{

    console.log(input.current.value);
    console.log(file.current);

    const form = new FormData();
    form.append('archivo', file.current.files[0])
    form.append('campo', input.current.value)

    fetch('/lala', {method: 'POST', body: form})
  }

  return (
    <div >
      <div>
        <span>
          lala
        </span>
        <input type="text" name="campo" ref={input} />
        <input type="file"  ref={file} />
      </div>

      {/* <input name="campo-2" /> */}
      <input type='submit' value="enviar" onClick={submit} />
    </div>
  );
}



export default App;
