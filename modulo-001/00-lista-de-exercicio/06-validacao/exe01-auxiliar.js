/*1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação */

 function gets(index){

    if(index < 5){

        return 'Reprovado';

    }else if(index >= 5 && index < 7){

        return 'Recuperação';

    }else{

        return 'Aprovado';
    }
 }

 function print(media){

    console.log(`você esta no estado de: ${gets(media)}`)

 }


 module.exports = {print, gets};