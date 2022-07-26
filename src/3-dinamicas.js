import './App.css'
import {  Routes, Route, Link, useMatch, useParams } from 'react-router-dom'

const Proyecto = ()=>{
  const match = useMatch("/portafolio/:proyecto_id")
  const params = useParams();
  const { proyecto_id } = params;
  console.log("el match: ", match);
  console.log("el params: ", params );
  return (
    <h2> Proyecto id: {proyecto_id}</h2>
  )
}

const Portafolio = () =>{
  const match = useMatch("/portafolio/*")
  console.log("match en Portfolio", match);
  return (
    <div>
      <h1> Portafolio </h1>
      <ul>
        <li>
          <Link to={`${match.pathnameBase}/proyecto-1`}>Proyecto 1 </Link>
        </li>
        <li>
          <Link to="proyecto-2">Proyecto 2 </Link>
        </li>
        <li>
          <Link to="54">Proyecto id 54 </Link>
        </li>
        <li>
          <Link to="105">Proyecto id 105 </Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="/"
            element={
              <h1>Proyecto Inicio</h1>
            }
          />
          <Route path={'proyecto-1'}
            element={
              <h1>Proyecto 1</h1>
            }
          />
          
          <Route path="/proyecto-2"
            element={
              <h1>Proyecto 2</h1>
            }
          />
          
          <Route path="/:proyecto_id"
            element={
              <Proyecto />
            }
          />
        </Routes>
      </div>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Routes>
          <Route exact path="/" 
            element={
              <h1>Inicio</h1>
            }
          />
          <Route path="/portafolio/*"
            element={
              <Portafolio/>
            }
          />
          
        </Routes>
      </section>
    </div>
  )
}

export default App;
