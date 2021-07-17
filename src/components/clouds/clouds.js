export const CumulusOne = () => (
	<>
		<div id='cumulus-one-shadow'></div>
		<svg width='0' height='0'>
			<filter id='filter1'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='180' />
			</filter>
		</svg>
	</>
);

export const CumulusTwo = () => (
	<>
		<div id='cumulus-two-shadow'></div>
		<svg width='0' height='0'>
			<filter id='filter2'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='180' />
			</filter>
		</svg>
	</>
);

export const CumulusThree = () => (
	<>
		<div id='cumulus-three-shadow'></div>
		<svg width='0' height='0'>
			<filter id='filter3'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='200' />
			</filter>
		</svg>
	</>
);

export const CumulusFour = () => (
	<>
		<div id='cumulus-four-shadow'></div>
		<svg width='0' height='0'>
			<filter id='filter4'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='50' />
			</filter>
		</svg>
	</>
);

export const CumulusFive = () => (
	<>
		<div id='cumulus-five-shadow'></div>
		<svg width='0' height='0'>
			<filter id='filter5'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='150' />
			</filter>
		</svg>
	</>
);

export const NimbostratusOne = () => (
	<>
		<div id='nimbostratus-one-shadow'></div>
		<svg width='0' height='0'>
			<filter id='nimbofilter1'>
				<feTurbulence type='fractalNoise' baseFrequency='.01' numOctaves='10' />
				<feDisplacementMap in='SourceGraphic' scale='180' />
			</filter>
		</svg>
	</>
);
