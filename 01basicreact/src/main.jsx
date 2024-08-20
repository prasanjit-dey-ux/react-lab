import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//     return(
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     )
// }

const anotherUser = 'Coffe kahyenge'
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank' },
    'Click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
    // <App />
)
