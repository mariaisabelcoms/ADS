class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.funcao = true;
    }
    seApresentar(){
        console.log("Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e sou", this.cargo);
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

p1 = new Gerente('Mabel', 24, "Gerente", "Desenvolvimento");
p1.seApresentar();
p1.trabalhar();
p1.gerenciar();

p2 = new Desenvolvedor('Gabriel', 22, "Desenvolvedor", "CSharp")
p2.seApresentar();
p2.trabalhar();
p2.programar();



