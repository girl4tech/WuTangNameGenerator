var form = document.getElementById('form');
var weird = [];
var funny = [];

function makeWeird(){
  var weirder = weird.reverse();
  console.log(weirder);
}
function makeFunny(){

}


form.addEventListener('submit',function(e){
  e.preventDefault();
  var q1 = document.getElementById('q1').value;
  var q2 = document.getElementById('q2').value;
  var q3 = document.getElementById('q3').value;
  var q4 = document.getElementById('q4').value;
  var q5 = document.getElementById('q5').value;
  weird.push(q1, q2, q3,);
  funny.push(q4, q5)
  makeWeird();
  makeFunny();
  // console.log(weird[1]);
  // console.log(funny);
  // console.log(q2);
  // console.log(q3);
  // console.log(q4);
});

//
// var arrayA = [1, 2];
// var arrayB = [3, 4];
// var newArray = arrayA.concat(arrayB);

// var form = document.forms[0];
// form.addEventListener("submit", function(evt){
//   var email = form.elements['answer_13829'].value;
//   if( email == 'geobraks@yahoo.ca') {
//      evt.preventDefault()…
