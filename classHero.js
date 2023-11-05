const { table } = require("console");

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        const readline = require("readline")

        let hero = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        hero.question('Como devo te chamar?', nome => {
            if (!nome) {
                console.warm("Desculpe, você digitou o seu nome? Tente novamente")
                return
            }
            console.log(`Bem vindo a sua classe de heroi ${nome}`)

            hero.question("Qual é a sua idade? ", idade => {
                console.log(`Belezinha 😉... agora que sei qeu você se chama ${nome} e sua idade é ${idade}`)

                hero.question(`Escolha qual é o seu heroi:\n1 - Mago\n2 - Guerreiro\n3 - Ninja\n4 - Monge\n`, tipos => {

                    if (tipos == 1) {
                        this.tipo = "Mago"
                        this.ataque = "Magia"
                    } else if (tipos == 2) {
                        this.tipo = "Guerreiro"
                        this.ataque = "Espada"
                    } else if (tipos == 3) {
                        this.tipo = "Ninja"
                        this.ataque = "Shuriken"
                    } else if (tipos == 4) {
                        this.tipo = "Monge"
                        this.ataque = "Artes Marciais"
                    }

                    console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
                    hero.close()
                })
            })

        })
    }

}

const heroi = new Hero();

