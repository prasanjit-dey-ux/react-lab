// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   username: "prasanjit",
  //   age: 21
  // }

  return (
    <>
      <h1 className = 'bg-pink-500 text-white rounded-xl p-4 '>Tailwind Test</h1>
      <Card username = "Ishani" btnTxt = "Contact me" pic = "https://assets.lummi.ai/assets/QmSD968FiqWrjwiEcMDr1B8RDbS5jGnXrm7GfkKZqdiEZH?auto=format&w=1500"/>
      <Card username = "Riskini" btnTxt = "View Profile" pic = "https://assets.lummi.ai/assets/QmdqTWPM1nAnQ54J3mnZBQWwpT9FXihV3Mg5T33buTpttS?auto=format&w=1500" />
      
    </>
  )
}

export default App
