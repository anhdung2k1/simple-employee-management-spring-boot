import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className = "bg-gray-800">
      <div className = "h-16 flex items-center pl-5">
        <p className="text-white font-bold">
          <Link to="/">Employee Management System</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar
