const totalSalas = parseInt(prompt("Informe o número total de salas:"));

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

for (let sala = 1; sala <= totalSalas; sala++) {
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    if (temTesouro) {
        console.log("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        console.log("Monstro na sala " + sala + "!");
    }
}

//Tesouro na sala 2!
//Monstro na sala 3!
//Tesouro na sala 4!
//Monstro na sala 6!
//Tesouro na sala 7!
//Monstro na sala 8!