//1.Crie uma função que valide se um número é positivo, negativo ou zero.
function pos_neg(num){
    if(num < 0){
        console.log('negativo');
    }else if(num > 0){
        console.log('positivo');
    }else{
        console.log('zero');
    }
}
let num = 0;
pos_neg(num);

//2.Implemente uma função que verifique se uma pessoa é maior de idade.
function verificar_idade(idade){
    if(idade < 18){
        console.log('menor de idade');
    }else{
        console.log('maior de idade');
    }
}
let idade = 18;
verificar_idade(idade);
//3.Desenvolva uma função que valide se uma string é vazia ou não.
function vazio(string){
    if (string == ''){
        console.log('essa var esta vazia');
    }else{
        console.log('essa var nao esta vazia');
    }
}
let string = '';
vazio(string);
//4.Crie uma função que determine se um ano é bissexto
function bissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        console.log('esse ano e bissexto');
    }else{
        console.log('esse ano nao e bissexto');
    }
}
let ano = 2034;
bissexto(ano);
//5.Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function calcular_media(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        console.log('um dos numeros nao e valido');   
    }else{
        let media = (num1 + num2) / 2;
        console.log(`media e ${media}`)
    }
}
let num1 = 324;
let num2 = 34;
calcular_media(num1,num2);
//6.Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function tamanho_array(array){
    console.log(array.length);
}
let array = [1,2,3,4,5,6,7,8,9,'3'];
tamanho_array(array);
//7.Crie um array e utilize a função includes para verificar se um elemento específico está presente
function includes_array(array2){
    if(array2.includes('baba')){
        console.log('array inclui');
    }else{
        console.log('array nao inclui');
    }
}
let array2 = [1,2,34,5,37677,6,'baba',3];
includes_array(array2);
//8.implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
function includes_elemento(array3,elemento){
    return array3.includes(elemento);
}    
let array3 = [1,2,3,4,5,6];
let elemento = 1;
let elemento_incluso = includes_elemento(array3,elemento);
if(elemento_incluso){
    console.log('esta incluso');

}else{
    console.log('nao esta incluso');

}
//9.Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
function includes_string(array4){
    if(array4.includes('torgue')){
        console.log('array inclui string');
    }else{
        console.log('array nao inclui string');
    }
}
let array4 = ['torgue','jakobs','maliwan'];
includes_string(array4);
//10.Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

function cursos_estudantes(array_estudantes,array_procurado){
    return array_estudantes.some(item => JSON.stringify(item) === JSON.stringify(array_procurado));
}
let alunos = [
    {id: 1, nome: 'Cesar', idade: 17},
    {id: 55, nome: 'Carla', idade: 45},
    {id: 34, nome: 'Darius', idade: 65},
    {id: 65, nome: 'Gael', idade: 24}
]
let procurado =  {id: 1, nome: 'Cesar', idade: 17};
let procurado_presente = cursos_estudantes(alunos,procurado);
if(procurado_presente){
    console.log('O aluno está presente no array.');
}else {
    console.log('O aluno não está presente no array.');
}
//11.Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
function soma_produto(array5) {
    let soma_pares = 0;
    let produto_impares = 1;

    for (let numero of array5) {
        if (numero % 2 === 0) {
            soma_pares += numero;
        } else {
            produto_impares *= numero;
        }
    }

    return {
        soma_pares,
        produto_impares
    };
}

const numeros = [1, 2, 3, 4, 5,6,7];
const resultado = soma_produto(numeros);
console.log("Soma dos pares:", resultado.soma_pares);
console.log("Produto dos ímpares:", resultado.produto_impares);