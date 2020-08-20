export default [
    {
        _id: 'HGHG56563TD5DFGD535GD',
        numero: 1,
        nombre_cliente: 'Mario Casanova Ramirez',
        rut_cliente: '17642868-6',
        telefono_cliente: '951282015',
        estado_pedido: 'En Proceso',
        color_proceso: 'warning',
        fecha_pedido: '01-07-2020',
        comentario: 'Pedido Normal',
        fecha_entrega: '03-agosto-2020',
        total: 5900,
        porcentaje_avance: 0,
        detalle: [
            {
                id: 'KJBHF655DVDFRWV3',
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
        nombre_cliente: 'Mario Casanova Ramirez',
        rut_cliente: '17642868-6',
        telefono_cliente: '951282015',
        estado_pedido: 'Completado',
        color_proceso: 'success',
        fecha_pedido: '03-05-2020',
        comentario: 'Pedido Normal',
        fecha_entrega: '05-marzo-2020',
        total: 10800,
        porcentaje_avance: 100,
        detalle: [
            {
                id: 'JCCHF37HCFG6SDG6666FGF',
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
                id: 'KJBHFSFWEJKIFJDIJ655DVDFRWV3',
                terminado: true,
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