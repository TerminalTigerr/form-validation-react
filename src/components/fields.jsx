import React, { Component } from 'react';
import propTypes from 'prop-types'

class Field extends Component {
  static propTypes = {
    placeholder : propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    validate: propTypes.func,
    onchange: propTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    error: false
  }

  componentWillReceiveProps(update) {
    this.setState({value: update.value})
  }

  onchange = (evt) => {
    const name = this.props.name
    const value = evt.target.value
    const error = this.props.validate ? this.props.validate(value) : false

    this.setState({value, error})

    this.props.onChange({name, value, error})
  }
  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value} 
          onChange={this.onchange}
          className='border-2 border-black py-2 px-3 rounded-full'/>

        <span className=' text-red-600'>{this.state.error}</span>
      </div>
    );
  }
}

export default Field; 