import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")


  return (
    <div className="w-full h-screen duration-200" 
    style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-6 py-4 rounded-full border border-gray-200">
            <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-2 rounded-full
             text-white shadow-lg"
            style={{background:"black"}}
            >Black</button>
          
            <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 py-2 rounded-full
             text-white shadow-lg"
            style={{background:"red"}}
            >Red</button>
            <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-2 rounded-full
             text-white shadow-lg"
            style={{background:"Green"}}
            >Green</button>
            <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 py-2 rounded-full
             text-white shadow-lg"
            style={{background:"blue"}}
            >Blue</button>

            <div
            className="relative w-12 h-12 rounded-full 
            border border-grey-300 overflow-hidden"
            style={{ backgroundColor: color}}

            >

            <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className="absolute inset-0 w w-full h-full opacity-0 cursor-pointer "
            
            />

            </div>
            
            <button 
            onClick={() => setColor("White")}
            >Reset Color</button>

          </div>
          
      </div>

    </div>
    
  )
}

export default App
