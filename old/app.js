var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var decimal = document.getElementById('decimal');
var clear = document.getElementById('clear');
var button = document.querySelectorAll('button');
var header = document.querySelector('header');
var number = document.querySelectorAll('.number');
var math = document.querySelectorAll('.math');
var arrayNumbers = [];
var arrayPlus = [];
var arrayMinus = [];
var arrayMultiply = [];
var arrayDivide = [];

function clickButton(){
  x = parseFloat(this.innerHTML);
  console.log(x);
  return x;
}
for(i=0; i<button.length; i++) {
  button[i].addEventListener('click', clickButton)
}

function clickOperator() {
  if (x === '+') {
    console.log('+ worked');
  }
}

//Click function sends number values to array & displays number in display
// function clickNumber() {
//   for(i=0; i<number.length; i++) {
//     number[i].addEventListener('click', function(){
//         arrayNumbers.push(this.innerHTML);
//         console.log(this.innerHTML + ' was stored');
//           if (arrayNumbers.length >0) {
//             header.innerHTML = arrayNumbers.join('');
//             console.log(arrayNumbers);
//           }
//     });
//   }
// }
// clickNumber();
//
// function clickMath() {
//   for(i=0; i<math.length; i++) {
//     math[i].addEventListener('click', function(){
//       if (this.innerHTML === "+") {
//         var join = arrayNumbers.join('');
//         arrayPlus.push(join);
//         console.log(arrayPlus);
//         while (arrayNumbers.length > 0) {
//           arrayNumbers = [];
//         }
//         console.log(arrayNumbers + arrayPlus);
//         header.innerHTML = arrayNumbers + arrayPlus;
//       }
//     });
//   }
// }
// clickMath();
