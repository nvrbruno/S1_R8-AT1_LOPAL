let numeros = []; // cria o vetor numeros para armazenar os números

for (let i = 0; i < 10; i++) {// loop de repetição que pede 10 números inteiros
    let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    numeros[i] = num;//iguala os numeros [i] a num
}

let numeroParaBuscar = parseInt(prompt("Digite um número para verificar quantas vezes ele aparece:")); //cria a variavel de busca e ja pede para o usuario informar o valor que ele quer procurar

let contadorU = 0; //cria a variavel contadora (e nao é o i) e inicializa ela com 0

for (let i = 0; i < 10; i++) { //loop de repeticão que verifica numero por numero e armazena a quantidade de vezes que ele apareceu e armazena na variavel (contadorU)
    if (numeros[i] === numeroParaBuscar) {
        contadorU++;
    }
}

alert(`O número ${numeroParaBuscar} aparece ${contadorU} vezes no vetor.`);
