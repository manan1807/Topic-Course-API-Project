import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, Button } from 'reactstrap'

export default function Header() {
  

  return (
    <div className="NavBar">
     
      <Navbar style={{backgroundColor: '#563d7c'}}  className="py-3 py-lg-4">
        <Nav  className="container-fluid">
          <NavItem className="Navitem">
            <Link to="/react-project-RestAPI-Bootstrap" className="ml-3 text-light ">Home</Link>
          </NavItem>
          <NavItem className="Navitem">
            <Link to="/user-list" className="ml-3 text-light">UsersList</Link>
          </NavItem>
          <NavItem className="Navitem">
            <Link to="/Component/AddTopic" className="ml-3 text-light">AddTopic</Link>
          </NavItem>
          <NavItem className="Navitem">
            <Link to="/showtopic-api" className="ml-3 text-light">Topics</Link>
          </NavItem>
         
          <Nav className="SignUp-Login Navitem">
            <NavItem className="mr-auto">
            <Link to="/Component/SignUp" className="ml-3">
              <Button color="warning"  outline className="mr-3 btn-lg">SignUp</Button>
            </Link>
            </NavItem>
            <NavItem className="mr-auto">
              <Link to="/Component/Login" className="ml-3 ">
                <Button  outline color="success" className="btn-lg">Login</Button>
              </Link>
            </NavItem>
          </Nav>
       </Nav>
      
      </Navbar>
    </div>
  )
}