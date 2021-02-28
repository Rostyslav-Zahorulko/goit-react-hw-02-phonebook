import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        ...[{ name: this.state.name, number: this.state.number, id: uuidv4() }],
      ],
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
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
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, id, number }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
