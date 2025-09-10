import React, { useState } from 'react'


const Login = () => {


  const [credentials, setCredentials] = useState({email:"",password:""})
  const hanldeSubmit = async (e) => {
    e.preventDefault()
    // eslint-disable-next-line 
    const responce = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email : credentials.email, password: credentials.password})
    })
    const json = await responce.json()
    console.log(json)
  }

  const handleONchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <div className='container login-form'>
      <form onSubmit={hanldeSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={handleONchange} id="email" name='email' aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={handleONchange} id="password" name='password' />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>    </div>
  )
}

export default Login
