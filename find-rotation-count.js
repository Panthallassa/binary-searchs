function findRotationCount(arr) {
	let left = 0;
	let right = arr.length - 1;

	if (arr[left] <= arr[right]) {
		return 0;
	}

	while (left <= right) {
		if (arr[left] <= arr[right]) {
			return left;
		}

		const mid = Math.floor((left + right) / 2);
		const next = (mid + 1) % arr.length;

		if (arr[mid] > arr[next]) {
			return next;
		}

		// determine which half of the array to continue searching
		if (arr[left] <= arr[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

module.exports = findRotationCount;
