import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

function GetAPIonUserList() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        document.title = "Topics"
        fetch("http://localhost:8081/topics").then((data) => {
            data.json().then(result => {
                console.warn(result);
                setUser(result)
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
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((item, i) =>
                            <tr key={i}>

                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <Link to = "/ViewCourses"> <Button outline color="primary">View Courses</Button></Link>

                            </tr>)}

                </tbody>
            </Table>


            </div>
        </div>
    )
}
export default GetAPIonUserList;