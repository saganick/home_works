
   // 1 Пункт

// function getType (date) {
//     console.log(typeof date)
//
// }
// getType ('five')

   //2 Пункт
// function cols (num1,operator,num2){
//     var result ;
// switch (operator){
//     case '*':
//     result = num1*num2 ;
//     break
//
//     case '/':
//     result = num1/num2 ;
//     break
//
//     case '+':
//     result = num1+num2 ;
//     break
//
//
//     case '-':
//     result = num1-num2 ;
//     break
//
//     default :
//         result = 'invalid operator!'
//
//
// }
// return result
//
//
// }
//
//    console.log(cols(5, '+' ,3))


   //3.Пункт

function search (element, arr ) {
    var left = 0
    var rith = arr.length-1
    while (left <= rith){
        var midle = Math.floor((left+rith) /2)
        if (arr [midle]=== element) {
            return midle
        }else if (arr[midle] < element  ) {
            left=midle+1
        }
        else {rith=midle-1}



            }

return -1

}
var arr=[34,2,9,6]
   var element = 9
   var result = search(element,arr)
   console.log(result)

