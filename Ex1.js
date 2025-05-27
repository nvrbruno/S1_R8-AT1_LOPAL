let numeros = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros[i] = num;
}

let somaDosPares = 0;

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaDosPares += numeros[i];
    }
}

alert(`A soma dos números pares é: ${somaDosPares}`);