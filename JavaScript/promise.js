const minhaPromise = new Promise((resolve,reject) => 
    {
    const sucesso = true
    if(sucesso){
        resolve("Deu bom")
    }else{
        reject("Deu ruim")
    }
})

minhaPromise
.then((resultado) =>{
    console.log("Foi sucesso: " + resultado)
})
.catch((erro) =>{
    console.log("Deu ruim " + erro)
})

function somarArray(array){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(array)){
            reject("O argumento não é uma array")
        }
        const soma = array.reduce((total,num) => total + num,0);

        resolve(soma)
    })
}

let myArray = [1,2,3,4,5]
somarArray(myArray)
.then((resultado)=>{
    console.log("A soma dos elementos é " + resultado)
})
.catch((erro)=> {
    console.log("Ocorreu um erro: ", erro)
})

class minhaClasse {
    constructor(valor){
        this.valor = valor
    }
    operacaoAssincrona(){
        return new Promise((resolve,reject)=>{
            const resultado = this.valor *2;

            if(resultado>=0){
                resolve(resultado)
            }else{
                reject("O resultado é negativo")
            }
        }
        )
    }
}

const minhaclasse = new minhaClasse(5);
minhaclasse.operacaoAssincrona()
.then((resultado)=>{
    console.log("O resultado da operação é: " + resultado)
})
.catch((erro)=> {
    console.log("Ocorreu um problema " + erro)
})

function obterValor(valor){
    return new Promise((resolve,reject)=>{
        if(valor > 10){
            valor += 1;
            resolve(valor)
        }else{
            reject("Não foi possível obter o valor")
        }
    })
}

function dobrarValor(valor){
    return valor * 2
}

function adicionar10(valor){
    return valor + 10
}

obterValor(28)
.then((valor) => {
    console.log("Valor obtido")
    return dobrarValor(valor);
})
.then((novoValor)=>{
    console.log("Fazendo o segundo tratamento");
    return adicionar10(novoValor)
})
.then((resultado) => {
    total = resultado + 5
    console.log("O resultado final é", total)
}
)
.catch((erro) => {
    console.log("Ocorreu um erro: " + erro)
}
)
