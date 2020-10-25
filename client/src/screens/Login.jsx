import React, { useState } from 'react'

export default function Login() {
    const [formData, setFormData] = useState({
        usename: "",
        password: ""
    })

    const {username, password} = formData

    const handleChange = (e) => {
        setFormData(e)
    }

    return (
        <form>
            <label>
                Username:
                <br />
            <input
            type="text"
            value={username}
            name=""
            onChange={handleChange}
            />
            </label>
            <br />
            <br />
            <label>
                Password:
                <br />
            <input
            type="text"
            value={password}
            name=""
            onChange={handleChange}
            />
            </label>
            <br />
            <br />
            <button>Login</button>
        </form>
    )
}
