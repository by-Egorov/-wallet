import React, { useState } from 'react'


const Wallet = ({ todo, setTodo }) => {
	const [textValue, setTextValue] = useState('')
	const [numberValue, setNumberValue] = useState('')
	const money = '₽'
	const [countplus, setCountplus] = useState(0)
	const [countminus, setCountminus] = useState(0)

	function addTodo() {
		
		setTodo([
			...todo,
			{
				id: null,
				title: textValue,
				num: numberValue,
				class: 'receivedBy',
				status: '+',
			},
		])
		setTextValue('')
		setNumberValue('')
	}

	function addTodoR() {
		
		setTodo([
			...todo,
			{
				id: null,
				title: textValue,
				num: numberValue,
				class: 'spentOn',
				status: '-',
			},
		])
		setTextValue('')
		setNumberValue('')
	}

	

	return (
		<div className='wrapper'>
			<div className='header'>
				<div className='header__title'>Кошелек</div>
				<div className='header__subtitle'>Калькулятор расходов</div>
			</div>
			<div className='balance'>
				<div className='balance__all'>
					<div className='balance__all-title'>Баланс</div>
					<div className='balance__all-meaning'>
						<span className='balance__all-meaning--current'>
							{countplus} {money}
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
				<div className='story__title'>История расходов</div>
				<ul className='story__list'>
					{todo.map((item) => (
						<li key={item.id} className={'story__item-income ' + (item.class)}>
							<span className='story__item-title'>{item.title}</span>
							<span className='income__number'>{item.status} {item.num} ₽</span>
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
								setCountplus(countplus + Number(numberValue))
								addTodo()
							}}
						>
							Доход
						</button>
						<button
							className='operation__buttons--expenses'
							onClick={() => {
								setCountminus(countminus + Number(numberValue))
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
