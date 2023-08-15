var bebida = ""

switch(bebida){
    case 1: 
    var bebida1 = "café"
    var valor1 = "R$2.50"
    console.log(`A sua escolha foi ${bebida1} e você deve pagar ${valor1}`)
    break;
    case 2: 
    var bebida2 = "leite"
    var valor2 = "R$3,00"
    console.log(`A sua escolha foi ${bebida2} e você deve pagar ${valor2}`)
    break;
    case 3: 
    var bebida3 = "chá"
    var valor3 = "R$2,00"
    console.log(`A sua escolha foi ${bebida3} e você deve pagar ${valor3}`)
    break;
    default:
    console.log(`Opção inválida, você deve escolher entre café, leite ou chá.`)
    break;
}