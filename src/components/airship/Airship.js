import React from 'react';
import airship from '../../images/airship.png';
import PropTypes from 'prop-types';

const Airship = ({ offsetY }) => {
	const styles = {
		transform: `translateY(${offsetY / 100}px)`,
	};

	console.log(offsetY);
	return (
		<div className='airship' style={styles}>
			<img src={airship} alt='airship' />
		</div>
	);
};

Airship.propTypes = {
	offsetY: PropTypes.number,
};

export default Airship;
