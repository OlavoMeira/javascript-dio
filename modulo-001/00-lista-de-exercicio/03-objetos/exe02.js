/* 
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; 

Faça um metodo para descobrir em que grau  esta o imc da pessoa;
*/

class Pessoas {

    nome;
    peso;
    altura;

    constructor(nome,peso,altura){

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc(){

        return this.peso / Math.pow(this.altura,2) ;
    } 

    grauImc(){

        const  imc = this.calculaImc();

        if (imc < 18.5){

            return (`Abaixo do peso, o seu imc foi: ${imc.toFixed(2)}`);
            
        }else if (imc >= 18.5 && imc <= 25){

            return (`Peso normal, seu imc  foi: ${imc.toFixed(2)}`);
            
        }else if (imc > 25 && imc <= 30){

            return (`Acima do peso, seu imc foi: ${imc.toFixed(2)}`);

        }else if (imc > 30 && imc <= 40){

            return (`Você esta obeso, seu imc foi: ${imc.toFixed(2)}`);

        }else{

            return (`Você esta em estado de obesidade grave, seu imc foi: ${imc.toFixed(2)}` );
            
        } 
    }
}

const jose = new Pessoas('jose', 80, 1.75);

console.log(jose.grauImc());