function sortedFrequency(arr, num) {
	let left = 0;
	let right = arr.length - 1;
	let firstOccurrence = findFirstOccurence(
		arr,
		num,
		left,
		right
	);

	if (firstOccurrence === -1) {
		return -1;
	}
	let lastOccurrence = findLastOccurrence(
		arr,
		num,
		left,
		right
	);

	return lastOccurrence - firstOccurrence + 1;
}

function findFirstOccurence(arr, num, left, right) {
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (
			arr[mid] === num &&
			(mid === 0 || arr[mid - 1] < num)
		) {
			return mid;
		} else if (arr[mid] < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

function findLastOccurrence(arr, num, left, right) {
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (
			arr[mid] === num &&
			(mid === arr.length - 1 || arr[mid + 1] > num)
		) {
			return mid;
		} else if (arr[mid] <= num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

module.exports = sortedFrequency;
