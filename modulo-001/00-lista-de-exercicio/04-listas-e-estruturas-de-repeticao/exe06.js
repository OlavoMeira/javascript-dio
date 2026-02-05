/* 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4] */ 

    function main(){

        const listaNotas = [2, 7, 3, 8, 10, 4];
         let maiorNota = 0;

        for (let i = 0; i < listaNotas.length; i++) {
            
            if(listaNotas[i] > maiorNota){

                maiorNota = listaNotas[i];
            }
            
        }

        console.log(maiorNota);

    }

main();
    