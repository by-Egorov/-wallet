import React from 'react'

const Operation = () => {
	return (
		<div className='operation'>
			<div className='operation__title'>
				<p>Новая запись</p>
			</div>
			<form className='operation__form'>
				<input
					className='operation__form--text'
					type='text'
					placeholder='Введите наименование операции'
				/>
				<input
					className='operation__form--num'
					type='text'
					placeholder='Введите сумму'
				/>
				<div className='operation__buttons'>
					<button className='operation__buttons--income'>Доход</button>
					<button className='operation__buttons--expenses'>Расход</button>
				</div>
			</form>
		</div>
	)
}

export default Operation
