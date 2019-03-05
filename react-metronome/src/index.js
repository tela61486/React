import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome';
import MetronomeRef from './MetronomeRef';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Metronome />, document.getElementById('root'));
ReactDOM.render(<MetronomeRef />, document.getElementById("root2"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
