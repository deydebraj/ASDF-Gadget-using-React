import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
//JSX another small language under react <h2> is a tag not a less than
ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.reader(what do i want to render, where do i want to render it);
//root comes from index.html 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();


/*
var s= document.createElement("p");
s.innerHTML = "Hello World";
*/