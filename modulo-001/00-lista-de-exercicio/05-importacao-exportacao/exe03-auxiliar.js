/*  3) Faça um programa que receba a quantidade de números e seus respectivos valores.
    Imprima todos os números pares.
    Exemplo:
        Entrada:
            5
            1
            3
            9
            10
            12

        Saída:
            Números Pares: 10, 12 

*/

const listaNumeros = [5,1,3,9,10,12];


function print(){

    for (let i = 0; i < listaNumeros.length; i++) {

        if(listaNumeros[i] % 2 === 0){

        console.log(listaNumeros[i]);
    }
        
        
    }

}

module.exports = {print};