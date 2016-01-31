
describe('A suite of basic functions', function() {
	it('reversed word', function() {
		expect('DCBA').toEqual(reverse('ABCD'));
		expect('123').toEqual(reverse('321'));
	});

	it('reversed letter', function() {
		expect('A').toEqual(reverse('A'));
	})
})