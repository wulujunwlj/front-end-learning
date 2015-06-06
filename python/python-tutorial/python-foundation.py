# print absolute value of an integer
# -*- coding: utf-8 -*-

print 'print string ==================='
print 'Hello, world!'

print 'print number ==================='
a = 10
if a >= 0:
	print a
else:
	print -a

print 'print string ==================='
print ''' Line 1,
Line 2,
Line 3'''

print 'print boolean =================='
print True
print False
a = 12
print 12 == a

print 'print None ===================='
print None

print 'print encode & decode ========='
print ord('A')
print chr(65)
# print u'中华人名共和国'

print 'printf ======================='
print 'Hi, %s, I\'m %d years old.' % ('Mary', 12)
print '%2d-%02d' % (3, 1)
print '%.2f' % 3.1415926

print 'print list ==================='
classmates = ['Micheal', 'Bob', 'Tracy']
print classmates
print len(classmates)
print classmates[0]
print classmates[1]
print classmates[2]
# print classmates[3]
print classmates[-2]
classmates.append('Adam')
print classmates
classmates.insert(1, 'Jack')
print classmates
print classmates.pop()

print classmates

print classmates.pop(2)

classmates2 = ('Micheal', 'Bob', 'Tracy')
print classmates2

print 'print condition ==========='
age = 12
if age >= 6:
	print 'Teenager'
elif age >= 18:
	print 'Adult'
else:
	print 'Kid'

print 'print for...in ====='
for mate in classmates:
	print mate

sum = 0
for num in range(101):
	sum += num
print 'sum =',sum

print 'print dict & set ====='
d = {'Micheal': 95, 'Bob': 72, 'Tracy': 68}
print d
for user in d:
	print 'name is', user, '; and score is ', d[user]

print 'Bob' in d
print d.get('Bob')

print d.pop('Tracy')
print d

s = set([1, 2, 5, 2, 3, 8])
print s
print s.add(7)
print s

print 'print function ==================='
r1 = 12.34
r2 = 9.08
r3 = 73.1

s1 = 3.14* r1 * r1
s2 = 3.14* r2 * r2
s3 = 3.14* r3 * r3

print 's1= ', s1, ';s2= ', s2, '; s3= ', s3
