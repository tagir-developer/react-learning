import React from 'react'

export default ({name, year, changeTitle}) => (
	<div>
		<h2>{name}</h2>
		<p>Year: <strong>{year}</strong></p>
		<button onClick={changeTitle}>Click</button>
	</div>

	
)


