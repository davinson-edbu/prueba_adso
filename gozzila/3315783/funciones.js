function esPrimo(num) {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
    // Verificar si num es divisible por algún número entre 2 y su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si es divisible, no es primo
    }
    return true; // Si no es divisible por ningún número, es primo
}
// Solicitar al usuario los números límites
let inicio = parseInt(prompt("Introduce el número inicial del rango:"));
let fin = parseInt(prompt("Introduce el número final del rango:"));
// Mostrar los números primos dentro del rango
console.log("Números primos entre", inicio, "y", fin, ":");
for (let i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}


