import ContactForm from "./Phonebook/ContactForm/ContactForm";
import ContactsList from "./Phonebook/ContactsList/ContactsList";
import Filter from "./Phonebook/Filter/Filter";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addNewContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else if (this.state.contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
    } else
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact]
      }));
  }


  changeFilter  = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

   handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e.target.id)
    }))
  }
  
  render() {
    const { addNewContact, changeFilter, handleFilter, handleDelete } = this
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={addNewContact}
        />
        <h1>Contacts</h1>
        <Filter
          changeFilter={changeFilter}
        />
        <ContactsList
          contacts={handleFilter()}
          handleDelete={handleDelete}
        />
      </div>
    )
  }
}

