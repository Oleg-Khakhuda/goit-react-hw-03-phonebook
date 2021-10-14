import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';


export default class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    inputNameId = uuidv4();
    inputNumberId = uuidv4();

    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewContact(this.state);
        this.resetForm();
    }

    resetForm = () => {
       this.setState({ name: '', number: '' });
  };

    render() {
        const { handleSubmit, inputNameId, handleChange, inputNumberId } = this;
        const { name, number } = this.state;
        return (
            <form className={s.form} onSubmit={handleSubmit}>  
            <label className={s.label} htmlFor={inputNameId}>Name</label>
            <input
                className={s.input}
                type="text"
                value={name}
                id={inputNameId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handleChange}
            />
            <label className={s.label} htmlFor={inputNumberId}>Number</label>
            <input
                className={s.input}
                type="tel"
                value={number}
                id={inputNumberId}
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                onChange={handleChange}
            />
                <button className={s.button} type='submit'>Add contact</button>
            </form>
       ) 
    }
}
