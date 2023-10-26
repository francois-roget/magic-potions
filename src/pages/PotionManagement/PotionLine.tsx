import * as React from 'react';
import { Potion } from '../../types';
import {} from '@fortawesome/fontawesome-free';
import Restricted from '../../components/Restricted';

type Props = {
	potion: Potion;
	remove: () => void;
};

const PotionLine: React.FC<Props> = ({ potion, remove }) => {
	const executePotion = () => {
		alert(`Executing ${potion.title}`);
	};
	return (
		<tr key={potion.title}>
			<td>{potion.title}</td>
			<td>
				<Restricted to="canExecute">
					<button className="btn btn-link" onClick={executePotion}>
						<i className="fa-solid fa-magic-wand-sparkles" />
					</button>
				</Restricted>
				<Restricted to="canRemove">
					<button className="btn btn-link" onClick={remove}>
						<i className="fa-solid fa-trash" />
					</button>
				</Restricted>
			</td>
		</tr>
	);
};

export default PotionLine;
