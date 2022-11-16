import React from 'react'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import Operation from './components/Operation/Operation'
import Story from './components/Story/ Story'

function App() {
  return (
    <div className="App">
		<Header/>
		<Balance/>
		<Story/>
		<Operation />
    </div>
  )
}

export default App
