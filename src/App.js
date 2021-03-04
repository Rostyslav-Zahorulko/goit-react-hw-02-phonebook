import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { name, number, id: uuidv4() };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  filterHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const lowercasedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowercasedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <section>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter filter={filter} onChange={this.filterHandler} />

        <ContactList contacts={filteredContacts} />
      </section>
    );
  }
}

export default App;
