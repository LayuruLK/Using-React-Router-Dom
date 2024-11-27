import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = () => {
        if (!formData.username || !formData.password) {
            
        }
    }
  return (
    <div className='login'>
      <div className='login-form'>
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
