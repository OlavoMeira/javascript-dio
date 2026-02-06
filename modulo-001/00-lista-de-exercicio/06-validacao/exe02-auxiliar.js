/*2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1 */
        


function gets(numero){

    let par = [];
    let impar = [];

    for (let i = 0; i < numero.length; i++) {
        
        if(numero[i] % 2 === 0){
            par.push(numero[i]);
        }else{
             impar.push(numero[i]);
        }
        
    }

    let maiorPar = 0;
    let menorImpar = 10;

    for (let i = 0; i < par.length && impar.length; i++) {
        if(par[i] > maiorPar){

            maiorPar = par[i];

        }else if(impar[i] < menorImpar){

            menorImpar = impar[i];
        }
        
    }

    return {maiorPar, menorImpar}

}

function print(entrada){

    const resultado = gets(entrada);

    console.log('Maior número par: ' + resultado.maiorPar);
    console.log('Menor número impar: ' + resultado.menorImpar);
}

module.exports = {print}; 