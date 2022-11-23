import React from 'react'
import Tippy from '@tippy.js/react'
import style from '../Story/Story.module.scss'
import 'tippy.js/dist/tippy.css'

const Story = ({ money, clearHistory, todo, edit, setEdit }) => {
	return (
		<div className={style.story}>
			<div className={style.story__title}>
				<div className={style.clearHistory}>
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

			<ul className={style.story__list}>
				{todo.map((item) => (
					<Tippy content={item.data}>
						<li
							key={item.id}
							className={{style.story__item} + {item.class}}
						>
							<span className={style['story__item-title']}>{item.title}</span>
							<span className={style['story__item-number']}>
								{item.num} {money}
							</span>
							<button className={style.story__edit}>
								<i class='fa fa-pencil-square-o' aria-hidden='true'></i>
							</button>
							<button className={style.story__save}>
							<i class="fa fa-floppy-o" aria-hidden="true"></i>
							</button>
						</li>
					</Tippy>
				))}
			</ul>
		</div>
	)
}

export default Story
