// import React, { useState, useEffect } from 'react'

// const Wallet = ({ todo, setTodo }) => {
// 	const [textValue, setTextValue] = useState('')
// 	const [numberValue, setNumberValue] = useState('')
// 	const money = '₽'
// 	const [date, setDate] = useState(
// 		JSON.parse(localStorage.getItem('date')) || ''
// 	)

// 	useEffect(() => {
// 		localStorage.setItem('date', JSON.stringify(date))
// 	}, [date])

// 	const [countplus, setCountplus] = useState(
// 		JSON.parse(localStorage.getItem('countplus')) || 0
// 	)

// 	useEffect(() => {
// 		localStorage.setItem('countplus', JSON.stringify(countplus))
// 	}, [countplus])
// 	const [countminus, setCountminus] = useState(
// 		JSON.parse(localStorage.getItem('countminus')) || 0
// 	)

// 	useEffect(() => {
// 		localStorage.setItem('countminus', JSON.stringify(countminus))
// 	}, [countminus])
// 	const [balance, setBalance] = useState(
// 		JSON.parse(localStorage.getItem('balance')) || 0
// 	)

// 	useEffect(() => {
// 		localStorage.setItem('balance', JSON.stringify(balance))
// 	}, [balance])

// 	function addTodo() {
// 		setTodo([
// 			...todo,
// 			{
// 				id: uuid(),
// 				title: textValue,
// 				data: new Date().toLocaleDateString(),
// 				num: numberValue,
// 				class: 'receivedBy',
// 			},
// 		])
// 		setBalance(balance + Number(numberValue))
// 		setCountplus(countplus + Number(numberValue))
// 		setTextValue('')
// 		setNumberValue('')
// 	}

// 	function addTodoR() {
// 		setTodo([
// 			...todo,
// 			{
// 				id: uuid(),
// 				title: textValue,
// 				data: new Date().toLocaleDateString(),
// 				num: numberValue,
// 				class: 'spentOn',
// 			},
// 		])
// 		setCountminus(countminus + Number(numberValue))
// 		setBalance(balance - Number(numberValue))
// 		setTextValue('')
// 		setNumberValue('')
// 	}
// 	function clearHistory() {
// 		if (window.confirm('You want to delette?')) {
// 			setTodo([])
// 		}
// 		return
// 	}
// 	function clearCalc() {
// 		if (window.confirm('You want to delette?')) {
// 			setBalance(0)
// 			setCountplus(0)
// 			setCountminus(0)
// 			setDate(new Date().toLocaleString())
// 		}
// 		return
// 	}
	

	// return (
		// <div className='wrapper'>
		// 	<div className='header'>
		// 		<div className='header__title'>Wallet</div>
		// 		<div className='date'>{date}</div>
		// 		<div className='clearHistory'>
		// 			<button
		// 				onClick={() => {
		// 					clearCalc()
		// 				}}
		// 			>
		// 				new entry
		// 				<i class='fa fa-refresh' aria-hidden='true'></i>
		// 			</button>
		// 		</div>
		// 	</div>
		// 	<div className='balance'>
		// 		<div className='balance__all'>
		// 			<div className='balance__all-title'>Balance</div>
		// 			<div className='balance__all-meaning'>
		// 				<span className='balance__all-meaning--current'>
		// 					{balance} {money}
		// 				</span>
		// 			</div>
		// 		</div>
		// 		<div className='balance__income'>
		// 			<div className='balance__income-title'>Income</div>
		// 			<div className='balance__income-meaning'>
		// 				<span className='balance__income-meaning--current'>
		// 					+ {countplus} {money}
		// 				</span>
		// 			</div>
		// 		</div>
		// 		<div className='balance__expenses'>
		// 			<div className='balance__expenses-title'>Expenses</div>
		// 			<div className='balance__expenses-meaning'>
		// 				<span className='balance__expenses-meaning--current'>
		// 					- {countminus} {money}
		// 				</span>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='story'>
		// 		<div className='story__title'>
		// 			{/* <div className="title">История</div> */}
		// 			<div className='clearHistory'>
		// 				<button
		// 					onClick={() => {
		// 						clearHistory()
		// 					}}
		// 				>
		// 					new story
		// 					<i class='fa fa-refresh' aria-hidden='true'></i>
		// 				</button>
		// 			</div>
		// 		</div>

		// 		<ul className='story__list'>
		// 			{todo.map((item) => (
		// 				<Tippy content={item.data}>
		// 					<li
		// 						key={item.id}
		// 						className={'story__item-income ' + item.class}
		// 					>
		// 						<span className='story__item-title'>{item.title}</span>
		// 						<span className='income__number'>
		// 							{item.num} {money}
		// 						</span>
		// 					</li>
		// 				</Tippy>
		// 			))}
		// 		</ul>
		// 	</div>
		// 	<div className='operation'>
		// 		<div className='operation__title'>
		// 			<p>New entry</p>
		// 		</div>
		// 		<div className='operation__form'>
		// 			<input
		// 				className='operation__form--text'
		// 				type='text'
		// 				placeholder='Enter a description'
		// 				value={textValue}
		// 				onChange={(e) => setTextValue(e.target.value)}
		// 			/>
		// 			<input
		// 				className='operation__form--num'
		// 				type='text'
		// 				placeholder='Enter amount'
		// 				value={numberValue}
		// 				onChange={(e) => setNumberValue(e.target.value)}
		// 			/>
		// 			<div className='operation__buttons'>
		// 				<button
		// 					className='operation__buttons--income'
		// 					onClick={() => {
		// 						addTodo()
		// 					}}
		// 				>
		// 					income
		// 				</button>
		// 				<button
		// 					className='operation__buttons--expenses'
		// 					onClick={() => {
		// 						addTodoR()
		// 					}}
		// 				>
		// 					expenses
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	//)
//}

//
