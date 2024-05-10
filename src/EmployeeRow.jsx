import React from 'react'


function EmployeeRow(props) {
    function onDeleteClick() {
        props.deleteEmployee(props.employee._id)
    }
    return(
        <tr>
            <td>{props.employee.name}</td>
            <td>{props.employee.extension}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.title}</td>
            <td>{props.employee.dateHired.toDateString()}</td>
            <td>{props.employee.currentlyEmployed ? 'Yes' : 'No'}</td>
            <td><button onClick={onDeleteClick}>DELETE</button></td>
        </tr>
    )
}
export default EmployeeRow