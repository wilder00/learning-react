/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

import { Component } from "react";


class Button extends Component {
  state = {
  }
  constructor(props){
    super(props)
    console.log('constructor', props);
  }

  
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState );
  }

  componentWillUnmount(){
    console.log('Desmontando componente', this.props, this.state);
  }
  
  render() {
    console.log("Ejecutando método render de button");
    return(
      <button onClick={ ()=>this.setState({ edad: 21 }) }>
        Enviar
      </button>
    )
  }
}


class App extends Component{

  state = {
    valor: 3
  }

  //retornar contenido jsx
  render() {
    console.log(this.state);
    return(
      <div>
        <p>Hola mundo</p>
        { this.state.valor === 3
            ?<Button caminar={true} />
            : null
          }
        <button
          onClick={ ()=> this.setState({valor: 2}) }
        >
          Enviar desde el App
        </button>
      </div>
    )
  }
}

export default App;
