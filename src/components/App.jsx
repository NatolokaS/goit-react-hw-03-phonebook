import { Component } from 'react';
import { PostForm } from './PostForm/PostForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Notify } from 'notiflix';

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact  = (contact) => {
    const hasDuplicates = this.state.contacts.some(cont => cont.name === contact.name)
    if(hasDuplicates){
      Notify.failure(`Contact ${contact.name} already exists`)
      return
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }))
  };

 deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id!== id),
    }));
  };

  filterContacts = (e ) => {
    this.setState({filter: e.target.value})
  };

  handleFilter =()=>{
    let filteredContacts=[];
    if(this.state.filter){
      filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }else{
      return filteredContacts = this.state.contacts
    }
    return filteredContacts
  }

render() {
  const {contacts, filter} =this.state
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <PostForm title="Upload stats" addContact={this.addContact} />
      <h2>Contacts</h2>
      <Filter filter ={filter} filterContacts={this.filterContacts}/>
      <Contacts
        handlerDel={this.deleteContact}
        filteredContacts={this.handleFilter}
        filter ={this.filter}
        contacts ={contacts}/>
    </div>
  )}
}
