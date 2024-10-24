import React from 'react'
import {Provider} from 'react-redux'
import store from "./reduxcontainer/Store"
import BookContainer from './reduxcontainer/BookContainer'




const App = () => {
  return (
    <Provider store={store}>
    <div>
      <BookContainer/>
    </div>

    </Provider>  )
}

export default App