import {link} from 'react-router-dom'
import React from 'react'

function Login() {
  return (
      <form className='form'>
      <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info'>
    <div className='form-group m-2'>
    <label htmlFor='email'>email</label>
    <input type='text' className='form-control' placeholder='Enter email'/>
    </div>

    <div className='form-group m-2'>
    <label htmlFor='password'>password</label>
    <input type='password' className='form-control' placeholder='Enter password'/>
    </div>
    <button type='submit' className='btn btn-primary'>
      Login
    </button>
    <div>
    </div>
    </div>
    </form>
  )
}

export default Login