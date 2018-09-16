import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from './manipulate-dom-with-react-refs';
import DynamicForm from './dynamic-form';
import MyFancyForm from './control-form-values';
import MyList from './use-key-props';

import './main.css';

class App extends React.Component {
  render() {
    return (
      <MyList />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));