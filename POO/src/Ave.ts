import Animal from "./Animal";

export default abstract class Ave extends Animal {
  private corDasPenas: string;

  constructor(
    idade: number,
    tamanho: string,
    corDasPenas: string
  ) {
    super(idade, tamanho);
    this.corDasPenas = corDasPenas;
  }

  public get getCorDasPenas(): string {
    return this.corDasPenas;
  }

  public abstract somEmitido(): string;

  public botarOvos(): string {
    return "Botando ovo!";
  }
}
