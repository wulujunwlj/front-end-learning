# Python functions

import math
from collections import Iterable

def my_abs(x):
	if x >= 0:
		return x
	else:
		return -x

print my_abs(-10)

def nop():
	pass

print nop()

def my_abs2(x):
	if not isinstance(x, (int, float)):
		raise TypeError('bad operand type')
	if x >= 0:
		return x
	else:
		return -x

print my_abs2(-4)

def move(x, y, step, angule=0):
	nx = x + step * math.cos(angule)
	ny = y + step * math.sin(angule)

	return nx, ny

x, y = move(100, 100, 60, math.pi / 6)
print x, y

print 'function optional arguments ====='
def power(x, n=2):
	s = 1
	while n > 0:
		n = n - 1
		s = s * x
	return s

print power(3)

def enroll(name, gender, age = 6, city = 'Beijing'):
	print 'name:', name, ';age:', age, ';gender:', gender, ';city:', city

enroll('Micheal', 'F', 14)
enroll('Bob', 'M', city='W DC.')

def add_end(L = None):
	if L is None:
		L = []

	L.append('end');
	return L

print add_end([1, 2, 3])
print add_end(['x', 'y', 'z'])
print add_end()
print add_end()

print 'function with different number of params'
def cal(numbers):
	sum = 0
	for n in numbers:
		n = int(n)
		sum += n * n

	return sum

print cal(['1', 4, 3])
print cal(('1', 4, 3))

def cal2(*numbers):
	sum = 0
	for n in numbers:
		sum += n * n
	return sum

print cal2(1, 3)
print cal2()

nums = [1, 2, 3]
print cal2(nums[0], nums[1])
print cal2(*nums)

def person(name, age, **kw):
	print 'name:', name, '; age:', age, '; other:', kw

person('Micheal', 30)
person('Bob', 35, city = 'Beijing')

print 'print fact function ====='
def fact(n):
	if n == 1:
		return 1
	return n * fact(n - 1)

print fact(12)
print fact(500)

def fact2(n):
	return fact_iter(n, 1)

def fact_iter(num, product):
	if num == 1:
		return product
	return fact_iter(num - 1, num * product)

print fact2(500)

print 'print slice =========='
l = range(100)
print l
print l[:10]

t = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print t[2: 5]

print 'print iterator =========='
dicts = {'a': 1, 'b': 2, 'c': 3}
for d in dicts:
	print d

for value in dicts.itervalues():
	print value

for k, v in dicts.iteritems():
	print k, v

print isinstance('abc', Iterable)
print isinstance([1, 2, 3], Iterable)
print isinstance(dicts, Iterable)
print isinstance(24, Iterable)

for i, value in enumerate(['A', 'B', 'C']):
	print i, value

print 'print list generator ====='
L = []
for x in range(1, 11):
	L.append(x * x)
L2 = [x * x for x in range(1, 11)]

print 'L-->', L
print 'L2-->', L2

print [x * x for x in range(1, 11) if x % 2 == 0]
print [m + n for m in 'ABC' for n in 'XYZ']