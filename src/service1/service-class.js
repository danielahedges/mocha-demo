// A service, exposed as a class.
//
// This class has multiple fanout, i.e., is called by both modules.

export default class ServiceClass {
	constructor (mustBeTrue) {
		if (!mustBeTrue) {
			throw new Error('ServiceClass constructor argument must be true.');
		}
		console.log('constructed ServiceClass');
	}
	syncService () {
		// This is a synchronous service.
		console.log('ServiceClass syncService');
		return true;
	}
	asyncService () {
		return Promise.resolves(true).then(() => {
			console.log('ServiceClass asyncService');
		});
	}
}
