/*3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00 */



class funcionario {

    nome;
    empresa;
    cargo;
    


    constructor (nome,empresa,cargo){

        this.nome = nome;
        this.empresa = empresa;
        this.cargo = cargo;
        
    }

    calcularSalario(salario,bonus){

        if(salario > 0 && salario  <= 1100){

            return (salario - (salario * 0.05)) + bonus

        }else if(salario > 1100 && salario <= 2500){

            return (salario - (salario * 0.1)) + bonus

        }else{

            return (salario - (salario * 0.15)) + bonus
        }
    }
}


function print(salario,bonus){

    const valor  = dev02.calcularSalario(salario, bonus);

    console.log(`Funcionário: ${dev02.nome}`);
    console.log(`Cargo: ${dev02.cargo}`);
    console.log(`Empresa: ${dev02.empresa}`);
    console.log(`Salário a transferir: R$ ${valor}`);



}
const dev = new funcionario('Olavo','prefeitura Vitoria da Conquista', 'Estagiário');
const dev02 = new funcionario('Gutierre','prefeitura Vitoria da Conquista', 'tecnico de nivel superior em imformatica');



module.exports = {print};