import React, { useState } from  "react";
import { Link } from "react-router-dom";
import './Register.css';
const Register =(props) =>
{
    //const [email,setEmail] = useState('');
    //const [password,setPassword] = useState('');
    //const [username,setName] = useState('');
    const handleSubmit =(e) =>
    {
        e.preventDefault();
        console.log(email);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setName] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({  email,password,username }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setPassword("");
            setName("");
        }
    }
    return (
        <div className="body">
    <div className="auth-form-container">
        <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label HtmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label HtmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            <label HtmlFor="username">UserName</label>
            <input value={username} onChange={(e) => setName(e.target.value)} name="username" placeholder="UserName" />
            <button type="submit" onClick={handleOnSubmit} ><b><Link style={{textDecoration:'none'}}to='/'>Register</Link></b></button>
        </form>
        <button className="link-btn">Already have an account ? <u><Link style={{textDecoration:'none'}} to='/Login'>Login</Link></u></button>
    </div>
    </div>
    )
}
export default Register;
