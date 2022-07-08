import { useState } from "react";

import Card from './components/Card'
import Container from './components/Container'
import UserForm from "./components/UserForm";

const App = ()=>{
  const [usuarios, setUsuarios] = useState([])
  

  const submit = usuario =>{
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  console.log(formulario, usuarios);
  return (
    <div style={{ marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x => 
              <li key={x.email}>
                {` ${x.name} ${x.lastname} ${x.email}`}
              </li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;
