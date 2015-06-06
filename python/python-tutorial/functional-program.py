# Functional Programming

def add(x, y, f):
	return f(x) + f(y)

def func(x):
	return x * (x + 1)

print add(-5, 6, abs)
print add(-5, 6, func)

def f(x):
	return x * x

print map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])