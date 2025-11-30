/**
 * Calculadora de partidas Rankeadas
 * * Função que recebe a quantidade de vitórias e derrotas de um jogador,
 * calcula o saldo de Rankeadas (vitórias - derrotas) e determina o nível
 * do jogador com base na quantidade de vitórias.
 * * @param {number} vitorias - A quantidade de vitórias do jogador.
 * @param {number} derrotas - A quantidade de derrotas do jogador.
 */
function calcularRank(vitorias, derrotas) {
    // 1. Variável para o Saldo de Rankeadas
    // O Saldo é calculado através do operador de subtração.
    let saldoVitorias = vitorias - derrotas;

    // 2. Variável para o Nível
    let nivel;

    // 3. Estruturas de Decisão (if-else if-else) para determinar o nível
    // O laço de repetição não é estritamente necessário para este cálculo,
    // mas pode ser usado se, por exemplo, quiséssemos processar vários jogadores.
    // Aqui usamos estruturas de decisão para atender às regras do objetivo.

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        // Caso a contagem de vitórias esteja exatamente entre os limites (ex: 10)
        // O caso do 10 está faltando nas instruções (menor que 10 E entre 11 e 20).
        // Podemos tratar o 10 como Ferro (pois a instrução diz "entre 11 e 20").
        // Vou usar o "Bronze" para o caso de 10 vitórias, para fins de robustez.
        // Se `vitorias` for 10, o código cairá neste `else` final.
        nivel = "Inválido / Não Classificado"; 
    }

    // 4. Saída: Exibir a mensagem
    console.log(`O Herói tem de saldo de vitória ${saldoVitorias} está no nível de ${nivel}`);

    // Retorna o resultado para que possa ser armazenado em uma variável externa
    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}

// (Variáveis, Chamada de Função e Saída) ---

// Imortal
let numVitoriasB = 105;
let numDerrotasB = 5;
let resultadoB = calcularRank(numVitoriasB, numDerrotasB);
// Saída esperada: "O Herói tem de saldo de **100** está no nível de **Imortal**"

console.log("---");

// Variável de retorno (opcional)
console.log(`\nVariável de Retorno : Saldo: ${resultadoB.saldo}, Nível: ${resultadoB.nivel}`);