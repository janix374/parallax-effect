import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import { CumulusThree, CumulusFive } from '../clouds/clouds';
import PropTypes from 'prop-types';

const SectionThree = ({ offsetY }) => {
	const sectionThreeRef = useRef();
	const rightMove = offsetY;

	return (
		<section className='section-three' ref={sectionThreeRef}>
			<Cumulus top={30} left={-15}>
				<CumulusThree />
			</Cumulus>
			<Cumulus top={52} left={-10}>
				<CumulusFive />
			</Cumulus>
			<Cumulus top={59} left={-35}>
				<CumulusFive />
			</Cumulus>
			<Cumulus top={70} left={29}>
				<CumulusThree />
			</Cumulus>
		</section>
	);
};
SectionThree.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionThree;
