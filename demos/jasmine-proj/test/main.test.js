/**
 * 每个测试都在一个测试集中运行
 * suite 就是一个测试集，用 describe 函数封装
 * spec 表示每个测试用例，用 it 函数封装
 * 通过 expect 函数，作为程序断言来判断相等关系
 * setup 过程用 beforeEach 函数封装
 * tearDown 过程用 afterEach 函数封装
 */


// describe('A Suite', function() {
// 	var foo;

// 	beforeEach(function() {
// 		foo = 0;
// 		foo += 1;
// 	});

// 	afterEach(function() {
// 		foo = 0;
// 	});

// 	if('Contains spec with an expectation', function() {
// 		expect(true).toBe(true);
// 	});
// });

it('reverse word', function() {
	expect('DCBA').toEqual(reverse('ABCD'));
});