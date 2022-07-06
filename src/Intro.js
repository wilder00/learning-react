// funciones impuras : son funciones que no devuelven el mismo valor cuando son llamadas (me parece que a un mismo input son siempre tira un mismo output)
const impura = ()=> new Date().toLocaleString()
console.log(impura());

// un componente funcional debe ser una función pura.
const MiComponente = ({ miProp }) =>{
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}


const App = () => {
  return(
    <MiComponente miProp={'chanchito Feliz'}/>
  )
}

export default App;
