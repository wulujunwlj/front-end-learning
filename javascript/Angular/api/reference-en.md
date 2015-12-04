


## AngularJS API Docs

Welcome to the AngularJS doc page.These pages contain the AngularJS reference materials for version 1.3.9-local+sha.a3c3bf3 snapshot.

The documentation is organizedinto modules which contain various components of an AngularJS application.These components are directives,services,filters,providers,templates,global APIs,and testing mocks.

>Angular Prefixes $ and $$:To prevent accidental name collisions with your code,Angular prefixes names of publice objects with $ and names of private objects with $$.Please do not use the $ or $$ prefix in your code.

## Angular Modules    

ng(core module)
This module is provided by default and contains.

Directives
This is the core collection of directives you would use in your template code to build an AngularJS application.

Services/Factories
This is the core collection of services which are used within the DI of your application.Some examples include:$compile,$http,$location,etc...

Filters
The core filters available in the ng module are used to transform template data bvefore it is rendered within directives and expressions.
Some examples include:filter,date,currency,lowercase,uppercase,etc...

Global APIs
The core global API functions are attached to the angular object.These core functions are useful for low level javascript operations within your application.
Some examples include:angular.copy(),angular.equals(),angular.element(),etc...

## ngRoute

Use ngRoute to enable URL routing to your application.