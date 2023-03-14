import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AddEmployee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    const saveOrEditEmployee = (e) => {
        e.preventDefault();
        const  employee = {firstName, lastName, emailId}
        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate("/");
                console.log(response.data);
            }).catch(error => console.log(error));
        }
        else{
            EmployeeService.createEmployee(employee).then((response) => {
                navigate("/");
                console.log(response.data);
            }).catch(error => console.log(error));
        }
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => console.log(error));
    }, [])

    const formTitle = () => {
        if(id) return <h2 className='text-center'>Update Employee</h2>
        return <h2 className='text-center'>Add Employee</h2>
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    formTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name </label>
                            <input 
                                type='text' 
                                placeholder='Enter First Name' 
                                name='firstName'
                                className='form-control' 
                                value={firstName}
                                onChange= {(e) => setFirstName(e.target.value)}> 
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name </label>
                            <input 
                                type='text' 
                                placeholder='Enter Last Name' 
                                name='LastName'
                                className='form-control' 
                                value={lastName}
                                onChange= {(e) => setLastName(e.target.value)}> 
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input 
                                type='text' 
                                placeholder='Enter Email' 
                                name='emailId'
                                className='form-control' 
                                value={emailId}
                                onChange= {(e) => setEmailId(e.target.value)}> 
                            </input>
                        </div>
                        <button className='btn btn-success' onClick={(e) => saveOrEditEmployee(e)}>Submit</button>
                        <Link to='/' className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee