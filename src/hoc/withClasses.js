import React from 'react'

const withClasses = (Component, className) => {
	return props => (
		<div className={className}>
			<Component {...props} />
		</div>
	)
}

export default withClasses