
/*
 * KLASSY.JS
 * CREATED BY: Michael G. Montaque
 * DESCRIPTION: A simple Jquery plugin that allows a klassy way to remove and insert classes to an element on the DOM
*/
(function ($) {
    // Determine if the class exist on the element
    $.fn.hasKlass = function (){
        for(var i = arguments.length;i--;){
            if (this.hasClass(arguments[i])) {
                return true;
            }
        }
        return false;
    };
    // removes the list of classes from the element
    $.fn.removeKlass = function (){
        for(var i = arguments.length;i--;){
            this.removeClass(arguments[i]);
        }
        return this;
    };
    // Adds the list of classes to the element
    $.fn.addKlass = function (){
        for(var i = arguments.length;i--;){
            this.addClass(arguments[i]);
        }
        return this;
    };
    // If the class exists it is removed otherwise it is added
    $.fn.toggleKlass = function (){
        for(var i = arguments.length;i--;){
            if (this.hasClass(arguments[i])) {
                this.removeClass(arguments[i]);
            }else{
                this.addClass(arguments[i]);
            }
        }
        return this;
    };
    /* if isForward is true, it will remove all the classes from the element
    /* that is in removeClass and add the classes from addClass. Otherwise 
    /* it will do the reverse.
    */
     $.fn.switchKlass = function (removeClass, addClass, isForward){
        var max = Math.max(removeClass.length, addClass.length);
        var classToRemove = isForward && removeClass || addClass;
        var classToAdd = isForward && addClass || removeClass;
        for(var i = 0;i< max; i++){
            if (i < classToRemove.length) {
                this.removeClass(classToRemove[i]);
            };
            if (i < classToAdd.length) {
                this.addClass(classToAdd[i]);
            };
        }
        return this;
    };
})( jQuery );