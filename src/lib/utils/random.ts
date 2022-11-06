/**
 * Picks a random item from an array
 * @param array The array to pick a random item from
 * @example
 * const randomEntry = pickRandom([1, 2, 3, 4]) // 1
 */
export function random<T>(array: readonly T[]): T {
	const { length } = array;
	return array[Math.floor(Math.random() * length)];
}

export function random2D<T>(array: readonly T[][]): T[] {
	const { length } = array;
	return array[Math.floor(Math.random() * length)];
}
