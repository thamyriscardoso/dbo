let palavra = document.getElementById('campo').value;
function downcase(palavra){
    let palavra2='';
    for(let i=0;i < palavra.length; i++){
        c=0;
        if((palavra.charCodeAt(i) >=65) && (palavra.charCodeAt(i) <= 90)){
            let c = palavra.charCodeAt(i)+32;
            palavra2+= String.fromCharCode(c);
        }
        if((palavra.charCodeAt(i) >= 0) && (palavra.charCodeAt(i) <=64) || (palavra.charCodeAt(i) >= 97) && (palavra.charCodeAt(i) <=122)){
            c=palavra.charCodeAt(i);
            palavra2+= String.fromCharCode(c)
        }
        if((palavra.charCodeAt(i) >= 192) && (palavra.charCodeAt(i) <= 221)){
            c=palavra.charCodeAt(i)+32;
            palavra2+= String.fromCharCode(c)
        }
        if((palavra.charCodeAt(i) >= 224) && (palavra.charCodeAt(i) <= 253)){
            c=palavra.charCodeAt(i);
            palavra2+= String.fromCharCode(c)
        }
    }
    return palavra2;
}
let output= document.querySelector('output');
let button= document.getElementById('bt_adicionar');
let input = document.querySelector('input');
button.addEventListener('click', function() {
    output.innerText = downcase(input.value);
});
console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');