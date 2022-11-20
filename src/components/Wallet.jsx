import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'

const Wallet = ({ todo, setTodo }) => {
	const [textValue, setTextValue] = useState('')
	const [numberValue, setNumberValue] = useState('')
	const money = '₽'
	const [countplus, setCountplus] = useState(
		JSON.parse(localStorage.getItem('countplus')) || 0
	)

	useEffect(() => {
		localStorage.setItem('countplus', JSON.stringify(countplus))
	}, [countplus])
	const [countminus, setCountminus] = useState(
		JSON.parse(localStorage.getItem('countminus')) || 0
	)

	useEffect(() => {
		localStorage.setItem('countminus', JSON.stringify(countminus))
	}, [countminus])
	const [balance, setBalance] = useState(
		JSON.parse(localStorage.getItem('balance')) || 0
	)

	useEffect(() => {
		localStorage.setItem('balance', JSON.stringify(balance))
	}, [balance])

	function addTodo() {
		setTodo([
			...todo,
			{
				id: uuid(),
				title: textValue,
				num: numberValue,
				class: 'receivedBy',
			},
		])
		setBalance(balance + Number(numberValue))
		setCountplus(countplus + Number(numberValue))
		setTextValue('')
		setNumberValue('')
	}

	function addTodoR() {
		setTodo([
			...todo,
			{
				id: uuid(),
				title: textValue,
				num: numberValue,
				class: 'spentOn',
			},
		])
		setCountminus(countminus + Number(numberValue))
		setBalance(balance - Number(numberValue))
		setTextValue('')
		setNumberValue('')
	}
	function clearHistory() {
		setTodo(
			[]
		)
	}
	function clearCalc() {
		setBalance(0)
		setCountplus(0)
		setCountminus(0)
	}

	return (
		<div className='wrapper'>
			<div className='header'>
				<div className='header__title'>Wallet</div>
				{/* <div className='header__subtitle'>Калькулятор расходов</div> */}
				<div className="clearHistory">
						<button onClick={() => {clearCalc()}}>
						Очистить
						<i class="fa fa-trash-o" aria-hidden="true"></i>
						</button>
					</div>
			</div>
			<div className='balance'>
				<div className='balance__all'>
					<div className='balance__all-title'>Баланс</div>
					<div className='balance__all-meaning'>
						<span className='balance__all-meaning--current'>
							{balance} {money}
						</span>
					</div>
				</div>
				<div className='balance__income'>
					<div className='balance__income-title'>Доходы</div>
					<div className='balance__income-meaning'>
						<span className='balance__income-meaning--current'>
							+ {countplus} {money}
						</span>
					</div>
				</div>
				<div className='balance__expenses'>
					<div className='balance__expenses-title'>Расходы</div>
					<div className='balance__expenses-meaning'>
						<span className='balance__expenses-meaning--current'>
							- {countminus} {money}
						</span>
					</div>
				</div>
			</div>
			<div className='story'>
				<div className='story__title'>
					<div className="title">История</div>
					<div className="clearHistory">
						<button onClick={() => {clearHistory()}}>
						Очистить
						<i class="fa fa-trash-o" aria-hidden="true"></i>
						</button>
					</div>
					</div>
					
				<ul className='story__list'>
					{todo.map((item) => (
						<li
							key={item.id}
							className={'story__item-income ' + item.class}
						>
							<span className='story__item-title'>{item.title}</span>
							<span className='income__number'>{item.num} ₽</span>
						</li>
					))}
				</ul>
			</div>
			<div className='operation'>
				<div className='operation__title'>
					<p>Новая запись</p>
				</div>
				<div className='operation__form'>
					<input
						className='operation__form--text'
						type='text'
						placeholder='Введите наименование операции'
						value={textValue}
						onChange={(e) => setTextValue(e.target.value)}
					/>
					<input
						className='operation__form--num'
						type='text'
						placeholder='Введите сумму'
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
							Доход
						</button>
						<button
							className='operation__buttons--expenses'
							onClick={() => {
								addTodoR()
							}}
						>
							Расход
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wallet
