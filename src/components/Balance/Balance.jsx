import React from 'react'

const Balance = () => {
	return (
		<div className='balance'>
			<div className='balance__all'>
				<div className='balance__all-title'>Баланс</div>
				<div className='balance__all-meaning'>
					<span className='balance__all-meaning--current'>0 ₽</span>
				</div>
			</div>
			<div className='balance__income'>
				<div className='balance__income-title'>Доходы</div>
				<div className='balance__income-meaning'>
					<span className='balance__income-meaning--current'> +0 ₽</span>
				</div>
			</div>
			<div className='balance__expenses'>
				<div className='balance__expenses-title'>Расходы</div>
				<div className='balance__expenses-meaning'>
					<span className='balance__expenses-meaning--current'> -0 ₽</span>
				</div>
			</div>
		</div>
	)
}

export default Balance
