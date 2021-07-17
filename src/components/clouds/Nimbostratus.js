import React from 'react';
import PropTypes from 'prop-types';

const Nimbostratus = ({ top, left, children }) => {
	return (
		<div
			className='nimbostratus-cloud'
			style={{
				top: `${top}%`,
				left: `${left}%`,
			}}
		>
			{children}
		</div>
	);
};

Nimbostratus.propTypes = {
	top: PropTypes.number,
	left: PropTypes.number,
	children: PropTypes.any,
};

export default Nimbostratus;
