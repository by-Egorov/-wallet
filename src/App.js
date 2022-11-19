import React, { useState } from 'react'
import Wallet from './components/Wallet'



function App() {

	const [todo, setTodo] = useState([])


  return (
    <div className="App">
		<Wallet todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
