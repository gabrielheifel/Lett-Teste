import Mamifero from "../Mamifero";

export default class Vaca extends Mamifero {
  public somEmitido(): string {
    return "Mugido";
  }

  // public amamentar(): string {
  //   return "Amamentando!";
  // }
}
