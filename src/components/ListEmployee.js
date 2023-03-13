import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployee() {

    const [employees, setemployees] = useState([])

    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) =>{
            setemployees(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error))
    }
    const deleteEmployees = (id) =>  {
        console.log(id)
        EmployeeService.deleteEmployee(id).then((response) => {
            getAllEmployees()
            console.log(response);
    }).catch(error => console.log(error))
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Employees List</h2>
        <Link to='/addEmployee' className='btn btn-primary mb-2'>Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Emplyee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td> {employee.id} </td>
                            <td> {employee.firstName} {employee.lastName} </td>
                            <td> {employee.emailId} </td>
                            <td>
                                <Link to={`/editEmployee/${employee.id}`} className='btn btn-info' >Update</Link>
                                <button className='btn btn-danger' onClick={() => {deleteEmployees(employee.id)}} >Delete</button>
                            </td>
                        </tr> 
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee