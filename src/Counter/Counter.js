import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {
	state = {
		counter: 0
	}

	// upCounter = () => {
	// 	this.setState({
	// 		counter: this.state.counter + 1
	// 	})
	// }

	upCounter = () => {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1
			}
		})
	}


	render() {
		return (
			<Auxiliary>
				<h3>Counter: {this.state.counter}</h3>

				<Counter2 />

				<button onClick={this.upCounter}>+</button>
				<button style={{ marginBottom: 20 }} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
			</Auxiliary>
		)

		// return [
		// 		<h3 key={"1"}>Counter: {this.state.counter}</h3>,
		// 		<button key={"2"} onClick={this.upCounter}>+</button>,
		// 		<button key={"3"} style={{marginBottom: 20}} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
		// ]
	}
}