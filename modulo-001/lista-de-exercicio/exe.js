/* 
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela a abaixo.

Media  == (nota 1 + nota 2 + nota 3) / 3;

Classificaão:
 - Média menor que 5, reprovação;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 7;
const nota3 = 7;
const mediaNotas = (nota1 + nota2 + nota3) / 3 

if (mediaNotas < 5){
    console.log(`Voçê foi reprovado sua Média foi:`);
    console.log(mediaNotas.toFixed(2));
}else if (mediaNotas >= 5 && mediaNotas <= 7) {
    console.log(`Voçê esta de recuperação sua nota foi:`);
    console.log(mediaNotas.toFixed(2));
}else{
    console.log(`Voçê foi aprovado com sucesso sua nota foi:`);
    console.log(mediaNotas.toFixed(2));
}