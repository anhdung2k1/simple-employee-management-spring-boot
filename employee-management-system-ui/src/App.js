import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import AddEmployee from './components/AddEmployee/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee/UpdateEmployee';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList/EmployeeList';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element = {<EmployeeList />} />
          <Route path = "/" element = {<EmployeeList />} />
          <Route path = "/employeeList" element = {<EmployeeList />} />
          <Route path = "/addEmployee" element = {<AddEmployee />} />
          <Route path = "/editEmployee/:id" element = {<UpdateEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
