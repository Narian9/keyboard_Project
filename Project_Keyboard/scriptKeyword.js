//const nodeList = document.querySelectorAll("button");
// Using querySelector
const buttons = document.querySelectorAll(".letter");
const screen = document.getElementById("screen");

const delete_btn = document.querySelector(".deleteKey");
const bloqMayus_btn = document.querySelector(".letterMayus");
const space_btn = document.querySelector("#space");

var bloqMayusFlag = false;


//Array used to save characters
let chars = [];

//funcion para agregar cada caracter al textarea

buttons.forEach((letter) => {
  letter.addEventListener("click", () => {
    console.log("Letr: " + letter.innerHTML);
    screen.innerHTML += letter.innerText;
    chars = screen.innerHTML.split("");
  });
});

//funcion para eliminar caracteres

delete_btn.addEventListener("click", () => {
  chars.pop();
  screen.innerHTML = chars.join("");
});

//funcion para cuando den click al boton space

space_btn.addEventListener("click", () => {
  chars.push(" ");
  screen.innerHTML = chars.join("");
});

//Funcion para mayusculas mantener boton

bloqMayus_btn.addEventListener("click", () => {
  if (bloqMayusFlag == false) {
    buttons.forEach((btn) => {
      btn.innerText = btn.innerText.toUpperCase();
      bloqMayusFlag = true;

    });
  } else {
    buttons.forEach((btn) => {
      btn.innerText = btn.innerText.toLowerCase();
      bloqMayusFlag = false;
    });
  }

});
// function writing(){
//  let id = "";




// };

// function UpperOrLowerCase(){
//     const keys = document.querySelectorAll('letter');
//     console.log(keys.length+"  First key:   "+keys[0]);
//     for(let i = 0; i< keys.length; i++){
//         toUpperCase(keys[i]);
//     }

// };
// function deleting(){

// };
// function createSpace(){

// };