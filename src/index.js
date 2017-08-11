import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';


let persona = {};
$.ajax({
	type: 'get',
	url:"http://localhost:59446/api/Persona/1",
	success: function(result){
		persona = result;
		ReactDOM.render(<App persona = {persona}/>, document.getElementById('root'));
	}
});

