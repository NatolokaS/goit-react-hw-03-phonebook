import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './PostForm.module.css';

export class PostForm extends Component {
    state ={
		name: '',
        phone: '',
    }
    
    handleSubmit =(event) =>{
	    event.preventDefault()
        const newContact = {...this.state, id: nanoid};
	    this.props.addContact(newContact);
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label className={css.label}>Name
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$"
                required
                className={css.postFormInput}
            />
        </label>
        <label className={css.label}>Phone
            <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                pattern="380[0-9]{9}"
                max-length="12"
                placeholder='380123456789'  
                required 
                className={css.postFormInput}
            />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
    }; 
}
