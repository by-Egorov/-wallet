import React from 'react'

const ButtonOperation = ({ active, setActive }) => {
  return (
	 <div className='open'>
		<button className={active ? 'open__operation' : 'open__operation active' } onClick={() => setActive(true)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
	 </div>
  )
}

export default ButtonOperation
