const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const getPeso = e.target.querySelector("#peso");
  const getAltura = e.target.querySelector("#altura");

  const peso = Number(getPeso.value);
  const altura = Number(getAltura.value);

  const imcResult = calculateIMC(peso, altura);
  const imcLevel = levelImc(imcResult);
  const colorImc = color(imcResult);
  if (!peso && !altura) {
    resultContainer("Ambos Inválidos", false);
    return;
  }
  if (!peso) {
    resultContainer("Peso Inválido", false);
    return;
  }
  if (!altura) {
    resultContainer("Altura Inválida", false);
    return;
  }

  resultContainer(`Seu imc é de ${imcResult}, ${imcLevel}`, colorImc);
});

function color(imc) {
  const values = [
    "result-contentYellow",
    "result-content",
    "result-contentRed",
    "result-contentStrongerRed",
  ];

  if (imc >= 18.5 && imc <= 25) return values[0];
  if (imc >= 25 && imc < 30) return values[1];
  if (imc >= 30) return values[2];
  if (imc >= 40) return values[3];
}

function levelImc(imc) {
  const values = ["Abaixo do Peso", "Normal", "Sobrepeso", "Obesidade Grave"];

  if (imc >= 18.5 && imc <= 25) return values[0];
  if (imc >= 25 && imc < 30) return values[1];
  if (imc >= 30) return values[2];
  if (imc >= 40) return values[3];
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

function resultContainer(msg, color) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = createP(msg);
  p.classList.add(color);
  result.appendChild(p);
}
