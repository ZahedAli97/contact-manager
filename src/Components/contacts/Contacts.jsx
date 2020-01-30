import React, { Component } from 'react'
import axios from "axios";
import Contact from './Contact';

export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
        }
    }
    componentDidMount() {
        // API Call 
        axios
            .get("http://localhost:4000/users")
            .then(res => this.setState({ contacts: res.data }));
    }

    setContacts = (id) => {
        const newContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContacts })
    }

    render() {
        const { contacts } = this.state
        return (
            <>
                <h4 className="display-4 mb-2">
                    <span className="text-danger">Contact</span> List
                </h4>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact} setContacts={this.setContacts} />)}
            </>
        )
    }
}
