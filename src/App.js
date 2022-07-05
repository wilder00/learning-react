import { Component } from "react";

class Input extends Component{

  render() {
    return (
      <input
        value={this.props.value}
        onChange={ this.props.onChange }   
      />
    )
  }

}


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
    nombre: "",
    apellido: "",
  }

  updateValues = (prop, value) =>{
    this.setState({[prop]: value})
  }

  //retornar contenido jsx
  render() {
    console.log(this.state);
    return(
      <div>
        <p>Hola mundo</p>
        <p>{`${this.state.nombre} ${this.state.apellido}`}</p>
        <Input 
          value={this.state.nombre} 
          onChange={ e => this.updateValues('nombre', e.target.value) }
        />
        <Input 
          value={this.state.apellido}
          onChange={ e => this.updateValues('apellido', e.target.value) } 
        />

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
