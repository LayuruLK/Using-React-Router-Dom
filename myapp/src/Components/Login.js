import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = () => {
        if (!formData.username || !formData.password) {
            setError("Please Fill All Required Fields!")
        }

        if (formData.username === 'admin' && formData.password === '123') {
            Navigate('/dash');
        }
    }
  return (
    <div className='login'>
      <div className='login-form'>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='username'
                value={formData.username}
                placeholder='Enter Username'
                onChange={handleChange}
            />

            <input
                type='password'
                name='password'
                value={formData.password}
                placeholder='Enter Password'
                onChange={handleChange}
            />

            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
