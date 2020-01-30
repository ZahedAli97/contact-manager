import React, { Component } from 'react'
import axios from "axios";
import Contact from './Contact';
import { connect } from 'react-redux';
import { add_user } from '../../Redux/ActionCreator';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        }
    }
    componentDidMount() {
        // API Call 
        axios
            .get("http://localhost:4000/users")
            .then(res => this.props.dispatch(add_user(res.data)));
    }

    setContacts = (id) => {
        const newContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContacts })
    }

    render() {
        // console.log(this.props)
        const contacts = this.props.user;
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

function mapStateToProps(state) {
    return {
        "user": state.users,
    }
}


const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Contacts);