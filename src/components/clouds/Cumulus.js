import React from 'react';
import PropTypes from 'prop-types';

const Cumulus = ({ top, left, children }) => {
	return (
		<div
			className='cumulus-cloud'
			style={{
				top: `${top}%`,
				left: `${left}%`,
			}}
		>
			{children}
		</div>
	);
};

Cumulus.propTypes = {
	top: PropTypes.number,
	left: PropTypes.number,
	children: PropTypes.any,
};

export default Cumulus;
