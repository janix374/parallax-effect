import React from 'react';

const Card = ({ cardTitle, cardText, cardColor }) => {
	//card is variable for className, first argument is class="card" secound argument is class="neutral"
	//as default or class you pass from parent props

	const card = `card ${cardColor}`;
	return (
		<div className={card}>
			<div className='card-body'>
				<h4 className='card-title'>{cardTitle}</h4>
				<p className='card-text'>{cardText}</p>
			</div>
		</div>
	);
};

Card.defaultProps = {
	colorCard: 'neutral',
};

export default Card;
