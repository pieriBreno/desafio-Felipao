// nome e quantidade de XP do Herói
let nomeDoHeroi = "Breno Master"
let xpDoHeroi = 15000

// Utilizar Switch Case para determinar o nível do nosso herói

let nivelDoHeroi = ""

//o Switch não valida expressões booleanas ou condições, desta forma,
//utilizei o comando Switch(true) para que permita avaliar a condição &&
switch (true) {
case xpDoHeroi < 1000:
     nivelDoHeroi = "Ferro ";
     break

case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    nivelDoHeroi = "Bronze ";
    break;

case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
     nivelDoHeroi = "Prata ";
     break;

case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
     nivelDoHeroi = "Ouro ";

case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
     nivelDoHeroi = "Platina ";
     break

case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
     nivelDoHeroi = "Ascendente ";
     break

case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
     nivelDoHeroi = "Imortal ";
     break

case xpDoHeroi >=10001:
     nivelDoHeroi = "Radiante ";
     break

     default:
        nivelDoHeroi = "Nível Desconhecido"
}

console.log("O Herói de nome " + nomeDoHeroi + 
" está no nível de " + nivelDoHeroi)


