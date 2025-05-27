let numeros = []; // cria o vetor numeros 

for (let i = 0; i < 10; i++) { // loop de repetiçao que pede os 10 numeros ao usuario
    let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros[i] = num; // iguala[i] números a num
}

let somaDosPares = 0; // cria variavel da soma e inicializa ela com zero

for (let i = 0; i < 10; i++) { // loop de repetição que verifica os numeros pares e faz soma
    if (numeros[i] % 2 === 0) { // condição de verificação que pega o resto de divisão se for real ele soma os numeros pares
        somaDosPares += numeros[i]; // soma dos numeros pares que veem do numeros
    }
}

alert(`A soma dos números pares é: ${somaDosPares}`);