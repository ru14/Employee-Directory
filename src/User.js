import React from 'react'
import { Card } from 'react-bootstrap'

export default function User({ user }) {
    return (
        // <div>
        //     <p>user.name.first</p>
        // </div>
        <Card>
            <Card.Body>
                <div>
                    <Card.Title>
                        Employee Name: {user.name.first} {user.name.last}
                    </Card.Title>
                </div>
                <div>
                    Phone: {user.phone} 
                </div>
                <div>
                    Email: {user.email} 
                </div>
                <div>
                    Employee D.O.B: {user.dob.date} {user.dob.date}
                </div>
                <div>
                    <img alt={user.name}src={user.picture.medium}/>
                </div>
            </Card.Body>
        </Card>
    )
}