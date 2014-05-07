Klassy.js
=========

A simple jquery plugin that is similar to classie.js where it allows quick alterations to classes. 

<h2> Methods </h2>


``` js
$(*).hasKlass( element ) ==> returns true/false
$(*).addKlass('my-new-class-1', 'my-new-class-2', ... ) ==> adds the listed classes ==> Returns the element
$(*).removeKlass( 'my-unwanted-class-1', 'my-unwanted-class-1', ... ) ==> removes the listed classes ==> Returns the element
$(*).toggleKlass( 'my-class-1', 'my-class-2', ... ) ==> removes the class if it exists otherwise it will add it ==> Returns the element
$(*).switchKlass( ['my-class-1', 'my-class-1', ...], ['my-other-class-1', 'my-other-class-1', ...], true ) ==> Will remove all the elements in the first array and add all the elements in the second if the 3rd parameter is true, Otherwise it will do the opposite. ==> Returns the element
```