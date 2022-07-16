import Mamifero from "../Mamifero";
import { Voo } from "../Voo";

export default class Morcego extends Mamifero implements Voo {
  public somEmitido(): string {
    return "Farfalho";
  }

  public voar(): string {
    return "Morcego voa baixo";
  }
}
