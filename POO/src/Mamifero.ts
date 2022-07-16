import Animal from "./Animal";

export default abstract class Mamifero extends Animal {
  protected corDosPelos: string;

  constructor(
    idade: number,
    tamanho: string,
    corDosPelos: string
  ) {
    super(idade, tamanho);
    this.corDosPelos = corDosPelos;
  }

  public get getCorDosPelos(): string {
    return this.corDosPelos;
  }

  public abstract somEmitido(): string;

  public amamentar(): string {
    return "Amamentando!";
  }
}
