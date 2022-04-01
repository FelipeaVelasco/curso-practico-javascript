// Formula para calculo de perimetro y area para un Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Formula para calculo de perimetro y area para un Triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Formula para calculo de perimetro y area para un Circulo
// Se obtiene el valor de PI
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

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
  const value = input.value; // Lenguaje debiomente tipado. value es String -HTML-, pero la * por un numero da un numero 
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value; // La buena practica es convertir a nuemro los valores ingresados desde HTML

  const area = areaCuadrado(value);
  alert(area);
}

// Calculo de area y perimetro para el triangulo
function calcularPerimetroTriangulo() {

  const input1 = document.getElementById("InputLado1Triangulo");
  const value1 = parseFloat(input1.value); // Se convierte String a numero tipo float.
  const input2 = document.getElementById("InputLado2Triangulo");
  const value2 = parseFloat(input2.value); // Si no se hace el resultado es la concatenacion de Strings - dato erroneo
  const input3 = document.getElementById("InputBaseTriangulo");
  const value3 = parseFloat(input3.value);

  const perimetroTri = perimetroTriangulo(value1, value2, value3);
  alert(perimetroTri);
}

function calcularAreaTriangulo() {

  const input1 = document.getElementById("InputBase1Triangulo");
  const value1 = parseFloat(input1.value);
  const input2 = document.getElementById("InputAlturaTriangulo");
  const value2 = parseFloat(input2.value);

  const areaTri = areaTriangulo(value1, value2);
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