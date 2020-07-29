import React from 'react'
import Radium from 'radium'
import './Car.css'

const Car = ({ name, year, onChangeName, deleteHandler }) => {

	const styles = {
		border: '1px solid grey',
		boxShadow: 'rgb(65 65 65 / 55%) 1px 2px 6px',
		':hover': {
			boxShadow: 'rgb(65 65 65 / 70%) 1px 2px 12px',
			cursor: 'pointer'
		}
	}

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
		<div className="Car" style={styles}>
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

export default Radium(Car)