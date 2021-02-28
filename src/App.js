import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        ...[{ name: name, number: number, id: uuidv4() }],
      ],
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

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
