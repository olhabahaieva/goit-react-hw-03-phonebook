import React, { Component } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';


class Phonebook extends Component {
  state = {
    inputValue: '',
    inputNumber: '',
  };

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onNumberChange = (e) => {
    this.setState({
      inputNumber: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    e.preventDefault();
    const { inputValue, inputNumber } = this.state;
    const { createContact } = this.props;

    createContact(inputValue, inputNumber);

    this.setState({
      inputValue: '',
      inputNumber: '',
    });
  };

  render() {
    const { inputValue, inputNumber } = this.state;

    return (
      <Section title="Phonebook">
        <div className={css.phonebook}>
          <form className={css.form} action="">
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={inputValue}
              onChange={this.onChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={inputNumber}
              onChange={this.onNumberChange}
            />

            <button
              onClick={this.handleButtonClick}
              className={css.button}
              name="submit"
              type="submit"
            >
              Add contact
            </button>
          </form>
        </div>
      </Section>
    );
  }
}

export default Phonebook;
