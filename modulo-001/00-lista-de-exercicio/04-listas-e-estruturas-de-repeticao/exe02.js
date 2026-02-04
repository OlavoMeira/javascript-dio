/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

function main(){

    let  listaNumero = [1,2,3,4,5,6,7,8,9,10];

    for (let i = 0; i <= listaNumero.length; i++)  

       
        if (listaNumero[i]% 2 === 0){
            console.log(`Esse numero é par ${listaNumero[i]}`);
        }
        
}

main();