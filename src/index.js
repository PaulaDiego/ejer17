import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const persona = {
	Nombre: 'Juan',
	Apellidos: 'Perez',
	Edad: 55
}
ReactDOM.render(<App persona = {persona}/>, document.getElementById('root'));
registerServiceWorker();
