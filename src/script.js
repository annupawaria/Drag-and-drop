import {createStore} from "redux"
import {productslist} from "./productslist"



const initialState={
    products:productslist,
      
    
    cartItems:[],
    wishList:[]
}

function reducer(state=initialState,action){}
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
  