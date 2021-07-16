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
		<div id='cumulus-one-shadow'></div>
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
