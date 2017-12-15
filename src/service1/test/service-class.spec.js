/* eslint-env mocha */

import { expect } from 'chai';
import ServiceClass from '../service-class';

describe('ServiceClass', () => {
	before(() => {
	});

	after(() => {});

	beforeEach(() => {
	});

	afterEach(() => {});

	it('2+2===4', () => {
		expect(2+2).to.equal(4);
	});

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
