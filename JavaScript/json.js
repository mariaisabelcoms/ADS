const pessoa = {
    nome: 'Maria',
    idade: 24,
    profissao: 'designer'

}

const pessoajson = JSON.stringify(pessoa)
console.log(pessoajson)

const pessoaObj = JSON.parse(pessoajson)
console.log(pessoaObj)

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    preencherLista(data)
})

function preencherLista(data){
    const listaContainer = document.getElementById("lista-container")
    const ul = document.createElement('ul');
    data.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = item.name
        ul.appendChild(li)
    })

    listaContainer.appendChild(ul)
}