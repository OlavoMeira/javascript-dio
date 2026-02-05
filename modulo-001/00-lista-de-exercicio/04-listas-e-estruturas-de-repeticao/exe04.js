/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/

function main(){

    let listaNumeros = [];

    for (let i = 10; i <= 50; i++) {
        
        if (i % 2 === 0){

           listaNumeros.push(i);
           
        }
        
    }
    
    console.log(listaNumeros); 
}

main();