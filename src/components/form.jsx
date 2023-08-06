import React, { Component } from 'react';
import Field from './fields';

class Form extends Component {
  state = {
    fields : {
      name: '',
      email: '',
    },
    fieldErrors: {},
    people : []
  }

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields
    const fieldErrors = this.state.fieldErrors
    
    fields[name] = value
    fieldErrors[name] = error

    this.setState({fields, fieldErrors})
  }

  validate = () => {
    const person = this.state.fields
    const fieldErrors = this.state.fieldErrors
    const errorMessage = Object.keys(fieldErrors).filter((k) => fieldErrors[k])

    if(!person.name) return true
    if(!person.email) return true
    if(errorMessage.length) return true

    return false
  }

  onFormSubmit = (evt) => {
    const people = this.state.people;
    const person = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: '',
      },
    });
  };

  render() {
    return (
      <div className='flex flex-col justify-center items-center space-y-3'>
        <h1 className='text-xl'>Sign up here</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field 
            placeholder='Name'
            name="name"
            value= {this.state.fields.name}
            onChange={this.onInputChange}
            validate={(val) => (val ? False: "Name is Required")}
          />
        </form>
      </div>
    );
  }
}

export default Form;