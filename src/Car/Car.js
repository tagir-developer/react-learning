import React from 'react'
import Radium from 'radium'
import './Car.scss'

class Car extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log('App componentWillReceiveProps')
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('App shouldComponentUpdate')
		return true
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('App componentWillUpdate')
	}

	componentDidUpdate() {
		console.log('App componentDidUpdate')
	}

	render() {
		console.log('Car render')
		const styles = {
			border: '1px solid grey',
			boxShadow: 'rgb(65 65 65 / 55%) 1px 2px 6px',
			':hover': {
				boxShadow: 'rgb(65 65 65 / 70%) 1px 2px 12px',
				cursor: 'pointer'
			}
		}
	
		const inputStyles = ['input']
		if (this.props.name !== '') {
			inputStyles.push('green')
		} else {
			inputStyles.push('red')
		}
	
		if (this.props.name.length > 4) {
			inputStyles.push('bold')
		}
	
	
		return (
			<div className="Car" style={styles}>
				<h2 className="header">Name: {this.props.name}</h2>
				<p>Year: <strong>{this.props.year}</strong></p>
				<input 
				type="text" 
				onChange={this.props.onChangeName} 
				value={this.props.name} 
				className={inputStyles.join(' ')}>
				</input>
				<button onClick={this.props.deleteHandler}>Click</button>
			</div>
		)
	}

}


export default Radium(Car)