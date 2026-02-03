/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class carros {

    marca;
    cor;
    gastoMedioCombustivel;

    constructor(nome, idade){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }
}

function gastoMedioDeCombustivel(km,preco,gasto){

   return (km / gasto) * preco;
}

const fiate = new fiurino('fiate','preta',10);

gastoMedioDeCombustivel(fiate);