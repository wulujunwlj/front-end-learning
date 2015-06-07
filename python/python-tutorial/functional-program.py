# Functional Programming
import functools

def add(x, y, f):
	return f(x) + f(y)

def func(x):
	return x * (x + 1)

print add(-5, 6, abs)
print add(-5, 6, func)

def f(x):
	return x * x

print map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])

def add(x, y):
	return x + y

print reduce(add, [1, 4, 6, 7, 8])
print sum([1, 4, 6, 7, 8])

def fn(x, y):
	return x * 10 + y

def char2num(s):
	return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]

print reduce(fn, map(char2num, '13579'))

def is_odd(n):
	return n % 2 == 1

print filter(is_odd, [1, 2, 3, 5, 234, 7, 89])

def not_empty(s):
	return s and s.strip()

print filter(not_empty, ['A', '', 'B', None, 'C', '      '])

print sorted([35, 12, 5, 91, 0, -4])

print sorted(['abc', '12cadg', '12', 12])

def reversed_cmp(x, y):
	if x > y:
		return -1
	if x < y:
		return 1
	return 0

print sorted([35, 12, 5, 91, 0, -4], reversed_cmp)

print sorted(['bob', 'about', 'Zoo', 'Credit'])

def cmp_ignore_case(s1, s2):
	u1 = s1.upper()
	u2 = s2.upper()
	if u1 < u2:
		return -1
	if u1 > u2:
		return 1
	return 0

print sorted(['bob', 'about', 'Zoo', 'Credit'], cmp_ignore_case)

def calc_sum(*args):
	ax = 0
	for n in args:
		ax += n

	return ax

def lazy_sum(*args):
	def sum():			# closure
		ax = 0
		for n in args:
			ax += n
		return ax
	return sum

f = lazy_sum(1, 2, 6, 123)
print f
print f()

print 'print closure =========='
def count():
	fs = []
	for i in range(1, 4):
		def f():
			return i * i
		fs.append(f)
	return fs

f1, f2, f3 = count()
print f1()
print f2()
print f3()

print map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9])

print 'anonymous function ====='
f = lambda x: x * x
f
print f(4)

def build(x, y):
	return lambda: x * x + y * y

print build(3, 4)()

print 'decorator =========='
def now():
	print '2013-12-25'

f = now

print f
print f()
print now.__name__
print f.__name__

def log(func):
	def wrapper(*args, **kw):
		print 'call %s():' % func.__name__
		return func(*args, **kw)
	return wrapper

@log
def now():
	print '2013-12-25'

now()

def log2(text):
	def decorator(func):
		def wrapper(*args, **kw):
			print '%s %s():' % (text, func.__name__)
			return func(*args, **kw)
		return wrapper
	return decorator

@log2('execute')
def now():
	print '2013-12-25'

now()

print 'print partial function====='
print int('12345')
print int('12345', base=8)
print int('12345', base=16)

def int2(x, base = 2):
	return int(x, base)

print int2('1000000')
print int2('1010101')

int3 = functools.partial(int, base=2)
print int3('1000000')
print int3('1010101')