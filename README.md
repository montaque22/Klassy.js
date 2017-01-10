Klassy.js
=========

A simple jquery plugin that is similar to classie.js where it allows quick alterations to classes. 

<h2> Methods </h2>


``` js
var domElement = document.getElementsByTagName("body")[0];

// Checks the existence of a classes. If all classes exist it will return true. 
// If at least one class doesn't exist then it will return false
klassy.hasKlass( domElement, "class-to-find-on-element", "another-class-to-find", ... ) ==> returns true/false

//adds the listed classes
klassy.addKlass(domeElement, 'my-new-class-1', 'my-new-class-2', ... ) ==>  Returns klassy object
 
//removes the listed classes
klassy.removeKlass(domeElement, 'my-unwanted-class-1', 'my-unwanted-class-1', ... ) ==> Returns klassy object

//removes the class if it exists otherwise it will add it
klassy.toggleKlass(domeElement, 'my-class-1', 'my-class-2', ... )  ==> Returns klassy object

```