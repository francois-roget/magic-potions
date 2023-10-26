import * as React from 'react';
import PotionAddition from './PotionAddition';
import usePotions from '../../hooks/usePotions';
import PotionsList from './PotionsList';
import Restricted from '../../components/Restricted';

type Props = {};

const PotionManagement: React.FC<Props> = () => {
	const [potions, addPotion, removePotion] = usePotions();
	return (
		<>
			<Restricted to="canAdd">
				<div className="row">
					<PotionAddition onAdd={addPotion} />
				</div>
			</Restricted>
			<div className="row">
				<PotionsList potions={potions} removePotion={removePotion} />
			</div>
		</>
	);
};

export default PotionManagement;
