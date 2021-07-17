import React, { useState, useEffect } from 'react';
import Airship from '../airship/Airship';
import SectionOne from '../sections/SectionOne';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
import SectionFour from '../sections/SectionFour';

const Sky = () => {
	const [offsetY, setOffsetY] = useState(0);
	const hendleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', hendleScroll);
		return () => window.removeEventListener('scroll', hendleScroll);
	}, []);

	return (
		<div className='container'>
			<Airship offsetY={offsetY} />
			<SectionOne offsetY={offsetY} />
			<SectionTwo offsetY={offsetY} />
			<SectionThree offsetY={offsetY} />
			<SectionFour offsetY={offsetY} />
		</div>
	);
};

export default Sky;
