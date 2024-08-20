
import { useState } from 'react'
import './App.css'

function App() {
 
 const [count, setCount] = useState(0)

 function addValue () {

  setCount(count + 1)
    
  // So mainly its a callback function 
  // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
 }
 const removeValue = () => {
  if( count > 0){
    setCount (count - 1)
  }     
 
};

return (
    <>
      <h1> Clicked Value {count}  </h1>
      <button onClick = {addValue}> Add value </button>
      <button onClick = {removeValue}> Remove value</button>

      
    </>
  )
}

export default App
