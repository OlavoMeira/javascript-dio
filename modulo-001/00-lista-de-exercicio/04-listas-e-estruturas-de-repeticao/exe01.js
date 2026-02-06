/* 1) Crie um programa que dado um número imprima a tabuada*/


function tabuada (index){

for (let i = 1; i <= 10; i++) {
    let mutiplica = index * i;
    console.log(`${index} x ${i} = ${mutiplica}`);
    
}
}

tabuada(7);