import React from 'react'
import style from '../Operation/Operation.module.scss'
const ButtonOperation = ({ active, setActive }) => {
  return (
	 <div className={style.open}>
		<button className={active ? style.open__operation : style.open__operation+ ' ' +style.active } onClick={() => setActive(true)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
	 </div>
  )
}

export default ButtonOperation
