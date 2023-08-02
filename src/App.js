import React,{useRef,useState,useEffect} from 'react'

export const App = () => {
  const o={name:"nik"}
  const [c,setc]=useState(0)
  useEffect(()=>{
    console.log("changed");

  },[o])

  
  return (
    <div>
      {c}
      <button onClick={()=>{setc(c+1)}}>update</button>

      
    </div>
  )
  }
export default App
