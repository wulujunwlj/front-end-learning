
describe('A suite of basic functions', function() {
	it('reverse word', function() {
		expect('ABCD').toEqual(reverse('DCBA'));
		expect('string').toEqual(reverse('gnirts'));
	});

	it('reverse letter', function() {
		expect('A').toEqual(reverse('A'));
	});
});