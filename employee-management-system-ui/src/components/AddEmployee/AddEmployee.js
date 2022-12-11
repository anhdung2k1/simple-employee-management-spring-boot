import React,{useState} from 'react';
import Form from '../widgets/Form';
import Button from '../widgets/Button';
import EmployeeService from '../../services/EmployeeService.js';
import {useNavigate } from 'react-router-dom';
const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee,setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmployee({...employee,[e.target.name] : value});
  };

  const saveEmployee = (e) => {
    e.preventDefault(); //Handle prevent to refresh the page
   EmployeeService.saveEmployee(employee).then((response) => {
    navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };
  const clearEmployee = (e) => {
    e.preventDefault();
    setEmployee(
     { id: "",
      firstName: "",
      lastName: "",
      emailId: "",}
    );
  }

  return (
    <div className = "flex max-w-2xl mx-auto shadow border-b">
        <div className = "px-8 py-8">
            <div className = "font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <Form title = "First Name" type = "text" name="firstName" value = {employee.firstName} onChange = {(e) => handleChange(e)} />
            <Form title = "Last Name" type = "text" name = "lastName" value = {employee.lastName} onChange = {(e) => handleChange(e)} />
            <Form title = "Email" type = "email" name = "emailId" value = {employee.emailId} onChange = {(e) => handleChange(e)} />
            <div className = "items-center justify-center h-14 w-full my-4">
              <Button isSave = {true} title_1 = "Save" onClick = {saveEmployee} />
              <Button isSave = {false} title_2 = "Clear" onClick = {clearEmployee} />
            </div>
        </div>
    </div>
  )
}

export default AddEmployee
