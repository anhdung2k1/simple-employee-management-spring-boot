import React from 'react'

const Button = ({isSave,title_1,title_2,onClick}) => {
  return (
    isSave === true ?
    <button 
      className = "rounded text-white font-semibold bg-green-400 hover: bg-green-700  py-2 px-6 mr-4"
      onClick = {onClick}
    >
        {title_1}
    </button>
    :
    <button 
      className = "rounded text-white font-semibold bg-red-400 hover: bg-red-700  py-2 px-6 mr-4"
      onClick = {onClick}
      >
        {title_2}
    </button>
  );
}

export default Button
