import React, { useState } from 'react'

const Wallet = ({ todo, setTodo }) => {
	
	const [textValue, setTextValue] = useState('')
	const [numberValue, setNumberValue] = useState('')
        const money = '₽'
const [count, setCount] = useState({
 count = Number(count) + Number(numberValue)
})
        

	function addTodo() {
		setTodo( [...todo, {
			id: 4,
			title: textValue,
                        num: numberValue,
			status: false
		}])
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
						<span className='balance__all-meaning--current'>{count} {money}</span>
					</div>
				</div>
				<div className='balance__income'>
					<div className='balance__income-title'>Доходы</div>
					<div className='balance__income-meaning'>
						<span className='balance__income-meaning--current'>
							+ {Number(numberValue) + Number(numberValue)} {money}
						</span>
					</div>
				</div>
				<div className='balance__expenses'>
					<div className='balance__expenses-title'>Расходы</div>
					<div className='balance__expenses-meaning'>
						<span className='balance__expenses-meaning--current'>
							-{Number(numberValue) - Number(numberValue)} {money}
						</span>
					</div>
				</div>
			</div>
			<div className='story'>
				<div className='story__title'>История расходов</div>
				<ul className='story__list'>
					{todo.map((item) => (
						<li key={item.id} className='story__item-income receivedBy'>
							<span className='story__item-title'>{item.title}</span>
							<span className='income__number'>+{item.num} ₽</span>
						</li>
					))}
				</ul>
			</div>
			<div className='operation'>
				<div className='operation__title'>
					<p>Новая запись</p>
				</div>
				<div className ='operation__form'>
					<input
						className ='operation__form--text'
						type ='text'
						placeholder='Введите наименование операции'
						value = {textValue}
						onChange = {(e) => setTextValue(e.target.value)}
					/>
					<input
						className='operation__form--num'
						type='text'
						placeholder='Введите сумму'
						value={numberValue}
						onChange = {(e) => setNumberValue(e.target.value)}
					/>
					<div className='operation__buttons'>
						<button
							className='operation__buttons--income'
							
                                                       
						>
							Доход
						</button>
						<button className='operation__buttons--expenses'
                                                        

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
