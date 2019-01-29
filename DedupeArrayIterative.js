class DedupeArrayIterative {
	dedupe(array) {
		let set = [];

		for (let i = 0; i < array.length; i++) {
			if (!set.includes(array[i])) {
				set.push(array[i]);
			}
		}

		return set;
	}

	run(array) {
		return this.dedupe(array);
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const dai = new DedupeArrayIterative();
dai.run([1,1,2,3,4,5,4]);