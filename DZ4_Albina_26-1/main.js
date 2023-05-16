
   //Пункт.1

// var counterElement = document.getElementById('counter')
// var decrementButton = document.getElementById('decrement')
// var  incrementButton = document.getElementById('increment')
//
// var counterValue = 0
//
// function updateCounter () {
//     counterElement.textContent = counterValue
// }
// function incrementCounter () {
//     counterValue++
//     updateCounter ()
//     counterElement.classList.add('green')
//     counterElement.classList.remove('red')
// }
// function decrementCounter () {
//     if (counterValue > 0) {
//         counterValue--
//         updateCounter()
//         counterElement.classList.add('red')
//         counterElement.classList.remove('green')
//     }
// }
//
// decrementButton.addEventListener('click', decrementCounter)
//incrementButton.addEventListener('click', incrementCounter)




  //пункт 2

   // 2) Создать кнопку и навесить на него обработчик событий "click". При нажатии на эту кнопку
   // должно появиться диалоговое окно ( promt() ), если что либо ввести в диалоговое окно,
   // то введённое значения должно отобразиться в HTML.
   //     При повторном нажатии должно происходить всё то же самое, но текст который был до этого должна поменяться.

// var click = document.getElementById('click')
// var output = document.getElementById('output')
//
//
// var text = ''
// function  buttonText (){
//     var input = prompt('Введите текст!')
//     if (input !== null){
//         text = input
//     }
//     output.textContent = text
// }
// click.addEventListener('click',buttonText)
//
//




  // 3Пункт
   //Сверстать Светофор используя  HTML, CSS
  // в JS сделать такой функционал:  если ввести в диалоговое окно  "Красный"
  // на светофоре загорается красный цвет и выводится текст “STOP” или же Зеленый то “GO”

   var trafficColor = prompt('Введите цвет!(красный,желтый,зеленый)')
   function color (trafficColor){
    var redLight = document.querySelector('.redLight')
    var yellowLight = document.querySelector('.yellowLight')
    var greenLight = document.querySelector('.greenLight')
    var text = document.getElementById('text')
       switch (trafficColor){
           case 'красный':
            redLight.style.backgroundColor = 'red'
               text.innerText= 'STOP'
               break
           case 'желтый':
            yellowLight.style.backgroundColor = 'yellow'
               text.innerText= 'WAIT'
               break
           case 'зеленый':
            greenLight.style.backgroundColor = 'green'
               text.innerText= 'GO'
               break
           default:
               alert('ведён  неправильный цвет!')
       }

   }

color(trafficColor)