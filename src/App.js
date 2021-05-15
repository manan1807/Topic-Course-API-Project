import React from 'react';
import { Col, Row } from 'reactstrap';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import UsersList from './Component/UsersList';
import AddTopic from './Component/AddTopic';
import GetAPIonUserList from './Component/ShowTopicAPI';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { Courses } from './Component/ViewCourses';

function App() {
  return (
    <div className="App">
      <Router>

        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Route path="/react-project-RestAPI-Bootstrap" component={Home} exact />
            <Route path="/user-list"  exact ><UsersList/></Route>
            <Route path="/Component/AddTopic"  exact ><AddTopic/></Route>
            <Route path="/showtopic-api" component={GetAPIonUserList} exact />
            <Route path="/Component/Login" exact ><Login/></Route>
            <Route path="/Component/SignUp" exact ><SignUp/></Route>
            <Route path="/viewCourses/:topicId" exact ><Courses/></Route>
          </Col>
        </Row>

      </Router>
    </div>
  );
}

export default App;
