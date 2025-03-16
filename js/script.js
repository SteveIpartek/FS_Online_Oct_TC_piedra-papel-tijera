//Elemntos a cathear y sumadores:

const h1 =document.createElement("h1");
const h3 = document.createElement("h3");
const botonJugada =document.querySelectorAll("button");
const elePiedra =botonJugada[0];
const elePapel =botonJugada[1];
const eleTijera =botonJugada[2];
const resultado = document.getElementById("resultados");
const marcaUser =document.getElementById("contador-usuario");
const marcaMachine =document.getElementById("contador-ordenador");
const main =document.querySelector(".main");
const reset = document.createElement("button");

h1.textContent = "★ PIEDRA , PAPEL O TIJERAS ★";
main.prepend(h1);
h3.textContent = "¡Que empieze el juego!";
resultado.appendChild(h3);
reset.textContent = "RESET GAME";
main.appendChild(reset);


let ContP = 0;
let ContM = 0;

reset.addEventListener("click" , function(){location.reload()});



 
// Función para aplicar la animación de aumentar tamaño al número
function animateNumber(element) {
  // Solo animar el número, no el texto completo
  const numberElement = element.querySelector("span"); // Asumiendo que el número está dentro de un <span>
  
  if (numberElement) {
    numberElement.classList.add("increase-size");
    setTimeout(function() {
      numberElement.classList.remove("increase-size");
    }, 500); // El tiempo debe coincidir con la duración de la animación (0.5s)
  }
}

// Modificar las secciones donde actualizas los puntos

elePiedra.addEventListener("click", function() {
  h3.textContent = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let jugadaMaquina = "";

  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      jugadaMaquina = "Piedra";
      break;
    case 2:
      jugadaMaquina = "Papel";
      break;
    case 3:
      jugadaMaquina = "Tijera";
      break;
  }

  switch (jugadaMaquina) {
    case "Piedra":
      console.log("Empate");
      h3.textContent = "Empate";
      resultado.appendChild(h3);
      break;
    case "Papel":
      console.log("Gana Maquina");
      ContM += 1;
      h3.textContent = "Gana Maquina";
      resultado.appendChild(h3);
      marcaMachine.textContent = `Puntos de la máquina: `;
      const newSpanMachine = document.createElement("span");
      newSpanMachine.textContent = ContM;
      marcaMachine.appendChild(newSpanMachine);
      animateNumber(marcaMachine); // Añadimos animación solo al número
      break;
    case "Tijera":
      console.log("Gana Usuario");
      ContP += 1;
      h3.textContent = "Gana Usuario";
      resultado.appendChild(h3);
      marcaUser.textContent = `Tus puntos: `;
      const newSpanUser = document.createElement("span");
      newSpanUser.textContent = ContP;
      marcaUser.appendChild(newSpanUser);
      animateNumber(marcaUser); // Añadimos animación solo al número
      break;
  }
});

elePapel.addEventListener("click", function() {
  h3.textContent = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let jugadaMaquina = "";

  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      jugadaMaquina = "Piedra";
      break;
    case 2:
      jugadaMaquina = "Papel";
      break;
    case 3:
      jugadaMaquina = "Tijera";
      break;
  }

  switch (jugadaMaquina) {
    case "Piedra":
      console.log("Gana Usuario");
      ContP += 1;
      h3.textContent = "Gana Usuario";
      resultado.appendChild(h3);
      marcaUser.textContent = `Tus puntos: `;
      const newSpanUser = document.createElement("span");
      newSpanUser.textContent = ContP;
      marcaUser.appendChild(newSpanUser);
      animateNumber(marcaUser); // Añadimos animación solo al número
      break;
    case "Papel":
      console.log("Empate");
      h3.textContent = "Empate";
      resultado.appendChild(h3);
      break;
    case "Tijera":
      console.log("Gana Maquina");
      ContM += 1;
      h3.textContent = "Gana Maquina";
      resultado.appendChild(h3);
      marcaMachine.textContent = `Puntos de la máquina: `;
      const newSpanMachine = document.createElement("span");
      newSpanMachine.textContent = ContM;
      marcaMachine.appendChild(newSpanMachine);
      animateNumber(marcaMachine); // Añadimos animación solo al número
      break;
  }
});

eleTijera.addEventListener("click", function() {
  h3.textContent = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let jugadaMaquina = "";

  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      jugadaMaquina = "Piedra";
      break;
    case 2:
      jugadaMaquina = "Papel";
      break;
    case 3:
      jugadaMaquina = "Tijera";
      break;
  }

  switch (jugadaMaquina) {
    case "Piedra":
      console.log("Gana Maquina");
      ContM += 1;
      h3.textContent = "Gana Maquina";
      resultado.appendChild(h3);

      marcaMachine.textContent = `Puntos de la máquina: `;
      const newSpanMachine = document.createElement("span");
      newSpanMachine.textContent = ContM;
      marcaMachine.appendChild(newSpanMachine);
      animateNumber(marcaMachine); // Añadimos animación solo al número
      break;
    case "Papel":
      console.log("Gana Usuario");
      ContP += 1;
      h3.textContent = "Gana Usuario";
      resultado.appendChild(h3);
      marcaUser.textContent = `Tus puntos: `;
      const newSpanUser = document.createElement("span");
      newSpanUser.textContent = ContP;
      marcaUser.appendChild(newSpanUser);
      animateNumber(marcaUser); // Añadimos animación solo al número
      break;
    case "Tijera":
      console.log("Empate");
      h3.textContent = "Empate";
      resultado.appendChild(h3);
      break;
  }
});

