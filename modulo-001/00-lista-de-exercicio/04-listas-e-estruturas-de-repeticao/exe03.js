/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

function main(){

    const listaNomes = ['Olavo', 'Vitor', 'Renan', 'Vitoria', 'Marcelo', 'Val'];

    for (let i = 0; i < listaNomes.length; i++){

        if (listaNomes[i][0].toUpperCase() === 'V' ){
            console.log(listaNomes[i]);
        }

    }
        
        
}

main();