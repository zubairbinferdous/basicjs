// console.log('love me so much');

// var marks = [ 89 , 97 , 89 , 68 , 94 ];

// for( var i = 0; i < marks.length ; i++ ){
//     var elemant = marks[i];
//     console.log(elemant);
// }

// console.log('i am good');
// console.log('i not good');

// function add(number1 , number2) {
//     var total = number1 + number2;
//     return total;
// }
// var result= add( 45 , 55);
// console.log(result);


// console.log('i not girl');
// console.log('i friend is good');
// var result = add(70 , 100);
// console.log(result);

function largetsNumber(number) {

    
    for (let i = 0; i < number.length; i++) {

        var elemant = number[i];         //  bracket ata kano

        var larger = number[0];
        
        if ( elemant > larger ) {        //79 > 0           
             larger = elemant;           //79 >
        }

    }

    return larger;  // why larger kaka dorlo 

}

var allNum=[79 ,90,88,87,56,350]
var output = largetsNumber(allNum);
console.log( "big number=" , output);
