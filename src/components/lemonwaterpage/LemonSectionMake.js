import React, { useState, useEffect } from 'react';
import PictureLemonA from './subdocument/PictureLemonA';
import PictureLemonB from './subdocument/PictureLemonB';

const lemonselectionmake = React.createRef();

const LemonSectionMake = ({ offsetY }) => {
	const [offsetTop, setOffsetTop] = useState(0);

	useEffect(() => {
		if (lemonselectionmake.current.offsetTop <= offsetY + 400) {
			setOffsetTop(
				(offsetY - lemonselectionmake.current.offsetTop + 400) * 0.5
			);
		}
	}, [offsetY]);

	const stylesa = {
		top: `${offsetTop}px`,
	};

	const stylesb = {
		top: `${-offsetTop}px`,
	};

	return (
		<section className='lemon-selection-make' ref={lemonselectionmake}>
			<div className='lemon-selection-make-first'>
				<div className='text-side'>
					<div>
						<h3>How to Make Lemon Water?</h3>
						<p>
							<b>Squeeze lemon juice into a glass.</b> Both hand held lemon
							reamer and glass lemon juicer reamer work well. It’s a matter of
							personal preference. The only difference – glass one catches the
							seeds.
						</p>
						<p>
							<b>Add warm water.</b> To make water warm, I mix boiling water
							with cold filtered water. Another option is to turn off kettle
							before water reaches boiling (you just have to wait by the
							kettle).
						</p>
						<p>
							<b>Stir and enjoy:</b> With a spoon and drink while warm.
						</p>
					</div>
				</div>
				<div className='svg-side'>
					<PictureLemonA style={stylesa} />
				</div>
			</div>
			<div className='lemon-selection-make-secound'>
				<div className='text-side'>
					<div>
						<h3>Tips to Prevent Teeth Enamel Damage</h3>
						<p>
							A reader brought to my attention that lemon water (like limes,
							grapefruits and apple cider water) can damage your teeth enamel
							with time. Dr. Sara Solomon gives us 5 tips to prevent teeth
							damage without giving up our morning ritual
						</p>
						<ul>
							<li>
								Dilute lemon juice in 8 oz of water: I would do 1/2 cup + 3 tbsp
								boiling water + rest cold water.
							</li>
							<li>Straw: Drink lemon water with a straw.</li>
							<li>
								Rinsing: Rinse your mouth right after drinking lemon water.
							</li>
							<li>
								Hold off brushing: Avoid brushing teeth for 60 minutes after.
							</li>
							<li>
								Best toothbrush: Use soft toothbrush and avoid aggressive
								brushing.
							</li>
						</ul>
					</div>
				</div>
				<div className='svg-side'>
					<PictureLemonB style={stylesb} />
				</div>
			</div>
		</section>
	);
};

export default LemonSectionMake;
