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
