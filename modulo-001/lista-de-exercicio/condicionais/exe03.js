/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProduto = 40;
const formaPagamento = 'maisdeduas';
const debito = valorProduto - (valorProduto * 0.10);
const dinheroPix = valorProduto - (valorProduto * 0.15);
const parceladoEmDuas = valorProduto;
const maisDeDuas = (valorProduto * 0.10) + valorProduto;

if (formaPagamento === 'debito'){
    console.log(debito);
}else if (formaPagamento === 'pix' || formaPagamento === 'dinheiro'){
    console.log(dinheroPix);
}else if (formaPagamento === 'duasvezes'){
    console.log(parceladoEmDuas);
}else{
    console.log(maisDeDuas);
}