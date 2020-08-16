export default [
    {
        _id: 'HGHG56563TD5DFGD535GD',
        numero: 1,
        id_cliente: 'HH66RFFTFE6DGDT',
        nombre_cliente: 'Mario Casanova Ramirez',
        rut_cliente: '17642868-6',
        telefono_cliente: '951282015',
        estado_pedido: 'En Proceso',
        color_proceso: 'warning',
        fecha_pedido: '2020-05-15',
        comentario: 'Pedido Normal',
        fecha_entrega: '2020-07-03',
        total: 5900,
        detalle: [
            {
                terminado: false,
                establecimiento: 'Santa Teresa',
                prenda: 'Falda',
                talla: '2',
                precioNumber:  5900,
                precioString: '$ 5.900',
                cintura: '25',
                cadera: '12',
                largo: '10',
                manga: '',
                basta: '2'
            }
        ]
    },
    {
        _id: 'HHYTGF6653FD5DGHF64',
        numero: 2,
        id_cliente: 'HH66RFFTFE6DGDT',
        nombre_cliente: 'Mario Casanova Ramirez',
        rut_cliente: '17642868-6',
        telefono_cliente: '951282015',
        estado_pedido: 'Completado',
        color_proceso: 'success',
        fecha_pedido: '2020-05-15',
        comentario: 'Pedido Normal',
        fecha_entrega: '2020-07-03',
        total: 10800,
        detalle: [
            {
                terminado: true,
                establecimiento: 'Santa Teresa',
                prenda: 'Falda',
                talla: '4',
                precioNumber:  5900,
                precioString: '$ 5.900',
                cintura: '',
                cadera: '',
                largo: '',
                manga: '',
                basta: ''
            },
            {
                terminado: false,
                establecimiento: 'Santa Teresa',
                prenda: 'Falda',
                talla: '2',
                precioNumber:  5900,
                precioString: '$ 5.900',
                cintura: '',
                cadera: '',
                largo: '',
                manga: '',
                basta: ''
            }
        ]
    }
]