import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = this.props;
    this.change = function(event){
      let value = event.target.value;
      switch(event.target.name){
        case "nombre":
        if(event.target.value.length>20){
          ReactDOM.render(<Error mensaje = "La longitud debe ser inferior a 20"/>, document.getElementById('error'));
        }else{
          this.setState({persona :{Nombre :value}});
        }
        break;
        case "apellidos":
        if(event.target.value.length>20){
          ReactDOM.render(<Error mensaje = "La longitud debe ser inferior a 20"/>, document.getElementById('error'));
        }else{
          this.setState({persona :{Apellidos :value}});
        }
        break;
        case "edad":
        if(event.target.value<0 || event.target.value>120){
          ReactDOM.render(<Error mensaje = "Debe ser entre 0 y 120"/>, document.getElementById('error'));
        }else{
          this.setState({persona :{Edad :value}});
        }
        break;
      }
    }
  };
  render() {

    return (
      <div>
      <h1>Formulario</h1>
      <p>Nombre: <input type='text' name='nombre' defaultValue={this.state.persona.Nombre} onChange={(e)=>this.change(e)}/></p>
      <p>Apellidos:<input type='text' name='apellidos' defaultValue={this.state.persona.Apellidos} onChange={(e)=>this.change(e)}/></p>
      <p>Edad:<input type='number' name='edad' defaultValue={this.state.persona.Edad} onChange={(e)=>this.change(e)}/></p>
      </div>
      );
  }
}

class Error extends Component {
  render() {
    return (<p>{this.props.mensaje}</p>);
  }
}
export default App;
