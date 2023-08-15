var valores = [8,1,7,2,9];

console.log(valores[0])

 // criar array com cinco nomes

var array1 = ["Guilherme", "Manuel", "Samuel", "Davi", "João"]

// acrescentar o nome Mônica

array1.push("Mônica")

console.log(array1)

// retirar o último elemento

array1.splice(5,1)

console.log(array1)

// encontrar a posição do Samuel 

console.log(array1.indexOf("Samuel"))

// trocar o nome Manuel por Emanuel

array1.splice(1,1, "Emanuel");

console.log(array1)

// criar array com todos os meses do ano

var array2 = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
console.log(array2)

// dividir o array em trimestres

var tri1 = array2.slice(0,3)
var tri2 = array2.slice(3,6)
var tri3 = array2.slice(6,9)
var tri4 = array2.slice(9,12)

console.log(tri1, tri2, tri3, tri4)

// criar uma array de eletrodomesticos 

var produtos = [
    {id: 1, descricao: "smartphone", categoria: "eletronico"},
    {id: 2, descricao: "geladeira", categoria: "eletrodomestico"},
    {id: 3, descricao: "ventilador", categoria: "eletrodomestico"},
    {id: 4, descricao: "computador", categoria: "eletronico"}
]

console.log(produtos)

// filtrar a categoria eletronico

var eletronico = produtos.filter(
    (produtos) => {
        return produtos.categoria == "eletronico"
    }
)

console.log(eletronico)

var number = [1,2,3,4,5,6,7,8,9,10]

var num = number.map(function(valor){
    return valor * 2
})

console.log(num)

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40}
]

nomes = funcionarios.map(pessoa => pessoa.nome)
console.log(nomes)

var total1 = number.reduce(function(total, number){
    return total1 + number
})

var a = [10,20,30,40,50,60];

for (let valor of a){
    console.log(valor);
}

a.forEach(valor => console.log(valor))

var total = 0;
a.forEach(valor => {
    total += valor;
})

console.log(total);

var pais = "Brasil"

if (pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

var idades = 22;

if(idades <16){
    console.log("Não vota")
}else if (idades <18){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}

var diaSem = 5
switch(diaSem){
    case 1:
        console.log("Domingo");
        break
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Esse dia da semana não existe")
}