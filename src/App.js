import React from "react";
import { v4 as uuidv4 } from "uuid";
import PhoneBook from "./components/Phonebook";
import Filter from "./components/Filter";
import PhonebookEditor from "./components/PhonebookEditor";
class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const preservedContact = localStorage.getItem("contacts");
    if (preservedContact) {
      this.setState({
        contacts: JSON.parse(preservedContact),
      });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContacts = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (
      this.state.contacts.find(
        (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  onRemovePersonData = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  changeFilter = (filter) => {
    console.log(filter);
    this.setState({ filter });
  };
  render() {
    const visibleInfoPerson = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <PhonebookEditor addContacts={this.addContacts} />
        <PhoneBook
          contacts={visibleInfoPerson}
          onRemovePersonData={this.onRemovePersonData}
        />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
      </div>
    );
  }
}
export default App;
