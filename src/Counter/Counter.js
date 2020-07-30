import React, { Component, Fragment } from 'react'

export default class Counter extends Component {
	state = {
		counter: 0
	}

	upCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}


	render() {
		return (
			<Fragment>
				<h3>Counter: {this.state.counter}</h3>
				<button onClick={this.upCounter}>+</button>
				<button style={{marginBottom: 20}} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
			</Fragment>
		)

		// return [
		// 		<h3 key={"1"}>Counter: {this.state.counter}</h3>,
		// 		<button key={"2"} onClick={this.upCounter}>+</button>,
		// 		<button key={"3"} style={{marginBottom: 20}} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
		// ]
	}
}