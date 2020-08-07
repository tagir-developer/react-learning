import React from 'react'
import './Car.scss'
import withClasses from '../hoc/withClasses'
import PropTypes from 'prop-types'

class Car extends React.Component {

	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount() {
		if (this.props.index === 1) {
			this.inputRef.current.focus()
		}
	}

	render() {
		console.log('Car render')


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
			<React.Fragment>
				<h2 className="header">Name: {this.props.name}</h2>
				<p>Year: <strong>{this.props.year}</strong></p>
				<input
					ref={this.inputRef}
					type="text"
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputStyles.join(' ')}>
				</input>
				<button onClick={this.props.deleteHandler}>Click</button>
			</React.Fragment>
		)
	}

}

Car.propTypes = {
	name: PropTypes.string.isRequired,
	year: PropTypes.number,
	index: PropTypes.number,
	deleteHandler: PropTypes.func,
	onChangeName: PropTypes.func,
}

export default withClasses(Car, 'Car')