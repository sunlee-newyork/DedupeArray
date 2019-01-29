class DedupeArrayRecursive {
	dedupe(array, set, i) {
		if (i === array.length - 1) {
			return set;
		}

		if (!set.includes(array[i])) {
			set.push(array[i]);
		}

		return this.dedupe(array, set, ++i);
	}

	run(array) {
		return this.dedupe(array, [], 0);
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const dar = new DedupeArrayRecursive();
dar.run([1,1,2,3,4,5,4]);