
const readline = require("readline")

const heroi = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


heroi.question("Qual o nome do seu Herói ?", resposta1 => {

    console.log(`O nome do seu Herói é ${resposta1},   `)
    heroi.question("Agora me diga, qual é o nível de experiência do seu Herói:", resposta2 => {

        if (resposta2 <= 1000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Ferro" `)
            heroi.close()
        } else if (resposta2 > 1000 && resposta2 <= 2000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Bronze" `)
            heroi.close()
        } else if (resposta2 > 2000 && resposta2 <= 5000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Prata" `)
            heroi.close()
        } else if (resposta2 > 6000 && resposta2 <= 7000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Ouro" `)
            heroi.close()
        } else if (resposta2 > 7000 && resposta2 <= 8000) {
            console.log(`O Herói de nome ${resposta1} está no nível "PLatina" `)
            heroi.close()
        } else if (resposta2 > 8000 && resposta2 <= 9000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Ascendente" `)
            heroi.close()
        } else if (resposta2 > 9000 && resposta2 <= 10000) {
            console.log(`O Herói de nome ${resposta1} está no nível "Imortal"`)
            heroi.close()
        } else {
            console.log(`O Herói de nome ${resposta1} está no nível "Radiante" `)
            heroi.close()
        }


    })



})






