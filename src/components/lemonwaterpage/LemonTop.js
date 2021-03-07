import React from 'react';

const lemonTopTitle = React.createRef();

function LemonTop({ offsetY }) {
	const styles = {
		transform: `translateY(${offsetY * 0.4}px)`,
	};

	return (
		<div className='lemon-top '>
			<div ref={lemonTopTitle} style={styles} className='lemon-top-title '>
				{' '}
				<p className='md-font'>Benefits from Lemon Water</p>
			</div>
		</div>
	);
}

export default LemonTop;
