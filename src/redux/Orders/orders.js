import SimulationDataOrders from "../../constant/Orders";

//Initial data
const initialData = {
    array: []
}

//Constants
const SHOW_ORDERS_SUCCESFULLY = 'SHOW_ORDERS_SUCCESFULLY';
const SHOW_ORDERS_ERROR = 'SHOW_ORDERS_ERROR'

//Reducer
export default function OrdersReducer(state = initialData, action) {
    switch (action.type) {
        case 'SHOW_ORDERS_SUCCESFULLY':
            return { ...state, array: action.payload }
        case 'SHOW_ORDERS_ERROR':
            return state
        default:
            return state
    }
};

//Actions
export const ShowOrdersAction = () => (dispatch) => {
    try {
        //simulation about REST API query
        const res = SimulationDataOrders;
        dispatch({
            type: SHOW_ORDERS_SUCCESFULLY,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: SHOW_ORDERS_ERROR,
        });
    }
};

export const InsertOrderAction = (newOrder) => (dispatch) => {
    try {
        SimulationDataOrders.push(newOrder);
        const res = SimulationDataOrders;
        dispatch({
            type: SHOW_ORDERS_SUCCESFULLY,
            payload: res
        });
    } catch (error) {
        dispatch({
            type: SHOW_ORDERS_ERROR,
        });
    }
}

export const ModifyOrderAction = (order) => (dispatch) => {
    try {
        const result = SimulationDataOrders.map(function (element) {
            if (element._id === order._id) {
                element.nombre_cliente = order.nombre_cliente;
                element.rut_cliente = order.rut_cliente;
                element.telefono_cliente = order.telefono_cliente;
                element.estado_pedido = order.estado_pedido;
                element.fecha_entrega = order.fecha_entrega;
                element.comentario = order.comentario;
                element.total = order.total;
                element.color_proceso = order.color_proceso;
                element.detalle = order.detalle;
                element.porcentaje_avance = order.porcentaje_avance;
            }

            return element;
        });

        dispatch({
            type: SHOW_ORDERS_SUCCESFULLY,
            payload: result
        });

    } catch (error) {
        dispatch({
            type: SHOW_ORDERS_ERROR,
        });
    }
}

export const DeleteOrderAction = (id) => (dispatch) => {
    try {
        const result = SimulationDataOrders.filter(element => element._id !== id);
        dispatch({
            type: SHOW_ORDERS_SUCCESFULLY,
            payload: result
        });
    } catch (error) {
        dispatch({
            type: SHOW_ORDERS_ERROR,
        });
    }
}