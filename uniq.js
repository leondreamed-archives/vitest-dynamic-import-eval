export async function arrayUniqEval() {
	const fn = async function () {}.constructor(
		"const { default: arrayUniq } = await import('array-uniq'); console.log(arrayUniq([1, 2, 2]))"
	);
	await fn();
}
