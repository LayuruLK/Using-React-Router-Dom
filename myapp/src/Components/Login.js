import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css'

const Login = () => {
    const navigate = useNavigate();
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

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (!formData.username || !formData.password) {
            setError("Please Fill All Required Fields!")
            return;
        }

        if (formData.username === 'admin' && formData.password === '123') {
            navigate('/dash');
        } else {
            setError('Invalid username or password!'); 
        }
    }
  return (
    <div className='login'>
      <div className='login-form'>
      {error && <p className="error">{error}</p>}
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
