import React from 'react'
import { Table } from 'reactstrap';

const courses = {id:"1", name:"course1", description:"description1"};

export  const Courses = () => {

    return(

        <div className="Backgroundcolor">
            <h1>
               Courses....
            </h1>
            <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            courses.map(course =>
                                <tr>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                </tr>
                                
                                )}

                    </tbody>
                </Table>

        </div>
    )
}

