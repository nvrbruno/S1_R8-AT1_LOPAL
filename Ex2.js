let numeros = []; // cria o vetor numeros para armazenar os numeros


for (let i = 0; i < 8; i++) { // loop de repetição que pede 8 números reais
    let num = parseFloat(prompt(`Digite o ${i + 1}º número real:`));
    numeros[i] = num; //iguala os numeros [i] a num
}

let soma = 0; //cria a variavel soma e inicializa ela com 0

for (let i = 0; i < 8; i++) { //loop de repetição que faz a soma de todos os números
    soma += numeros[i];
}

let media = soma / 8; // variavel da média

for (let i = 0; i < 8; i++) { //loop de repetição que pega os valores acima da média
    if (numeros[i] > media) { // condição para encontrar os valores acima da media pega os numeros e vê qual é o valor acima da média
        alert(`A média é: ${media.toFixed(2)} Valor acima da média: ${numeros[i]}`);//imprime o valor da média e REPETE os números acima da média
    }
}