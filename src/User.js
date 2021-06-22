import React from 'react'
import { Card } from 'react-bootstrap'

export default function User({ user }) {
    return (
        <div>
            <p>user.name.first</p>
        </div>
        // <Card>
        //     <Card.Body>
        //         <div>
        //             <Card.Name>
        //                 {user.name.first} {user.name.last}
        //             </Card.Name>
        //         </div>
        //         <div>
        //             <Card.Phone>
        //                 {user.phone} {user.phone}
        //             </Card.Phone>
        //         </div>
        //         <div>
        //             <Card.Email>
        //                 {user.email} {user.email}
        //             </Card.Email>
        //         </div>
        //         <div>
        //             <Card.DOB>
        //                 {user.dob} {user.dob}
        //             </Card.DOB>
        //         </div>
        //     </Card.Body>
        // </Card>
    )
}