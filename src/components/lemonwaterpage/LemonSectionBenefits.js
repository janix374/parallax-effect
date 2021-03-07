import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';

const lemonSelectionBenefitsPictureRef = React.createRef();

const LemonSectionBenefits = ({ offsetY }) => {
	const [offsetTop, setOffsetTop] = useState(0);

	useEffect(() => {
		const pictureTop = lemonSelectionBenefitsPictureRef.current.offsetTop;
		if (pictureTop <= offsetY) {
			setOffsetTop((offsetY - pictureTop) * 1.1);
		}
	}, [offsetY]);

	const styles = {
		top: `${offsetTop}px`,
	};

	return (
		<section className='lemon-selection-benefits'>
			<div className='lemon-selection-benefits-list'>
				<h3>7 Reasons to Start Your Day With Lemon Water</h3>
				<ul>
					<li>
						<Card
							cardTitle='Aids in digestion'
							cardText='Acid helps break down food. That’s why there’s so much of it in our stomachs. The acid in lemons may be especially helpful in supplementing stomach acid levels, which tend to decline as we age.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Helps you stay hydrated'
							cardText='Most of us don’t drink enough water. A daily lemon water habit is an easy way to get your day off on the right foot. How do you know if you’re drinking enough? Your urine is almost clear.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Weight-loss friendly'
							cardText='We’re creatures of habit. Ponder the impact of replacing your morning OJ or latte with lemon water. Not just once, but perhaps 20 times a month — and multiply that by 10 years. Your waist line will thank you.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Prevents oxidation'
							cardText='Like all produce, lemons contain phytonutrients, which protect your body against disease. These phytonutrients have powerful antioxidant properties, which prevent cell damage from oxidation, the same mechanism that causes rust.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Supplies a healthy dose of vitamin C  '
							cardText='Juice half a lemon into your water and you’ll add a mere 6 calories to your diet. Plus you’ll get more than a sixth of your daily vitamin C, which is needed to protect us from cell damage and repair injury.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Provides a potassium boost'
							cardText='Your body can’t function without potassium. It’s necessary for nerve-muscle communication, transporting nutrients and waste and blood pressure regulation. Fruits and vegetables are important sources of potassium.'
							cardColor='card-decoration'
						/>
					</li>
					<li>
						<Card
							cardTitle='Helps prevent kidney stones'
							cardText='Lemon water helps prevent painful stones in those deficient in urinary citrate (a form of citric acid). More importantly, increased fluids help prevent dehydration — a common cause of kidney stones.'
							cardColor='card-decoration'
						/>
					</li>
				</ul>
			</div>

			<div
				className='lemon-selection-benefits-picture'
				ref={lemonSelectionBenefitsPictureRef}
			>
				<div className='card-lemon1' style={styles}>
					<h3>Lemon</h3>
					<p>
						Lemon is a very complete citrus. The benefits and properties that
						this citrus contains and that have a direct impact on the human body
						are many.
					</p>
					<p>
						At Pilmifresh we offer the best quality frozen lemon. We carry
						different varieties of lemon juice; we also offer frozen lemon
						slices and wedges. As well as, lemon peel in strips, zest and dices.
					</p>
				</div>
				<div className='card-lemon2'>
					<h3>Lemon</h3>
					<p>
						Lemon is a very complete citrus. The benefits and properties that
						this citrus contains and that have a direct impact on the human body
						are many.
					</p>
					<p>
						At Pilmifresh we offer the best quality frozen lemon. We carry
						different varieties of lemon juice; we also offer frozen lemon
						slices and wedges. As well as, lemon peel in strips, zest and dices.
					</p>
				</div>
			</div>
		</section>
	);
};

export default LemonSectionBenefits;
