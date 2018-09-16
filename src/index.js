import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from './manipulate-dom-with-react-refs';
import DynamicForm from './dynamic-form';
import MyFancyForm from './control-form-values';

import './main.css';

class App extends React.Component {
  render() {
    return (
      <MyFancyForm />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));