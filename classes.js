// 🦸 Definindo a Classe Heroi em JavaScript

class Heroi {
    /**
     * Construtor da classe, define as propriedades do herói.
     * @param {string} nome O nome do herói.
     * @param {number} idade A idade do herói.
     * @param {string} tipo O tipo (mago, guerreiro, monge, ninja).
     */
    constructor(nome, idade, tipo) {
        // Propriedades (Variáveis)
        this.nome = nome;
        this.idade = idade;
        // Converte o tipo para minúsculas para padronizar a comparação
        this.tipo = tipo.toLowerCase();
    }

    /**
     * Método que exibe a mensagem de ataque com a descrição correta.
     */
    atacar(mago) {
        let ataque = ""; // Variável para armazenar a descrição do ataque

        // Estrutura de Decisão (if/else if) para determinar o ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            // Caso o tipo não esteja na tabela
            ataque = "um ataque desconhecido";
        }

        // Saída: Exibição da mensagem final
        console.log(`O **${this.tipo}** atacou usando **${ataque}**`);
    }
}

// ---
// ⚔️ Criação e Teste dos Objetos
// Criação de instâncias da classe Heroi (Objetos)

console.log("--- Testando Heróis ---");

const heroiMago = new Heroi("Gandalf", 2000, "Mago");
const heroiGuerreiro = new Heroi("Conan", 40, "Guerreiro");
const heroiMonge = new Heroi("Po", 25, "Monge");
const heroiNinja = new Heroi("Ryu", 30, "Ninja");
const heroiArqueiro = new Heroi("Legolas", 1000, "Arqueiro"); // Tipo não listado

// Chamada do método atacar para cada herói (Funções/Métodos)
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();
heroiArqueiro.atacar(); // Teste de caso não mapeado

console.log("-----------------------");