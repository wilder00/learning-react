import { Component } from "react";
import Productos from "./components/Productos";
import Layout from './components/Layout';
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component{

  state = {
    products:[
      { name: 'Tomate', price: 1500, img: '/assets/images/products/tomate.jpg'},
      { name: 'arvejas', price: 2500, img: '/assets/images/products/arbejas.jpg'},
      { name: 'lechuga', price: 500, img: '/assets/images/products/lechuga.jpg'},
    ],
    carro: [

    ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {

    const { carro } = this.state

    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map( x => x.name === producto.name
        ? ({
            ...x, 
            cantidad: x.cantidad + 1
          })
        : x
      )

      return this.setState({ carro: newCarro })
    }

    return this.setState({
      carro:  this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })

  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return 
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  //retornar contenido jsx
  render() {

    const { esCarroVisible } = this.state

    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={ esCarroVisible } 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={ this.agregarAlCarro }
            productos={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
