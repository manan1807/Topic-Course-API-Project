import React from 'react'
import { Table } from 'react-bootstrap'

function UsersList() {

    const users = [
        { name: "Manan", age: 24, city: "Sirsa" },
        { name: "Kunal", age: 25, city: "Delhi" },
        { name: "harshit", age: 26, city: "Haldwani" }

    ]
    return (
        <div className="Backgroundcolor">
            <div>
                <h1>List function Component Using BootStrap</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>

                        </tr>

                    </thead>

                    <tbody>
                        {
                            users.map((item, i) =>
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>)}

                    </tbody>
                </Table>


            </div>
        </div>
    )
}
export default UsersList;