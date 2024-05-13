function countZeroes(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (arr[middle] === 1) {
			left = middle + 1;
		} else {
			if (middle === 0 || arr[middle - 1] === 1) {
				return arr.length - middle;
			} else {
				right = middle - 1;
			}
		}
	}
	return -1;
}

module.exports = countZeroes;
