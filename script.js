const montoTope = 100000;
const min12Cuotas = 70000;
const min6Cuotas = 45000;
const min3Cuotas = 20000;
let cuotaMax = 0;

do {
  let monto = parseInt(prompt("Ingrese el total de su compra"));
} while (monto > montoTope);

switch (calculador) {
  case 1:
    monto <= montoTope && monto > min12Cuotas;
    cuotaMax = 12;
    break;
  case 2:
    monto <= min12Cuotas && monto > min6Cuotas;
    cuotaMax = 6;
    break;
  case 1:
    monto <= min6Cuotas && monto > min3Cuotas;
    cuotaMax = 3;
    break;
  default:
    cuotaMax = 1;
    break;
}
let cuotas = parseInt(
  prompt("Ingrese el numero de cuotas en que desea pagar maximo : " + cuotaMax)
);
function calculador(monto, cuotas) {
  resultado = monto / cuotas;
  return resultado;
}

let resultadoCalculador = calculador(monto, cuotas);
alert("El valor de las cuotas es : " + resultadoCalculador);
