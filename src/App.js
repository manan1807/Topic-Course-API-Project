import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './Component/UsersList'
import Form from './Component/Form'
import Home from './Component/Home'
import GetAPIonUserList from './Component/GetAPIonUserList'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Components</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"> <Link to="/Component/Home">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/Component/UsersList">UsersList</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/Component/Form">Form</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/Component/GetAPIonUserList">GETRequest</Link></Nav.Link>
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
        </Switch>  
        
        
      {/* <UsersList/> */}
      {/* <Form/> */}
      </Router> 
    </div>
  );
}

export default App;
