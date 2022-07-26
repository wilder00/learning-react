import './App.css'
import {  Routes, Route, NavNavLink, NavLink, useMatch, useParams } from 'react-router-dom'

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
          
        </Routes>
      </section>
    </div>
  )
}

export default App;
