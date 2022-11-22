import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const Story = ({ money, clearHistory, todo }) => {
	return (
		<div className='story'>
				<div className='story__title'>
					{/* <div className="title">История</div> */}
					<div className='clearHistory'>
						<button
							onClick={() => {
								clearHistory()
							}}
						>
							new story
							<i class='fa fa-refresh' aria-hidden='true'></i>
						</button>
					</div>
				</div>

				<ul className='story__list'>
					{todo.map((item) => (
						<Tippy content={item.data}>
							<li
								key={item.id}
								className={'story__item-income ' + item.class}
							>
								<span className='story__item-title'>{item.title}</span>
								<span className='income__number'>
									{item.num} {money}
								</span>
							</li>
						</Tippy>
					))}
				</ul>
			</div>
	)
}

export default Story
