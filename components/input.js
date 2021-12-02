import React from 'react'

const InputComponent = ({
  id,
  type = "text",
  placeholder = "",
  width = '80',
  onChange
}) => {
  return (
    <input 
      className={`shadow w-${width} bg-gray-200 rounded-sm appearance-none border text-gray-700 leading-tight py-2 px-3 font-bold focus:outline-none focus:shadow-outline`}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}      
    />
  )
}

export default InputComponent
