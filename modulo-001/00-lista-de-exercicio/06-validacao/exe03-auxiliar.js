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



class Funcionario { 
    nome;
    empresa;
    cargo;

    constructor(nome, empresa, cargo) {
        this.nome = nome;
        this.empresa = empresa;
        this.cargo = cargo;
    }

    calcularSalario(salario, bonus) {

        let percentualImposto = 0;

        if (salario >= 0 && salario <= 1100) {

            percentualImposto = 0.05;

        } else if (salario > 1100 && salario <= 2500) {

            percentualImposto = 0.10;

        } else {

            percentualImposto = 0.15;
        }

        const valorImposto = salario * percentualImposto;
        return (salario - valorImposto) + bonus;
    }
}


const dev = new Funcionario('Olavo', 'Prefeitura Vitória da Conquista', 'Estagiário');
const dev02 = new Funcionario('Gutierre', 'Prefeitura Vitória da Conquista', 'Técnico de Nível Superior');


function imprimirDados(func, salario, bonus) {
    const valorFinal = func.calcularSalario(salario, bonus);

    console.log(`------------------------------`);
    console.log(`Funcionário: ${func.nome}`);
    console.log(`Cargo: ${func.cargo}`);
    console.log(`Empresa: ${func.empresa}`);
    console.log(`Salário a transferir: R$ ${valorFinal.toFixed(2)}`);
}


imprimirDados(dev, 900, 100); 
imprimirDados(dev02,3600, 533); 

module.exports = { imprimirDados };