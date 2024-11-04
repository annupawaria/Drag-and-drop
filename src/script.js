import {createStore} from "redux"
console.log(createStore)

let reduxState={
    post:0,
    name:"annu malik",
    age:26,
}
const initialState={
    products:[
        {
            id:1,
            title:"t-shirt",
            price:500,
            description:"hf sdfh hkjhdkfh",
            rating:{count:100,value:3.4},
            imageurl:"hgfh"
        },
    ],
    cartItems:[]
}

function reducer(state,action){
  if(action.type ==='post/increment'){
  return{...state,post:state.post+1}
  
}
else if(action.type === "post/decrement"){
    return{...state,post:state.post-1}
}
}
reduxState=reducer(reduxState,{type:'post/increment'})
console.log(reduxState)
reduxState=reducer(reduxState,{type:'post/increment'})
console.log(reduxState)
reduxState=reducer(reduxState,{type:'post/decrement'})
console.log(reduxState)