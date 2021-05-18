import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

function GetAPIonUserList() {

    const [topics, settopics] = useState([]);

    useEffect(() => {
        document.title = "Topics"
        fetch("http://localhost:8081/topics").then((data) => {
            data.json().then(result => {
                console.warn(result);
                settopics(result)
            })
        })
    }, [])
    return (
        <div className="Backgroundcolor">
           <div>
            <h1>List function Component Using BootStrap</h1>
            <h2><u>Data will be displayed, when API server is Up!</u></h2>


            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Select to View Courses</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        topics.map((topic) =>
                            <tr >
                                <td>{topic.id}</td>
                                <td>{topic.name}</td>
                                <td>{topic.description}</td>
                                <Link to = {`/ViewCourses/${topic.id}`}> <Button outline color="primary">View Courses</Button></Link>

                            </tr>)}

                </tbody>
            </Table>


            </div>
        </div>
    )
}
export default GetAPIonUserList;