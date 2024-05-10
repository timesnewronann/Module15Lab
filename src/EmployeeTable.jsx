import React from 'react'
import EmployeeRow from './EmployeeRow.jsx'

function EmployeeTable(props) {
    const employeeRows = props.employees.map((employee) =>
        <EmployeeRow 
            key = {employee._id} 
            employee={employee}
            deleteEmployee={props.deleteEmployee} />)

    return (
        <table className ="bordered-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed?</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )

  
}

export default EmployeeTable