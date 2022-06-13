const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const getPeso = e.target.querySelector("#peso");
  const getAltura = e.target.querySelector("#altura");

  const peso = Number(getPeso.value);
  const altura = Number(getAltura.value);

  const imcResult = calculateIMC(peso, altura);
  const imcClassification = levelImc(imcResult);
  console.log(peso, altura);

  resultContainer(`O seu imc é de ${imcResult} (${imcClassification})`);
});

function levelImc(imc) {
  const imcValues = [
    "Abaixo do Peso",
    "Normal",
    "Sobrepeso",
    "Obesidade Grave",
  ];

  if (imc >= 18.5 && imc <= 24.9) return imcValues[0];
  if ((imc >= 25 && imc <= 29, 9)) return imcValues[1];
  if (imc >= 30) return imcValues[2];
  if (imc >= 40) return imcValues[3];
}
function calculateIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function createP(msg) {
  const p = document.createElement("p");
  p.innerHTML = msg;
  return p;
}

function resultContainer(msg) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = createP(msg);
  p.classList.add("result-content");
  result.appendChild(p);
}
