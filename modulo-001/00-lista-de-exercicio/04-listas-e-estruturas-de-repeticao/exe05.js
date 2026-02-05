/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */

   function main(){

    const mediaAlunos = [2, 7, 3, 8, 10, 4];
    
    for (let i = 0; i < mediaAlunos.length; i++) {
        
        if(mediaAlunos[i] < 5){
            console.log(mediaAlunos[i]);
        }
        
    }


   }

   main();