import React from 'react';

export default class DynamicForm extends React.Component {

  state = {
    error: null
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      error: this.getErrorMessage(value)
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.usernameInput.value;
    const errorMsg = this.getErrorMessage(username);
    this.setState({
      error: errorMsg
    });
    if (!errorMsg) {
      alert('submit success!');
    }
  }

  getErrorMessage = (value) => {
    if (!value) {
      return 'user name must not be null!';
    }
    if (value.length < 6) {
      return 'user name must be at least 6 characters!';
    }
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='username'
            ref={node => this.usernameInput = node}
            onChange={this.handleChange}
          />
          <span className='error-message'>{this.state.error}</span>
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}