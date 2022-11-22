import React from 'react'


const Operation = ({ addTodo, addTodoR, textValue, setTextValue, numberValue, setNumberValue }) => {
	return (
		<div className='operation'>
			<div className='operation__title'>
				<p>New entry</p>
			</div>
			<div className='operation__form'>
				<input
					className='operation__form--text'
					type='text'
					placeholder='Enter a description'
					value={textValue}
					onChange={(e) => setTextValue(e.target.value)}
				/>
				<input
					className='operation__form--num'
					type='text'
					placeholder='Enter amount'
					value={numberValue}
					onChange={(e) => setNumberValue(e.target.value)}
				/>
				<div className='operation__buttons'>
					<button
						className='operation__buttons--income'
						onClick={() => {
							addTodo()
						}}
					>
						income
					</button>
					<button
						className='operation__buttons--expenses'
						onClick={() => {
							addTodoR()
						}}
					>
						expenses
					</button>
				</div>
			</div>
		</div>
	)
}

export default Operation
