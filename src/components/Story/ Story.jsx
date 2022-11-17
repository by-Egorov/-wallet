import React from 'react'

const Story = () => {
	return (
		<div className='story'>
			<div className='story__title'>История расходов</div>
			<ul className='story__list'>
			<li className='story__item-income'>
					<span className='story__item-title'><span className='income__text'>Получил зарплату</span></span>
					<span className='income__number'>+30000₽</span>
				</li>
				<li className='story__item-expenses'>
					<span className='story__item-title'><span className='expenses__text'>Заплатил за интренет</span></span>
					<span className='expenses__number'>-700₽</span>
				</li>
			</ul>
		</div>
	)
}

export default Story
