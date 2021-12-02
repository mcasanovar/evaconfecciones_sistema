import React from 'react'
//componentes
import LayoutComponent from '../components/layout'
import InputComponent from '../components/input'
import DropdownComponent from '../components/dropdown'

const CreateOrder = () => {
  return (
    <LayoutComponent>
      <div className="w-full min-h-screen flex justify-center items-start">
        <div className="w-1/2 min-h-auto bg-white rounded-md border-1 border-gray-300 shadow-md p-4">
          {/* Titulo */}
          <h1 className="font-bold text-black uppercase flex justify-center mt-4">Crear Nuevo Pedido</h1>
          <br />
          {/* Información */}
          <h1 className="font-bold text-black pl-1">Nombre cliente</h1>
          <div className="w-full mt-2">
            <InputComponent
              id="name"
              type="text"
              placeholder="Nombre del cliente"
              width="full"
              onChange={() => { }}
            />
          </div>
          <br/>
          <h1 className="font-bold text-black pl-1">Telefono cliente</h1>
          <div className="w-full mt-2">
            <InputComponent
              id="phone"
              type="phone"
              placeholder="Teléfono del cliente"
              width="full"
              onChange={() => { }}
            />
          </div>
          <br/>
          <h1 className="font-bold text-black pl-1 flex justify-center">Agregar prendas</h1>
          <div className="w-full flex justify-between">
            <DropdownComponent/>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}

export default CreateOrder
