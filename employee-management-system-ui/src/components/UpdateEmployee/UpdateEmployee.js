import React,{useState, useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import Form from '../widgets/Form';
import Button from '../widgets/Button';
import EmployeeService from '../../services/EmployeeService.js';
const UpdateEmployee = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [employee,setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    }, [employee.id]);
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id).then((res) => {
            navigate("/employeeList");
        }).catch((e) => {
            console.log(e);
        })
    }
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setEmployee({...employee,[e.target.name] : value});
    }

    return (
        <div className = "flex max-w-2xl mx-auto shadow border-b">
            <div className = "px-8 py-8">
                <div className = "font-thin text-2xl tracking-wider">
                    <h1>Update Employee</h1>
                </div>
                <Form title = "First Name" type = "text" name="firstName" value = {employee.firstName} onChange = {(e) => handleChange(e)} />
                <Form title = "Last Name" type = "text" name = "lastName" value = {employee.lastName} onChange = {(e) => handleChange(e)} />
                <Form title = "Email" type = "email" name = "emailId" value = {employee.emailId} onChange = {(e) => handleChange(e)} />
                <div className = "items-center justify-center h-14 w-full my-4">
                  <Button isSave = {true} title_1 = "Update" onClick = {updateEmployee} />
                  <Button isSave = {false} title_2 = "Cancel" onClick = {() => navigate("/employeeList")} />
                </div>
            </div>
        </div>
      )
}

export default UpdateEmployee
