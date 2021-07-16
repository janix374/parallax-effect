import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusThree,
	CumulusFour,
} from '../clouds/clouds';
import PropTypes from 'prop-types';

const SectionOne = ({ offsetY }) => {
	const sectionOneRef = useRef();
	const rightMove = offsetY;
	// if (sectionOneRef.current) {
	// 	console.log(sectionOneRef.current.offsetTop);
	// }

	// random cumulus create function

	return (
		<section className='section-one' ref={sectionOneRef}>
			<Cumulus top={-200} left={-600}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={200} left={700}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={700} left={120}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={-200} left={-600}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={1300} left={-400}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={2000} left={400}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={2000} left={-250}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={2700} left={240}>
				<CumulusFour />
			</Cumulus>

			<Cumulus top={3000} left={-250}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={4000} left={640}>
				<CumulusThree />
			</Cumulus>
		</section>
	);
};

SectionOne.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionOne;
