import React,{useState} from 'react'
import { Table } from 'react-bootstrap'

function FormTable(props){
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>)}

                </tbody>
            </Table>
        </div>

    )
}
export default FormTable;