import React from 'react'

const DropDownComponent = () => {
  return (
    <label className="block text-left">
      <span className="text-gray-700">Colegios</span>
      <select className="form-select block w-60 mt-1 p-2 rounded-md ">
        <option className="font-bold uppercase">Seleccionar...</option>
        <option className="font-bold uppercase">Santa Teresa</option>
        <option className="font-bold uppercase">San Ignacio</option>
      </select>
    </label>
  )
}

export default DropDownComponent
