import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusThree,
	CumulusFour,
} from '../clouds/clouds';
import PropTypes from 'prop-types';

function SectionTwo({ offsetY }) {
	const sectionTwoRef = useRef();
	const rightMove = offsetY;
	if (sectionTwoRef.current) {
		console.log(sectionTwoRef.current.offsetTop);
	}

	// random cumulus create function

	return (
		<section className='section-two' ref={sectionTwoRef}>
			<Cumulus top={200} left={-300}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={300} left={500}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={700} left={120}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={1000} left={-500}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={1300} left={-300}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={2000} left={400}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={2300} left={-250}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={2700} left={240}>
				<CumulusFour />
			</Cumulus>

			<Cumulus top={3000} left={-250}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={4000} left={540}>
				<CumulusThree />
			</Cumulus>
		</section>
	);
}
SectionTwo.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionTwo;
