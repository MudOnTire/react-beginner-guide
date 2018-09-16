import React from 'react';

export default class NameForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({ target: e.target });
    console.log(e.target[0].value);
    console.log(e.target.elements.username.value);
    // console.log(this.refs.usernameInput.value);
    console.log(this.usernameInput.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/* <input type='text' name='username' ref='usernameInput' /> */}
          <input type='text' name='username' ref={node => this.usernameInput = node} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}