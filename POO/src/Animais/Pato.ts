import Ave from "../Ave";
import { Voo } from "../Voo";

export default class Pato extends Ave implements Voo {
  public somEmitido(): string {
    return "Grasnido";
  }

  public voar(): string {
    return "Pato voa alto";
  }
}
