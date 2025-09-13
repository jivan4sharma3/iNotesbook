import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom";


const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let history = useNavigate();

  const hanldeSubmit = async (e) => {
    e.preventDefault()
    // eslint-disable-next-line 
    const { name, email, password } = credentials
    const responce = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await responce.json()
    console.log(json)
    if (json.success) {
      // Save the authToken and redirect 
      localStorage.setItem('token', json.authToken)
      history("/");
      props.showAlert("Account Created Successfully ","success")
    }
     else {
      props.showAlert("Invalide Details","Error")
    }
  }

  const handleONchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }




  return (
       <div className='container login-form mt-3'>
      <h2>Create a account use iNoteBook</h2>
      <form onSubmit={hanldeSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={handleONchange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' onChange={handleONchange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleONchange} name='password' id="password" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Comform Password</label>
          <input type="password" className="form-control" onChange={handleONchange} name='cpassword' id="cpassword" minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
