import React, { Component } from 'react';

class Form extends Component {
  
  state = {
    fiels: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Sign up your Hooli Account here</h1>
        <Field 
          placeholder='Name'
          name="name"
          value={this.state.fields.name}
          onChage={this.onInputChange}
        />
      </div>
    );
  }
}

export default Form;