const form = document.querySelector("#form");

const getPeso = document.querySelector("#peso");
const getAltura = document.querySelector("#altura");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = Number(getPeso.value);
  const altura = Number(getAltura.value);

  console.log(peso, altura);
});
