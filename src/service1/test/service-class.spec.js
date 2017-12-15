/* eslint-env mocha */

import { expect } from 'chai';
import ServiceClass from '../service-class';

describe('ServiceClass', () => {
	before(() => {
		console.log('ServiceClass before');
	});

	after(() => {});

	beforeEach(() => {
		console.log('ServiceClass before each');
	});

	afterEach(() => {});

	it('2+2===4', () => {
		expect(2+2).to.equal(4);
	});
});
