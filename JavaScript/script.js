let nome = 'Maria Isabel'
let idade = "24"

console.log("Seu nome é " + nome + " e você tem " + idade + " anos. ")

let ex = require('readline-sync');
let nomes = ex.question("Qual o seu nome?\n")
console.log(`Olá ${nomes}`)