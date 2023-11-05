
const readline = require("readline")

const heroi = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

heroi.question("Digite o número de vitórias do seu Herói: ", victories => {

    heroi.question("Agora digite o número de derrotas sofridas:", defeats => {
        hankings(victories, defeats)

    })
})

function hankings(victories, defeats) {

    let hanking = victories - defeats

    if (hanking <= 10) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "Ferro" `)
        heroi.close()

    } else if (hanking > 10 && hanking <= 20) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "Bronze" `)
        heroi.close()

    } else if (hanking > 20 && hanking <= 50) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "Prata" `)
        heroi.close()

    } else if (hanking > 50 && hanking <= 80) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "Ouro" `)
        heroi.close()

    } else if (hanking > 80 && hanking <= 90) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "PLatina" `)
        heroi.close()

    } else if (hanking > 90 && hanking <= 100) {
        console.log(`O Herói tem de saldo de ${hanking} está no nível "Ascendente" `)
        heroi.close()

    } else {
        console.log(`O Herói tem de saldo de ${victories} está no nível "Radiante" `)
        heroi.close()
    }
}
