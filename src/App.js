import React from 'react';
import './App.css';
import UsersList from './Component/UsersList'
import Form from './Component/Form'
import Home from './Component/Home'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import GetAPIonUserList from './Component/GetAPIonUserList'
import {Link, Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar,Nav,Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Components</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} href="#home" to="/Component/Home">Home</Nav.Link>
      <Nav.Link as={Link} href="#features" to="/Component/UsersList">UsersList</Nav.Link>
      <Nav.Link as={Link}href="#pricing" to="/Component/Form">Add Topic</Nav.Link>
      <Nav.Link as={Link} href="#pricing" to="/Component/GetAPIonUserList">Topics</Nav.Link>
    </Nav>
    <Nav>
    <Button variant="primary"> <Nav.Link as={Link} href="#signup"to="/Component/SignUp">SignUp</Nav.Link></Button>
    <Button variant="success"><Nav.Link  as={Link} href="#login" to="/Component/Login">Login</Nav.Link></Button>
      </Nav>
  </Navbar>

  <Switch>
          <Route path="/Component/Home">
            <Home />
          </Route>
          <Route path="/Component/UsersList">
            <UsersList />
          </Route>
          <Route path="/Component/Form">
            <Form />
          </Route>
          <Route path="/Component/GetAPIonUserList">
            <GetAPIonUserList />
          </Route>
          <Route path="/Component/Login">
            <Login />
          </Route>
          <Route path="/Component/SignUp">
            <SignUp />
          </Route>
        </Switch>  
        
        
      {/* <UsersList/> */}
      {/* <Form/> */}
      </Router> 
    </div>
  );
}

export default App;
