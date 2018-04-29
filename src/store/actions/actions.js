export function addOrder(order){
    return dispatch =>{
        dispatch({
            type:'ADD_ORDER',
            payload:order
        })
    }
}
export function checkState(){
    return dispatch=>{
        dispatch({
            type:'CHECK_STATE'
        })
    }
}
export function addInfo(info){
    return dispatch =>{
        dispatch({
            type:'ADD_INFO',
            payload:info
        })
    }
}
export function calculateTotal(total){
    return dispatch=>{
        dispatch({
            type:"CALCULATE_TOTAL",
            payload:total
        })
    }
}


// export function grabOrders(){
//     return dispatch =>{
//         dispatch({
//             type:'GRAB_ORDERS'
//         })
//     }
// }