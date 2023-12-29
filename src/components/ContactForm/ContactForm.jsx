import React, { Component } from 'react';
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';

export class ContactForm extends Component {

  handleSubmit=(evt)=>{

    evt.preventDefault();
    
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;

    const formData = {
      id: nanoid(),
      name, 
      number,
    }
    this.props.addProfile(formData);
    evt.currentTarget.reset();
  }

  render(){
    return (
      <form 
      className={css.form}
      onSubmit={this.handleSubmit}>
      <label htmlFor="name" className={css.formLabel}> 
        <span className={css.formLabelHeader}>Name</span>
        <input type="text" name="name" placeholder='Klavdia Petrivna' className={css.formInput} required />
      </label>
      <label htmlFor="number" className={css.formLabel}>
        <span className={css.formLabelHeader}>Number</span>
        <input type="tel" name="number" placeholder='+380...' className={css.formInput} required />
      </label>
      <button type="subbmit" className={css.submitForm}>Add contact</button>
      </form>
    )
  }
}

