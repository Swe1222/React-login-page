import React, { useState } from  "react";
import cover_image from './cover_image.jpg';
import './Login.css';
import { useNavigate,Link } from "react-router-dom";    
import Register from "./Register";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Validation from './Loginvalidation.js';
const Login =(props) =>
{
    //const { user } = useAuth0();
    //const handleLogin = async (e) => {
        //e.preventDefault();
    
        /*try {
          await axios.post("http://localhost:3001/Loginpage", { email, password });
          localStorage.setItem("login", "true");
          props.history.push("/home");
        } catch (error) {
          console.error("Error registering user", error);
        }*/
      //}
    /*let navigate=useNavigate();*/
    const [values,setValues]=useState({
        email: '',
        password: ''
    })
    const [action,setAction]=useState("Login");
    //const [email,setEmail] = useState('');
    //const [password,setPassword] = useState('');
    const [errors,setErrors]=useState({});
    const handleSubmit =(e) =>
    {
        e.preventDefault();
        console.log(email);
        setErrors(Validation(values));
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect or perform other actions upon successful login
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Server error');
    }
  };

   
    /*const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/Register', {
            method: "post",
            body: JSON.stringify({ email, password }),
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
        }
    }
    //const { loginWithRedirect, isAuthenticated } = useAuth0();
    /*const handleInput=(e)=>
    {
        setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
    }*/
    /*axios.post('http://localhost:8081/login',{email,password})
    .then(res =>console.log(res))
    .catch(err => console.log(err));*/
    return (
        
        <div className="body">
        <div className="merge">
            <div>
            <img src={cover_image}></img>
            </div>
        <div className="auth-form-container">
            <h1>LOGIN</h1>
        <form className="login-form" action="" onSubmit={handleSubmit}>
            <label HtmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            
            <label HtmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            <button type="submit" onClick={handleLogin}><Link style={{textDecoration:'none'}}to='/'><b>Log In</b></Link></button>      
        </form>
        
        <button className="link-btn">Don't have an account ? <u><Link style={{textDecoration:'none'}} to='/Register' >Register</Link></u></button>

        </div>  
        </div>
        </div>
    )
    
}
export default Login;
