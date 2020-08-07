import React from 'react'
import { ClickedContext } from '../App'

const Counter2 = (props) => {
	return (
		<div style={{
			width: 200,
			border: '1px solid grey',
			margin: '0 auto',
		}}>
			<h3>Counter 2</h3>
			<ClickedContext.Consumer>
			{ clicked => clicked ? <p>It is work!</p> : null }
			</ClickedContext.Consumer>
		</div>
	)
}

export default Counter2