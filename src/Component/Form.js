import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default function TopicAdd() {
  const [id, setTopicId] = useState("");
  const [name, setTopicName] = useState("");
  const [description, setTopicDesc] = useState("");
  const [actionform, setactionform] = useState(false);

  function validateForm() {
    return id.length > 0 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setactionform(true)
    let data = {id, name, description}
    console.log(data)
    axios.post('http://localhost:8081/addtopic', data)
        .then(response => {
            console.log(response)
            alert("Topic has been added to the List!, Check it into Topic tab")
            })
            .catch(error => {
              console.log(error)
            })
            ;
  
  }

  function UserL(){
    if(actionform)
    return <Redirect to = "/Component/GetAPIonUserList"/>
    else
    return <Redirect to = "/Component/Form"/>
  }

  return (
    <div className="App-header">
      <Form onSubmit={handleSubmit}>
  
           <Form.Group size="lg" controlId="age">
          <Form.Label>Topic ID</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            value={id}
            placeholder="Enter Topc ID"
            onChange={(e) => setTopicId(e.target.value)}
          />
            </Form.Group>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Topic Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            placeholder="Initial Capital"
            onChange={(e) => setTopicName(e.target.value)}
          />
          </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Description</Form.Label>
          <Form.Control
            autoFocus
            as="textarea"
            value={description}
            placeholder="External Info"
            onChange={(e) => setTopicDesc(e.target.value)}
          />
        </Form.Group>
        
        <Button  size="lg" type="submit" disabled={!validateForm()} >
          ADD
        </Button>
        {/* <div><Link to="/Component/Login">Already SignIn, Please Login!!!</Link></div> */}
      </Form>
      <UserL/>
    </div>
  );
}