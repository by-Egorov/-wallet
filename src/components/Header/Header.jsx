import React from 'react'

const Header = ({ clearCalc, date }) => {
	return (
		<div className='header'>
			<div className='header__title'>Wallet</div>
			<div className='date'>{date}</div>
			<div className='clearHistory'>
				<button
					onClick={() => {
						clearCalc()
					}}
				>
					new entry
					<i class='fa fa-refresh' aria-hidden='true'></i>
				</button>
			</div>
		</div>
	)
}

export default Header
