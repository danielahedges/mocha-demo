// just a utility that executes commands.

export function foo(mustBeTrue) {
	if (!mustBeTrue) {
		throw new Error('foo mustBeTrue is falsy');
	}
	return true;
}

export function fooAsync(mustBeTrue) {
	return Promise.resolve(true).then(() => {
		if (!mustBeTrue) {
			throw new Error('fooAsync mustBeTrue is falsy');
		}
		return foo(mustBeTrue);
	});
}
