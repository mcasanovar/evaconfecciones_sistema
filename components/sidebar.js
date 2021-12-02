import React from 'react'
//componentes
import ClientFilterComponent from '../components/clientFIlter'
import LinkButtonComponent from '../components/linkButton'

const SidebarComponent = () => {
  return (
    <aside className="w-full bg-gray-800 h-20">
      <div className="flex justify-start items-center h-full px-10">
        <ClientFilterComponent />
        <div className="w-full flex justify-end">
          <LinkButtonComponent
            color="blue"
            text="Nuevo Pedido"
            width="40"
            page="/create"
          />
        </div>
      </div>
    </aside>
  )
}

export default SidebarComponent
