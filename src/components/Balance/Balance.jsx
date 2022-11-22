import React from 'react'

const Balance = ({ money, balance, countplus, countminus }) => {
	return (
		<div className='balance'>
			<div className='balance__all'>
				<div className='balance__all-title'>Balance</div>
				<div className='balance__all-meaning'>
					<span className='balance__all-meaning--current'>
						{balance} {money}
					</span>
				</div>
			</div>
			<div className='balance__income'>
				<div className='balance__income-title'>Income</div>
				<div className='balance__income-meaning'>
					<span className='balance__income-meaning--current'>
						+ {countplus} {money}
					</span>
				</div>
			</div>
			<div className='balance__expenses'>
				<div className='balance__expenses-title'>Expenses</div>
				<div className='balance__expenses-meaning'>
					<span className='balance__expenses-meaning--current'>
						- {countminus} {money}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Balance
