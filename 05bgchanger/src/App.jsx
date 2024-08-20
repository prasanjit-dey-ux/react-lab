import { useState } from "react"

function App() {
  let [col, setCol] = useState()

  function handleClick() {
    console.log("hii");
    
    setCol(col = "black")
  }
 
  return (
    <>
    <div id="black" className="bg-slate-900" ></div>

    <button onClick={handleClick}>Dark mode</button>
    
    </>
  )
}

export default App
