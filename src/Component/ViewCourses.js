import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import {useParams} from 'react-router' 
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'


export const Courses = () => {

    const [courses , setCourses] = useState([]);
    
    const {topicId} = useParams();

    useEffect(()=>{
        document.title = "Courses"
        const fetchCourses = async () => {
            const response = await fetch(`http://localhost:8081/topics/${topicId}/courses`);
            const data = await response.json();
            console.log(data);
            setCourses(data);
          };
          fetchCourses();
        }, []
    );
    return (

        <div className="Backgroundcolor">
            <h1>
                Showing Courses of topicId:  {topicId}
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Select to View Lessons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map(course =>
                            <tr>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.description}</td>
                                <Link to = {`/viewLessons/${course.id}`}> <Button outline color="info">View Lessons</Button></Link>

                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    )
}

