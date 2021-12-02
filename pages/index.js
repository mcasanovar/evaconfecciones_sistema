//componentes
import LayoutComponent from '../components/layout'
import CardComponent from '../components/card'
import ButtonComponent from '../components/button'

const Index = () => {
  return (
    <div>
      <LayoutComponent>
        <div className="w-full px-10">
          <CardComponent
            borderColor="green"
          >
            {/* Nro de pedido y nombre del cliente */}
            <div className="w-full flex justify-between">
              <h3 className="uppercase font-bold pr-2"> Pedido #1 </h3>
              <h3 className="uppercase font-bold"> mario casanova</h3>
            </div>
            <div className="pt-4">
              <h3 className="uppercase font-bold pr-2"> Información</h3>
            </div>
            {/* Fecha de creación y última actualizacion*/}
            <div className="w-full flex justify-between">
              {/* Fecha creación */}
              <div className="pt-2">
                <h3 className="uppercase"> Fecha Creación</h3>
                <h3> 13-06-2021 14:55</h3>
              </div>
              {/* Fecha última actualización */}
              <div className="pt-2">
                <h3 className="uppercase">Ultima actualización</h3>
                <h3 className="text-right"> 13-06-2021 15:54</h3>
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* Total de items*/}
            <div className="w-full flex justify-end">
              <h3 className="pr-2">Cantidad de prendas:</h3>
              <h3 className="uppercase font-bold">5</h3>
            </div>
            {/* Precio total */}
            <div className="w-full flex justify-end pt-2">
              <h3 className="pr-2 uppercase font-bold">Total:</h3>
              <h3 className="uppercase font-bold">$65.670</h3>
            </div>
            <br />
            <br />
            {/* Estado */}
            <div className="w-full flex justify-start">
              <h3 className="font-bold pr-2">Estado:</h3>
              <h3 className="font-bold text-green-500">Listo</h3>
            </div>
            <br />
            {/* Botones */}
            <div className="w-full flex justify-between">
              <ButtonComponent
                color="blue"
                text="Ver Detalle"
                width="5/12"
                icon="details"
                onClick={() => { }}
              />
              <ButtonComponent
                color="red"
                text="Eliminar"
                width="5/12"
                icon="delete"
                onClick={() => { }}
              />
            </div>
          </CardComponent>
        </div>
      </LayoutComponent>
    </div>
  )
};

export default Index;
