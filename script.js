const montoTope = 100000;
const min12Cuotas = 70000;
const min6Cuotas = 45000;
const min3Cuotas = 20000;
let monto;
let cuotaMax;

do {
  monto = parseInt(prompt("Ingrese el total de su compra"));
} while (monto > montoTope);

if (monto <= montoTope && monto > min12Cuotas) {
  cuotaMax = 12;
} else if (monto <= min12Cuotas && monto > min6Cuotas) {
  cuotaMax = 6;
} else if (monto <= min6Cuotas && monto > min3Cuotas) {
  cuotaMax = 3;
} else {
  cuotaMax = 1;
}

let cuotas = parseInt(
  prompt("Ingrese el numero de cuotas en que desea pagar maximo : " + cuotaMax)
);

cuotaMax = cuotas;

function calculador(monto, cuotas) {
  resultado = monto / cuotas;
  return resultado;
}

let resultadoCalculador = calculador(monto, cuotas);
alert("El valor de las cuotas es : " + resultadoCalculador);
