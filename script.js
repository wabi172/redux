const ORDER_PIZZA = 'ORDER_PIZZA'

// Action
// const action = {
//     type:ORDER_PIZZA,
//     shop_name:'pizza shop'
// }

// Action Creator
function ORDER_PIZZA(){
    return {
        type:ORDER_PIZZA,
        shop_name:'pizza shop'
    } 
}

// Reducer 
const initialState = {
    pizzaBase:100,
    toppings:['cheese','capsicum']
}

const reducer=(state=initialState ,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase:pizzaBase-1
            }
        default:
            return state;
    }
}