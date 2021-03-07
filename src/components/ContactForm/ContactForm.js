import { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    const { name, number } = this.state;

    event.preventDefault();

    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <label className="form-field">
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={name}
            required
            placeholder="John Smith"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label className="form-field">
          Number
          <input
            className="form-input"
            type="tel"
            name="number"
            value={number}
            required
            placeholder="111-11-11"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button className="add-contact-button">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
