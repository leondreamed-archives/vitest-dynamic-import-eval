export async function cowsayEval() {
	const fn = async function () {}.constructor(
		"const { default: cowsay } = await import('cowsay'); console.log(cowsay.say({ text: 'eval' }))"
	);
	await fn();
}
