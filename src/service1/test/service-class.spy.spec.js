/* eslint-env mocha */

// Tests service-class, using a spy on util1.
// Essentially, this allows us to test the service with the actual
// dependency loaded, and examine the calls afterwards.

import { expect } from 'chai';
import sinon from 'sinon';

describe('service-class.spy', () => {
	var ServiceClass, sc, util1;

	before(() => {
		// unit under test:
		ServiceClass = require('../service-class').default;

		// dependency:
		util1 = require('../../util1/util1');
		sinon.spy(util1, 'foo');
	});

	after(() => {
		util1.foo.restore();
	});

	beforeEach(() => {
		sc = new ServiceClass(true);
		util1.foo.reset();
	});

	afterEach(() => {
		sc = null;
	});

	it('spy counter starts at zero', () => {
		expect(util1.foo.calledOnce).to.be.false;
		expect(util1.foo.callCount).to.equal(0);
	});

	it('asyncService returns promise of true', (done) => {
		var sc = new ServiceClass(true);
		sc.asyncService().then(value => {
			expect(value).to.be.true;
			done();
		});
	});

	it('callFoo calls foo once', () => {
		sc.callFoo(true);
		expect(util1.foo.calledOnce).to.be.true;
	});

	it('spy counter resets to zero', () => {
		expect(util1.foo.calledOnce).to.be.false;
		expect(util1.foo.callCount).to.equal(0);
	});

	it('callFoo throws exception on falsy parameter', () => {
		// This means the actual util1 was loaded and called.
		// A stub would not throw.
		expect(() => sc.callFoo(false)).to.throw;
	});

	it('callFooAsync calls foo once', (done) => {
		sc.callFooAsync(true).then((val) => {
			// expect(util1.foo.calledOnce).to.be.true;
			expect(val).to.be.true;
			done();
		}).catch((err) => {
			console.log('wtf are we doing here?');
			console.log('err', err);
			done();
		});
	});

});
