// import { stat } from 'fs'
import React from 'react'
import { useSelector } from 'react-redux'

const BookContainer = () => {
    const noOfBooks=useSelector(state=>state.NumberOfBooks)

  return (
    <>
    <div>BookContainer</div>
    <h2>No of Books-{noOfBooks}</h2>
    </>
  )
}

export default BookContainer