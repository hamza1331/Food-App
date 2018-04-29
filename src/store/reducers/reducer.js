const initialState={
    orders:[],
    name:'',
    address:'',
    phone:0,
    amount:0,
    index:0,
    email:'admin@check.com',
    pw:'abc@123'
}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'ADD_ORDER':
        let data = [...state.orders]
        data[state.index] = action.payload
        return {...state,orders:data,index:state.index+1}
        case 'CALCULATE_TOTAL':
        return {...state,amount:action.payload}
        case 'ADD_INFO':
        return{...state,...action.payload}
        default:
        return state
    }
}