import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label>
          Number
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
