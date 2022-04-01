function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML
// Calculo de area y perimetro para el cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//


// Calculo de area y perimetro para el triangulo
function calcularPerimetroTriangulo() {

  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const valueLado1 = inputLado1.value;
  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const valueLado2 = inputLado2.value;
  const inputBase = document.getElementById("InputBaseTriangulo");
  const valueBase = inputBase.value;

  const perimetroTri = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetroTri);
}

function calcularAreaTriangulo() {

  const inputBase1 = document.getElementById("InputBase1Triangulo");
  const valueBase1 = inputBase1.value;
  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const valueAltura = inputAltura.value;

  const areaTri = areaTriangulo(valueBase1, valueAltura);
  alert(areaTri);
}

// Calculo de area y perimetro para un circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetroCir = perimetroCirculo(value);
  alert(perimetroCir);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const areaCir = areaCirculo(value);
  alert(areaCir);
}