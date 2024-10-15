import React from 'react'


const App = () => {
  return (
    <div style={{backgroundColor:"skyblue",minHeight:"100vh",minWidth:"100vh",color:"white",alignItems:"center",display:"flex",flexDirection:"column",marginTop:"0", paddingTop: "50px" }}>
      <h1>TASKIFY</h1>
      <div >
    <input type='text'placeholder='Enter a task'style={{ height:"30px",width:"500px",borderRadius:"22px"}}/>
    </div>

    </div>
  )
}

export default App