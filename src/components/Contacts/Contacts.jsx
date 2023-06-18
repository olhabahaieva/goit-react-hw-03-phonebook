import React, { Component } from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';

class Contacts extends Component {
  handleDeleteClick = (id) => {
    const { onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('PhonebookContacts', JSON.stringify(this.props.contacts));
    }
  }

  handleDeleteContactFromLocalStorage = (id) => {
    const savedContacts = localStorage.getItem('PhonebookContacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      const updatedContacts = parsedContacts.filter((contact) => contact.id !== id);
      localStorage.setItem('PhonebookContacts', JSON.stringify(updatedContacts));
    }
  };

  render() {
    const { contacts } = this.props;

    if (contacts.length === 0) {
      return null;
    }

    return (
      <Section title="Contacts">
        <ul className={css.contacts}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
              <button
                onClick={() => {
                  this.handleDeleteClick(contact.id);
                  this.handleDeleteContactFromLocalStorage(contact.id);
                }}
                className={css.delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Section>
    );
  }
}


export default Contacts;
