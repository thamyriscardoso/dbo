let palavra= document.querySelectorAll('input')[0].value;
let retirar= document.querySelectorAll('input')[1].value;
function split(palavra,retirar){
    let palavra2= "";
    let c=0;
    let i=0;
    let c2=0;
    let vetor=[];
    let tamanho=palavra.length-1;
    for(let i=0; i < palavra.length;){
        if(palavra[i] !== retirar){
            palavra2+=palavra[i];
            i++;
        }
        if((palavra[i] === retirar) ||(i === palavra.length)){
            vetor[c]=palavra2;
            palavra2="";
            i++;
            c++;
        }
        if(palavra[tamanho] === retirar){
            vetor[c]= "";  
        }
    }
    return vetor;
}
let button= document.querySelector('button');
let input=document.querySelectorAll('input')[0];
let input2= document.querySelectorAll('input')[1];
let ul= document.querySelector('ul');
button.addEventListener('click', function (evento) {
    evento.preventDefault();
    let certo = input.value;
    let certo2 = input2.value;
    let certo3 = split(certo, certo2);
    let contagem = 1;
    console.log(certo3)
    for (let a=0; a <certo3.length; a++) {
        ul.innerHTML+= '<li>' + contagem + ' parte ' + certo3[a] + '</li>';
        contagem++;
    }
});
const parts = split('the:matrix:revisited', ':');
console.log(parts.length === 3);
console.log(parts[0] === 'the');
console.log(parts[1] === 'matrix');
console.log(parts[2] === 'revisited');
console.log(parts[3] === undefined);
 
console.log(split('banana', 'a')[0] === 'b');
console.log(split('banana', 'a')[1] === 'n');
console.log(split('banana', 'a')[2] === 'n');
console.log(split('banana', 'a')[3] === '');
 
const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === 4);
console.log(dbo[0] === 'desenvolvimento');
console.log(dbo[1] === 'baseado');
console.log(dbo[2] === 'em');
console.log(dbo[3] === 'objetos');