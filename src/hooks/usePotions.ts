import { useState } from 'react';
import { Potion } from '../types';
import usePersistedState from './usePersistedState';

type UsePotionType = [Potion[], (p: Potion) => void, (p: Potion) => void];

const usePotions = (): UsePotionType => {
	const [potions, setPotions] = usePersistedState<Potion[]>([], 'Potions');

	const addPotion = (potion: Potion) => {
		setPotions([...potions, potion]);
	};

	const removePotion = (potion: Potion) => {
		setPotions(potions.filter((p) => p.title !== potion.title));
	};

	return [potions, addPotion, removePotion];
};

export default usePotions;
