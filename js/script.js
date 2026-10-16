let myHello = "hello";
let myFirstName = "Sara";
let mySurname = "Monteiro";
let alunos = ["Wilson", "Roberta", "Diogo", "Nuno"];

function myClass(){

console.log(alunos);

let newStudent = prompt('qual é o novo aluno?');
alunos.push(newStudent);

console.log(alunos);
}


//primeira função de JS
function helloWorldF() {
  let userName = prompt("qual é o seu nome?");

  //versão simples
  //alert(myHello + ' '+userName+'!');

  //versão string template literals
  alert(`${myHello} ${userName}!`);
}

function voteAge() {
  let userAge = parseInt(prompt("qual é a sua idade?"));

  if (userAge > 17) {
    alert("potes votar");
  } else {
    alert("não podes votar");
  }

  return userAge;
}

function auth(){
  let userAuth = {
    name:'Sara',
    job: 'Formadora',
    email: 'sara@gmail.com'
  }

  userAuth.job = 'job';

  console.log(userAuth.email)

}
