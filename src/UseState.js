import { useState } from 'react'

// reglas de los hooks
// 1. No puede estar dentro de un loop, ni condiciones, ni nada, siempre en el nivel más alto del componente
// 2. solo se llaman en 2 partes:
//    a. componentes de REact (no se puede llamar en funciones normales)
//    b. custom hooks, 
// 3. (recomendación) Cuando se crea un custom hook siempre debe comenzar con use*


// custom hook
const useContador = (inicial) => {
  const [contador, setContador] = useState( inicial )
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const App = ()=>{
  const [contador, incrementar] = useContador(0)
  return (
    <div>
      contador: { contador }
      <button onClick={incrementar}> Incrementar </button>
    </div>
  )
}

export default App