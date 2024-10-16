import React from 'react'




const App = () => {
  return (
    <form style={{backgroundColor:"skyblue",minHeight:"100vh",minWidth:"100vh",color:"white",alignItems:"center",display:"flex",flexDirection:"column",marginTop:"0", paddingTop: "50px" }}>
      <h1>TASKIFY</h1>
     
    <input type='text'placeholder='Enter a task'style={{ height:"30px",width:"500px",borderRadius:"22px"}}/>
   <button>Go</button>

    </form>
  )
}

export default App