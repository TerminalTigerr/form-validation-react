import propTypes from 'prop-types'

class Field extends React.Component {
  static propTypes = {
    placeholder: propTypes.string,
    name: propTypes.string.isRequired,
    value: propTypes.string,
    validate: propTypes.func.isRequired,
    onChange: propTypes.func
  }

  state = {
    value: this.props.value,
    error: false
  }

  componentWillReceiveProps(update){
    return {value: update.value}
  }

  /* Responsible for accepting user input, validating, updating state,
     and also calling the parent's event handler as well */
  onChange = (evt) => {
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
          onChange={this.onChange}
        />
        <span className=' text-red-700'>{this.state.error}</span>
      </div>
    )
  }
}

export default Field