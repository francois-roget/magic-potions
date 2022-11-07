import { User } from '../types';
// @ts-ignore
import dumbledoreImage from '../../img/Dumbledore.jpg';
// @ts-ignore
import harryImage from '../../img/HarryPotter.jpeg';
// @ts-ignore
import dobbyImage from '../../img/Dobby.png';

export const getUsers = (): User[] => [
	{
		name: 'Albus Dumbledore',
		photo: dumbledoreImage,
		permissions: ['canAdd', 'canRemove', 'canExecute'],
	},
	{
		name: 'Harry Potter',
		photo: harryImage,
		permissions: ['canAdd', 'canExecute'],
	},
	{
		name: 'Dobby',
		photo: dobbyImage,
		permissions: ['canExecute'],
	},
];
