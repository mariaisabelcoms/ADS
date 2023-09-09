//1- forma de criar objetos

const pessoa = {
    nome: "Maria Isabel",
    sobrenome: "Melo Batista"
}

console.log(pessoa["nome"])

//2- forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Maria"

console.log(funcionario.nome)

//3 - forma de criar objetos
function criarPessoa(nome,sobrenome){
    return{nome, sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Maria Isabel", "Melo Batista")
const p2 = criarPessoa("Gabriel","Melo Batista")

console.log(p1.nomeCompleto,p2.nomeCompleto)



