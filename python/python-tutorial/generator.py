# Python Generator

L = [x * x for x in range(10)]
print L

g = (x * x for x in range(10))
print g

print g.next()
print g.next()

for n in g:
	print n

print 'fib function====='
def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		# print b
		yield b
		a, b = b, a + b
		n = n + 1

print fib(6)

def odd():
	print 'step 1'
	yield 1
	print 'step 2'
	yield 2
	print 'step 3'
	yield 5

o = odd()
print o.next()
print o.next()
print o.next()
# print o.next()

for n in fib(6):
	print n