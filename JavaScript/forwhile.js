var carro = [{modelo: "Audi A3", marca: "Audi", ano: "2020"},
            {modelo: "Compass", marca: "Jeep", ano: "2021"}];

for (let carac in carro){
    console.log(carro[carac])
}

for (let c of carro){
    console.log(c.ano)
}

var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}

var t = 1;

do{
    console.log(t)
    t++
} while(t<6)