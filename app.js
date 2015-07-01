
var memory="";
var operator="";
var numbers = document.querySelectorAll('.numbers');

var clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clearDisplay);

var plusButton = document.getElementById('add');
plusButton.addEventListener('click', addOperator);

var subtractButton = document.getElementById('sub');
subtractButton.addEventListener('click',subtractOperator);

var multiplyButton = document.getElementById('mult');
multiplyButton.addEventListener('click', multiplyOperator);

var divideButton = document.getElementById('div');
divideButton.addEventListener('click', divideOperator);

var equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click',calculate);

var display = document.querySelector('.display');

for(var i=0;i <numbers.length; i+=1){
  numbers[i].addEventListener('click',getDisplay);
}

function getDisplay(){
  display.innerText = display.innerText + this.innerText;
}

function clearDisplay(){
  display.innerHTML = "";
}

function addOperator(){
  console.log(display);
  memory = Number(display.innerText);
  operator = add;
  display.innerText = "";
}

function subtractOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = subtract;
  display.innerText = "";
}

function multiplyOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = multiply;
  display.innerText = "";
}

function divideOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = divide;
  display.innerText = "";
}

function add (a,b){
  return a + b;
}

function subtract (a,b){
  return a - b;
}

function divide (a,b){
  return a / b;
}

function multiply (a,b){
  return a * b;
}

function calculate(){
  var memoryTwo = Number(display.innerHTML);
  var result = operator(memory,memoryTwo);
  display.innerText = result;
  console.log(result);
}
