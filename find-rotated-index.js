function findRotatedIndex(arr, num) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let midVal = arr[mid];

		if (midVal === num) {
			return mid;
		} else if (arr[left] <= midVal) {
			if (num >= arr[left] && num < midVal) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (num > midVal && num <= arr[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
}

module.exports = findRotatedIndex;
