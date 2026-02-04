/*
Faça uma função que imprima o seu nome.
Faça uma função que verifica a sua maior idade.
*/


function imprimeNome(nome){

    if (typeof nome === 'string'){
        return (nome.toUpperCase());
    }
}

function verificaIdade(idade,nome){

    if (idade >= 18 ){
        console.log('Você é de maior: ' + imprimeNome(nome));
    }else{
        console.log('Você é de menor: ' + imprimeNome(nome));
    }
}

verificaIdade(18,'Olavo Barros Meira Filho')