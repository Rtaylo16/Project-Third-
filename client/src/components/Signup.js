import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import API from "../Utils/API";

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const  [error, setError]=useState("")
    const [redirect, setRedirect]=useState(false)
    const passwordHandler =event=>{
        event.preventDefault()
        if(password === password2){
            if(password.length > 4){
                setError("")
            const userInfo ={
                email: email,
                password: password
            }
            
            
            API.User.signup(userInfo)
            .then(res=>{
                setRedirect(true)
            })
        }else{
            setError("Password must be at least 5 characters")
        }
        }else{
            setError("Passwords must match")
        }
    }
  return (
    <div className="card">
        {redirect && (<Redirect to="/login"/>)}
      {error?<h2>{error}</h2>:null}
      <form>
        <input type="email" placeholder="email" value ={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" value ={password} onChange={e=>setPassword(e.target.value)} />
        <input type="password" placeholder="password again" value ={password2} onChange={e=>setPassword2(e.target.value)} />
        <button onClick={passwordHandler}>Sign Up</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}

export default Signup;