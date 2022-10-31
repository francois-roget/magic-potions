import * as React from 'react';
import { Potion } from '../../types';
import {} from '@fortawesome/fontawesome-free';

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
				<button className="btn btn-link" onClick={executePotion}>
					<i className="fa-solid fa-magic-wand-sparkles" />
				</button>
				<button className="btn btn-link" onClick={remove}>
					<i className="fa-solid fa-trash" />
				</button>
			</td>
		</tr>
	);
};

export default PotionLine;
