import React from 'react';
import './App.css';
import UsersList from './Component/UsersList'
import Form from './Component/Form'
import Home from './Component/Home'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import GetAPIonUserList from './Component/GetAPIonUserList'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar,Nav,Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Components</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"> <Link to="/Component/Home">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/Component/UsersList">UsersList</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/Component/Form">Add Topic</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/Component/GetAPIonUserList">Topics</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#signup"><Button variant="light"><Link to="/Component/SignUp">SignUp</Link></Button></Nav.Link>
      <Nav.Link  href="#login"><Button variant="secondary"><Link to="/Component/Login">Login</Link></Button></Nav.Link>
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
