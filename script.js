const redux =  require('redux');
const createStore = redux.createStore;
const ORDER_PIZZA = 'ORDER_PIZZA'

// Action
// const action = {
//     type:ORDER_PIZZA,
//     shop_name:'pizza shop'
// }

// Action Creator
function orderPiazza(){
    return {
        type:ORDER_PIZZA,
        payload:90
    } 
}

// Reducer 
const initialState = {
    pizzaBase:100,
}

const reducer=(state=initialState ,action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase:state.pizzaBase-1
            }
        default:
            return state;
    }
}

// STORE
// 1- Store needs to hold applocation state

const store = createStore(reducer)

// 2- it exposes a method called getState which gives your application access to the current state in the store.
console.log('Initial State', store.getState());

// 3- Registers listeners via subscribe(listener)
store.subscribe(()=>console.log('Updated State',store.getState()))

// 4- Allows state to be update via dispatch(action)

// 執行orderPiazza()得到一個有type的action物件，store.dispatch將這個action發送給store，store收到action後會調用reducer，並且把state、action傳入(即執行reducer)
// reducer用type判斷並計算返回新的state
// store更新reducer返回的新state，最後觸發subscribe註冊的監聽器
store.dispatch(orderPiazza())