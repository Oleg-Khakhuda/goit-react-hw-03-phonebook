import  { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

export default class Filter extends Component {
  inputFilterId = uuidv4()

    render() {
        const { inputFilterId } = this;
        const { changeFilter } = this.props;
        
    return (
        <form className={s.form}>
            <label className={s.label} htmlFor={inputFilterId}>Find contacts by name</label>
            <input
                className={s.input}
                type="text"
                id={inputFilterId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={changeFilter}
            />
      </form>    
    );
  }
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
