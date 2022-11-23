import React from 'react'
import style from '../Header/Header.module.scss'

const Header = ({ clearCalc, date }) => {
	return (
		<div className={style.header}>
			<div className={style.header__title}>Wallet</div>
			<div className={style.date}>{date}</div>
			<div className={style.clearHistory}>
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
