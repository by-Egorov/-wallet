import React, { useState } from 'react'
import Wallet from './components/Wallet'


function App() {

	const [todo, setTodo] = useState([
		{
			id: 1,
			title: 'получил зарплату',
			num: 30000,
			status: true
		},
		{
			id: 2,
			title: 'оплатил интернет',
			num: 700,
			status: false
		},
		{
			id: 3,
			title: 'у Арсена',
			num: 2500,
			status: true
		},
	])
  return (
    <div className="App">
		<Wallet todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
