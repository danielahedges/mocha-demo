// A service, exposed as a class.
//
// This class has multiple fanout, i.e., is called by both modules.

import { foo, fooAsync } from '../util1/util1';

export default class ServiceClass {
	constructor (mustBeTrue) {
		if (!mustBeTrue) {
			throw new Error('ServiceClass constructor argument must be true.');
		}
	}
	syncService () {
		// This is a synchronous service.
		return true;
	}
	asyncService () {
		return Promise.resolve(true).then((val) => {
			return val;
		});
	}
	callFoo (fooParam) {
		return foo(fooParam);
	}
	callFooAsync (fooAsyncParam) {
		return fooAsync(fooAsyncParam);
	}
}
