import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from './manipulate-dom-with-react-refs';
import './main.css';

class App extends React.Component{
  render(){
    return (
      <Tilt>
        <h1>Vanilla Tilt</h1>
      </Tilt>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));