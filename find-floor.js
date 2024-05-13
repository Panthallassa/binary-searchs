function findFloor(arr, x) {
	let left = 0;
	let right = arr.length - 1;
	let floor = -1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (arr[mid] > x) {
			right = mid - 1;
		}
		// if arr[mid] is less than or equal to x update the floor
		else {
			floor = arr[mid];
			left = mid + 1;
		}
	}
	return floor;
}

module.exports = findFloor;
