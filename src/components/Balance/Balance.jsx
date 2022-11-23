import React from 'react'
import style from '../Balance/Balance.module.scss'

const Balance = ({ money, balance, countplus, countminus }) => {
	return (
		<div className={style.balance}>
			<div className={style.balance__all}>
				<div className={style['balance__all-title']}>Balance</div>
				<div className={style['balance__all-meaning']}>
					<span className={style['balance__all-meaning--current']}>
						{balance} {money}
					</span>
				</div>
			</div>
			<div className={style.balance__income}>
				<div className={style['balance__income-title']}>Income</div>
				<div className={style['balance__income-meaning']}>
					<span className={style['balance__income-meaning--current']}>
						+ {countplus} {money}
					</span>
				</div>
			</div>
			<div className={style.balance__expenses}>
				<div className={style['balance__expenses-title']}>Expenses</div>
				<div className={style['balance__expenses-meaning']}>
					<span className={style['balance__expenses-meaning--current']}>
						- {countminus} {money}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Balance
