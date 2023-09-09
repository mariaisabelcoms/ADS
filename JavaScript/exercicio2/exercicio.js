class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.funcao = true;
    }
    
    seApresentar(){
        let nome = document.getElementById("nome")
        let idade = document.getElementById("idade")
        let cargo = document.getElementById("cargo")
        if(nome == ""){
            throw new Error ("Por favor, insira seu nome antes de continuar.")
        } else if(idade == ""){
            throw new Error ("Por favor, insira a sua idade para continuar.")
        } else if(cargo == ""){
            throw new Error ("Por favor, insira seu cargo para continuar.")
        } return alert("Olá, meu nome é " + this.name + "tenho " + this.idade + " anos e sou " + this.cargo)
    }
    trabalhar(){
        if(this.funcao){
            console.log("Trabalhando");
            return;
        } this.funcao = false;
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento
    }
    gerenciar(){
        if(this.cargo == "Gerente"){
            console.log("Sou gerente do departamento de " + this.departamento);
            return;
        } this.cargo = false;
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        if(this.cargo == "Desenvolvedor"){
            console.log("Sou desenvolvedor na linguagem " + this.linguagem);
            return;
        } this.cargo = false;
    }
}

try {
    let submit = seApresentar()
    alert("Error")
} catch (error) {
    
}



