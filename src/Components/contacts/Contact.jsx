import React, { useState } from 'react'
import axios from 'axios';

export default function Contact(props) {
    const [showContact, setShowContact] = useState(false);

    const onDeleteClick = (id) => {
        axios.delete(`http://localhost:4000/users/${id}`).then(res => props.setContacts(id))
    }

    const { id, name, email, phone } = props.contact;
    return (
        <>
            {console.log(showContact)}
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        onClick={() => (setShowContact(!showContact))}
                        className="fas fa-sort-down"
                        style={{ cursor: "pointer" }}
                    />
                    <i
                        className="fas fa-times"
                        style={{ cursor: "pointer", float: "right", color: "red" }}
                        onClick={() => { onDeleteClick(id) }}
                    />
                </h4>
                {showContact &&
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                }
            </div>
        </>
    )
}
