import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(defaultValue: T, key: string): PersistedState<T> {
	const [value, setValue] = useState<T>(() => {
		const value = window.localStorage.getItem(key);
		console.log(value);

		return value && value !== 'undefined' ? (JSON.parse(value) as T) : defaultValue;
	});

	useEffect(() => {
		if (value) {
			window.localStorage.setItem(key, JSON.stringify(value));
		} else {
			window.localStorage.removeItem(key);
		}
	}, [key, value]);

	return [value, setValue];
}

export default usePersistedState;
