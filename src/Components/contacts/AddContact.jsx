import React, { Component } from 'react'
import Axios from 'axios';
import uuid from "uuid";
// import { super } from '@babel/types';

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const body = {
            id: uuid(),
            name,
            email,
            phone
        }
        Axios.post("http://localhost:4000/users", body).then(res => { this.props.history.push("/") })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    Name: <input type="text" name="name" onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
                    <br />
                    Email: <input type="text" name="email" onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
                    <br />
                    Phone: <input type="text" name="phone" onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
