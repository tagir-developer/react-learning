import React from 'react'
import './Car.css'

export default ({ name, year, onChangeName, deleteHandler }) => {

	const inputStyles = ['input']
	if (name !== '') {
		inputStyles.push('green')
	} else {
		inputStyles.push('red')
	}

	if (name.length > 4) {
		inputStyles.push('bold')
	}


	return (
		<div className="Car">
			<h2>{name}</h2>
			<p>Year: <strong>{year}</strong></p>
			<input 
			type="text" 
			onChange={onChangeName} 
			value={name} 
			class={inputStyles.join(' ')}>
			</input>
			<button onClick={deleteHandler}>Click</button>
		</div>
	)

}

