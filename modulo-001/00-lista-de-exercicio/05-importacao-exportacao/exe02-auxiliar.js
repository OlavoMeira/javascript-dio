/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90 */

const listaNumeros = [4,100,150,90,200];
let valor = 0;

function print(){
     

    for (let i = 0; i < listaNumeros.length; i++) {
        
        if(listaNumeros[i] > valor){
            valor = listaNumeros[i];
        }
        
    }
    
    console.log(valor);
}

module.exports =  {print};