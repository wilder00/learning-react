import { Component } from "react";

const styles = {
  button:{
    backgroundColor: '#0A283e',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
          
  }
}

class Button extends Component {

  render() {
    return(
      <button {...this.props} style={ styles.button } />
    )
  }

}

export default Button