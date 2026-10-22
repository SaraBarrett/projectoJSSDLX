const MESSAGE = " TASTE THE RAINBOW! ";
let whisper = MESSAGE.toLowerCase().trim();
let planetas = [
  "Mercúrio",
  "Vénus",
  "Terra",
  "Mart",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
  "Plutão",
];

const WORD = "skateboard";

let facialHair = WORD.slice(5).replace("o", "e");

console.log(facialHair);

function exPlanets() {
  console.log(planetas);
  planetas[3] = "Marte";
  planetas.pop();
  planetas.unshift("novoplaneta");

  console.log(planetas);
}

function objects() {
  const product = {
    name: "caneta",
    instock: true,
    price: 1.99,
    colors: ["vermelho", "azul", "verde"],
  };

  console.log(product.price);
  console.log(product.colors[2]);
  product.price = 2.55;
  console.log(product);
}

function scooby() {
  const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
  //ciclo for
  for (let item of people) {
    console.log(item.toUpperCase());
  }
}

function isSnakeEyes(num1, num2) {
  if (num1 == 1 && num2 == 1) {
    console.log("is snake eyyes");
  } else {
    console.log("not snake eyyes");
  }
}

function mapEx() {
  const fullNames = [
    { first: "Albus", last: "Dumbledore" },
    { first: "Harry", last: "Potter" },
    { first: "Hermione", last: "Granger" },
    { first: "Ron", last: "Weasley" },
    { first: "Rubeus", last: "Hagrid" },
    { first: "Minerva", last: "McGonagall" },
    { first: "Severus", last: "Snape" },
  ];

  const firstNames = fullNames.map(function (element) {

    return element.first;
  });

  console.log(firstNames);
}

const greet = (personName = "Lucas") => {
  console.log("hey " + personName);
  return personName;
};
