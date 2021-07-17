import React, { useRef } from 'react';
import Nimbostratus from '../clouds/Nimbostratus';
import { NimbostratusOne } from '../clouds/clouds';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusFour,
	CumulusFive,
} from '../clouds/clouds';
import PropTypes from 'prop-types';

const SectionFour = ({ offsetY }) => {
	const sectionFourRef = useRef();
	const rightMove = offsetY;

	return (
		<section className='section-four' ref={sectionFourRef}>
			<Nimbostratus top={2} left={-30}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={2} left={-60}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={2} left={20}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={7} left={20}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={7} left={-80}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={13} left={-15}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={13} left={-55}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={17} left={-55}>
				<NimbostratusOne />
			</Nimbostratus>
			<Nimbostratus top={17} left={2}>
				<NimbostratusOne />
			</Nimbostratus>
		</section>
	);
};
SectionFour.propTypes = {
	offsetY: PropTypes.number,
};
export default SectionFour;
