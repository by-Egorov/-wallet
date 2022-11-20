import React, { useState, useEffect } from 'react'
import Wallet from './components/Wallet'



function App() {

	const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
	
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])


  return (
    <div className="App">
		<Wallet todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
