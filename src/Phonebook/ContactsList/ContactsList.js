import React, { Component } from 'react';
import s from './ContactsList.module.css';
import PropTypes from "prop-types";

export default class ContactsList extends Component{

    render() {
        const { handleDelete } = this.props
        return (
            <ul className={s.list}>        
                {
                    this.props.contacts.map(contact => (
                     <li className={s.listItem}
                        key={contact.id} >
                        {contact.name}:  {contact.number}
                        <button
                            className={s.deleteButton}
                            type="button"
                            id={contact.id}
                            onClick={handleDelete}
                        >Delete</button>
                    </li>))
                }
        </ul>
    )}

}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}