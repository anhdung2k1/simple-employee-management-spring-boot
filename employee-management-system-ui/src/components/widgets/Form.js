import React from 'react';

const Form = ({title,type,name,value,onChange}) => {
  return (
    <div className = "items-center justify-center h-14 w-full mb-5">
        <label className = "block text-gray-600 text-sm font-normal">{title}</label>
        <input
          type= {type}
          name = {name} 
          className = "h-10 w-96 border mt-2 px-2 py-2"
          value = {value}
          onChange = {onChange}
          >
        </input>
    </div>
  )
}

export default Form
