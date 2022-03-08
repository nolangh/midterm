function firstDuplicate(array) {
	let pairs = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (j == array[i]) {
				pairs += 1;
				return array[j];
			} else if (j == i && array.length == 2) {
				pairs += 1;
				return array[0];
			} else if (array.length == 1) {
				return -1;
			} else if (pairs == 0) {
				return -1;
			}
		}
	}
}
