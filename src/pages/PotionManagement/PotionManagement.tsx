import * as React from 'react';
import PotionAddition from './PotionAddition';
import usePotions from '../../hooks/usePotions';
import PotionsList from './PotionsList';

type Props = {};

const PotionManagement: React.FC<Props> = () => {
	const [potions, addPotion, removePotion] = usePotions();
	return (
		<>
			<div className="row">
				<PotionAddition onAdd={addPotion} />
			</div>
			<div className="row">
				<PotionsList potions={potions} removePotion={removePotion} />
			</div>
		</>
	);
};

export default PotionManagement;
