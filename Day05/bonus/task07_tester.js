const task07 = require('../task07.js');

var toFilter = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
var res = task07.arrayFiltering ( toFilter , function ( value ) {
return value % 3 === 0;
}) ;
console . log ( res ) 