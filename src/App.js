import './App.css'
import {  Routes, useLocation, Route, useNavigate , NavLink, useMatch, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Redirect = ({ to }) => {
  let navigate = useNavigate()
  useEffect(() => {
      navigate(to) //para redirigir antenrior se le para -1, al siguiente es 1 como parámetro
  })

  return null
}

const useQuery = () =>{
  return new URLSearchParams(useLocation().search)
}

const Proyecto = ()=>{
  const match = useMatch("/portafolio/:proyecto_id")
  const params = useParams();
  const { proyecto_id } = params;
  return (
    <h2> Proyecto id: {proyecto_id}</h2>
  )
}

const Portafolio = () =>{
  const match = useMatch("/portafolio/*")
  let loggedIn = false;

  if(!loggedIn){
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1> Portafolio </h1>
      <ul>
        <li>
          <NavLink to={`${match.pathnameBase}/proyecto-1`}>Proyecto 1 </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="proyecto-2">Proyecto 2 </NavLink>
        </li>
        <li>
          <NavLink to="54">Proyecto id 54 </NavLink>
        </li>
        <li>
          <NavLink to="105">Proyecto id 105 </NavLink>
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
  const query = useQuery()
  const play = query.get('play')
  const name = query.get('name')
  console.log("query: ", query, "play: ", play, "name: ", name);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
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
          
          <Route path="*"
            element={
              <span>
                404: ruta no encontrada
                </span>
            }
          />
          
        </Routes>
      </section>
    </div>
  )
}

export default App;
