var nome = "Maria Isabel"
var x = nome.length
console.log(x)

var res = nome.toLocaleUpperCase();
console.log(res);

var grupo = "ATEEZ vs SVT";
var posicao = grupo.indexOf("SVT");
console.log(posicao);

var cortado = grupo.slice(0,5);
console.log(cortado);

var val = grupo.includes("SVT");
console.log(val);

var string1 = "Hello"
var string2 = " Turma"

var string3 = string1.concat(string2);
console.log(string3);

var s = "JavaScript e Python"
var posicao1 = s.indexOf("Python");
var novaString = s.substring(13,19);
console.log(posicao1);
console.log(novaString);

var frase = "Olá mundo!"

if(frase.startsWith('Olá')){
    var sub = frase.substring(4);
    var novaString = sub.replace("mundo","pessoal");
    var novaStringMax = novaString.toLocaleUpperCase();
}

console.log(novaStringMax);

var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")[1];

const valores = parametros.split("&")[1];

for(let i = 0; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = 'atores=' + valores[i].substring(7).toUpperCase();
    }
}

console.log(valores)
