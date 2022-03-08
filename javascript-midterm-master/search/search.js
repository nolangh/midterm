function search(nameList, searchTerm) {
	let newArray = [];
	for (let val of nameList) {
		if (val.toUpperCase().includes(searchTerm.toUpperCase())) {
			newArray.push(val);
		}
	}
	return newArray;
}
