

function App() {

  //Manejo de formularios con evento no controlado
  const submit = (e)=>{
    e.preventDefault();
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name="campo" />
      </div>

      <input name="campo-2" />
      <input type='submit' value="enviar" />
    </form>
  );
}



export default App;