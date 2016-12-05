module.exports = (sort) => {
	const arrays = [];
	for(let i = 0; i < 100; i++){
		let array = [];
		let direction = 1;
		for(let i = 0; i < Math.floor(Math.random() * 100); i++){
			direction *= -1;
			array.push(Math.floor(Math.random() * 100) * direction)
		}
		arrays.push(array);
}

	return arrays.every((arr) => {
		const A = arr.sort((a, b) => a-b);
		const B = sort(arr);
		const check = arr.every((c, i, a) => A[i] === B[i]);
		if(!check) console.log(A, B, "***");
		return check;
	})
}