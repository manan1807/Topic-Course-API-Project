import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect, Link} from 'react-router-dom'

export default function SignUp() {
  useEffect(()=>{
    document.title="SignUp Page"
  }, [])
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [actionform, setactionform] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setactionform(true)
  }

  function UserL(){
    if(actionform)
    return <Redirect to = "/Component/Login"/>
    else
    return <Redirect to = "/Component/SignUp"/>
  }

  return (
    <div className="App-header">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            placeholder="Initial Capital"
            onChange={(e) => setName(e.target.value)}
          />
          </Form.Group>
           <Form.Group size="lg" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
          </Form.Group>
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
        <Button  size="lg" type="submit" disabled={!validateForm()} variant="outline-dark">
          SignIn
        </Button>
        <div><Link to="/Component/Login" className="loginLink">Already SignIn, Please Login!!!</Link></div>
      </Form>
      <UserL/>
    </div>
  );
}