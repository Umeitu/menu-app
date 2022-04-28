
import {useContext,useEffect,useState} from "react";
import {link,Navigate,useNavigate} from "react-router-dom";
import { AuthContext} from "../contexts/auth.Context";

function Register() {
  const {success, loading, user, authRegister}= useContext(AuthContext);
  const {username, setUsername,}= useState("");
  const {email, setEmail,}= useState("");
  const {password, setPassword}= useState("");
  
  useEffect(() => {
    if (success) {
      Navigate("/home");
    }
  },[success]);
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    authRegister(username, email, password)
  };



  return (
      <form className='form'>
      <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info'>
    <div className='form-group m-2'>
    <label htmlFor='username'>username</label>
    <input type='text' className='form-control' placeholder='Enter username'
    value={username}
    onChange={(e)=>setUsername(e.target.value)
    }
    />
    </div>
    <div className='form-group m-2'>
    <label htmlFor='email'>email</label>
    <input type='text' className='form-control' placeholder='Enter Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)
    }/>
    </div>

    <div className='form-group m-2'>
    <label htmlFor='password'>password</label>
    <input type='password' className='form-control' placeholder='Enter password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)
    }
    />
    </div>
    <button type='submit' className='btn btn-primary'>
    {loading ? "Loading...": "Login"}
    </button>
    <div>
    i already have an Account
    <link to="/" className='nav- link'/>
    </div>
    </div>
    </form>
  )
}

export default Register;