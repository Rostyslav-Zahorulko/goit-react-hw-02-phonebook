import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        ...[{ name: this.state.name, id: uuidv4() }],
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
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
