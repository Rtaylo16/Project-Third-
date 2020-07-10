import React,{useState, useContext} from "react";
import { Link, Redirect } from 'react-router-dom';
import API from "../Utils/API";
import AuthContext from '../context/authContext'
//import logoImg from "../img/logo.jpg";
// import { Card, Logo, Form, Input, Button } from './components/AuthForms';

function Login() {
    const authC = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [redirect, setRedirect] = useState(false)
    const submitHandler =event=>{
        event.preventDefault()
        API.User.login({email:email, password:password})
        .then(res=> {
            setError("You are logged in")
            console.log(res.data)
            authC.onLogin(res.data)
            setRedirect(true)
        })
        .catch(res=>setError('Please try again you information does not match our records'))
    }
    return (
        
        <div className='card'>
            {redirect && (<Redirect to="/"/>)}
            {error?<h2>{error}</h2>:null}
            <form>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={submitHandler}> Sign In</button>
            </form>
            <Link to="/signup">Don't have an account?</Link>
        </div>
    );
}

export default Login;