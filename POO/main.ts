import prompt from "prompt-sync";
import Morcego from "./src/Animais/Morcego";
import Pato from "./src/Animais/Pato";
import Vaca from "./src/Animais/Vaca";
import Galinha from "./src/Animais/Galinha";

let pato: Pato = new Pato(2, "medio", "marrom");
let galinha: Galinha = new Galinha(1, "medio", "branca");
let vaca: Vaca = new Vaca(5, "grande", "mesclada");
let morcego: Morcego = new Morcego(10, "pequeno", "preto");

let teclado = prompt();
let option: number = 0;

while (option !== 11) {
  console.log("+========= Opção =========+");
  console.log("|1. Info do pato          |");
  console.log("|2. Info da galinha       |");
  console.log("|3. Info da vaca          |");
  console.log("|4. Info do morcego       |");
  console.log("|5. Som do pato           |");
  console.log("|6. Som da galinha        |");
  console.log("|7. Som da vaca           |");
  console.log("|8. Som do morcego        |");
  console.log("|9. Voar com pato         |");
  console.log("|10. Voar com morcego     |");
  console.log("|11. Para sair            |");
  console.log("+=========================+");

  option = +teclado("Escolha uma ação: ");

  switch (option) {
    case 1:
      console.log("Pato :>> ", pato + "\n");
      break;
    case 2:
      console.log("Galinha :>> ", galinha + "\n");
      break;
    case 3:
      console.log("Vaca :>> ", vaca + "\n");
      break;
    case 4:
      console.log("Morcego :>> ", morcego + "\n");
      break;
    case 5:
      console.log(pato.somEmitido() + "\n");
      break;
    case 6:
      console.log(galinha.somEmitido() + "\n");
      break;
    case 7:
      console.log(vaca.somEmitido() + "\n");
      break;
    case 8:
      console.log(morcego.somEmitido() + "\n");
      break;
    case 9:
      console.log(pato.voar() + "\n");
      break;
    case 10:
      console.log(morcego.voar() + "\n");
      break;
    default:
      break;
  }
}
// ===== Exemplos de outras chamadas =====
// console.log(vaca.getCorDosPelos);
// console.log(galinha.getCorDosPelos);
// console.log(pato.getCorDosPelos);
// console.log(morcego.getCorDosPelos);
// console.log(vaca.amamentar())
// console.log(morcego.amamentar())
// console.log(pato.botarOvos())
// console.log(galinha.botarOvos())
