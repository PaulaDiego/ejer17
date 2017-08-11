import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';

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
    this.send = function(){
      let nombre = document.getElementById('nombre').value;
      let apellidos = document.getElementById('apellidos').value;
      let edad= document.getElementById('edad').value;
      $.ajax({
          type:'put',
          url:"http://localhost:59446/api/Persona/1",
          data: { Id: 1, Nombre: nombre,Apellidos:apellidos, Edad:edad }
        });
    }
  };

  render() {

    return (
      <div>
      <h1>Formulario</h1>
        <p>Nombre: <input id='nombre' type='text' name='nombre' defaultValue={this.state.persona.Nombre} onChange={(e)=>this.change(e)}/></p>
        <p>Apellidos:<input id='apellidos' type='text' name='apellidos' defaultValue={this.state.persona.Apellidos} onChange={(e)=>this.change(e)}/></p>
        <p>Edad:<input id='edad' type='number' name='edad' defaultValue={this.state.persona.Edad} onChange={(e)=>this.change(e)}/></p>
        <button className='center' name='enviar' onClick={this.send}>Enviar</button>
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
