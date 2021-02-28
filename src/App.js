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

  formSubmitHandler = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        ...[{ name: name, number: number, id: uuidv4() }],
      ],
    }));
  };

  InputChangeHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });

    console.log(this.state.filter);
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>

        <Filter filter={this.state.filter} onChange={this.InputChangeHandler} />

        <ContactList contacts={this.state.contacts} />
      </section>
    );
  }
}

export default App;
