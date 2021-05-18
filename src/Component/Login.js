import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  useEffect(() => {
    document.title = "Login Page"
  }, [])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [actionform, setactionform] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let data = { email, password}
    console.log(data)
    await axios.post('http://localhost:8081/login', data)
    .then((response) => {
      if(response.status === 200){
      setactionform(true);
      console.log(response.data);
    }
    })
    .catch((error) =>{
      console.log('error : '+ error.response.status);
      if(error.response.status === 401){
      alert("Password is incorrect");
      setactionform(false);
    }
    else if(error.response.status === 404){
      alert("User Not registered, please signup first ");
      setactionform(false);
    }
    })
    .then((data) =>{
      console.log(data);
    })
          };
            
  

  function UserL() {
    if (actionform)
      return <Redirect to="/react-project-RestAPI-Bootstrap" />
    else
      return <Redirect to="/Component/Login" />
  }

  return (
    <div className="App-header">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="abc@123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" type="submit" disabled={!validateForm()} className="mr-3" variant="outline-dark">
          Login
        </Button>
        <div><Link to="/Component/SignUp" className="loginLink" >Don't Have an Account, Please SignUp!!!</Link></div>
      </Form>
      <UserL />
    </div>
  );
}