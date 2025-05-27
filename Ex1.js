let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros[i] = numero;
}

let somaPares = 0;

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

alert(`A soma dos números pares é: ${somaPares}`);