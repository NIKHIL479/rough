import React from 'react'

export const Home = (props) => {
  const {setData}=props
  console.log(props);
  return (
    <div>
      

      <button onClick={()=>{setData("Hello")
       console.log("asdf");}}>click</button>
    </div>
  )
}
export default Home
