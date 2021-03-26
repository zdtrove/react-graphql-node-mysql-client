import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutations'
import { useMutation } from "@apollo/client"

function UpdatePassword() {
    const [username, setUsername] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD)

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <input onChange={e => { setUsername(e.target.value) }} type="text" placeholder="Username..." />
            <input onChange={e => { setCurrentPassword(e.target.value) }} type="password" placeholder="Current Password..." />
            <input onChange={e => { setNewPassword(e.target.value) }} type="password" placeholder="New Password..." />
            <button onClick={() => updatePassword({ variables: { username, oldPassword: currentPassword, newPassword }})}>Update Password</button>
        </div>
    )
}

export default UpdatePassword
