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
	},
	{
		name: 'Harry Potter',
		photo: harryImage,
	},
	{
		name: 'Dobby',
		photo: dobbyImage,
	},
];
