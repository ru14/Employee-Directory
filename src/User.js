import React from 'react'

export default function User({user}){
    return(
        <div>
<p>{user.name.first} {user.name.last}</p>
        </div>
    )
}