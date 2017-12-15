/* eslint-env mocha */

// The same tests as service-class.spec.js, except we load ServiceClass with
// a require instead of import.

import { expect } from 'chai';

describe('service-class.require', () => {
	var ServiceClass;

	before(() => {
		ServiceClass = require('../service-class').default;
	});

	after(() => {});

	beforeEach(() => {
	});

	afterEach(() => {});

	it('ServiceClass constructor takes true param', () => {
		var sc = new ServiceClass(true);
		expect(sc.syncService()).to.be.true;
	});

	it('ServiceClass constructor throws on null', () => {
		expect(() => new ServiceClass(null)).to.throw;
	});

	it('syncService returns true', () => {
		expect(new ServiceClass(true).syncService()).to.be.true;
	});

	it('asyncService returns promise of true', (done) => {
		var sc = new ServiceClass(true);
		sc.asyncService().then(value => {
			expect(value).to.be.true;
			done();
		});
	});
});
