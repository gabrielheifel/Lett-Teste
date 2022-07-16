// idade, tamanho, som

export default abstract class Animal {
  protected _idade: number;
  protected _tamanho: string;

  constructor(idade: number, tamanho: string) {
    this._idade = idade;
    this._tamanho = tamanho;
  }

  public set idade(idade: number) {
    this._idade = idade;
  }

  public set tamanho(tamanho: string) {
    this._tamanho = tamanho;
  }

  public abstract somEmitido(): string;
}

// class Main {
//   public static void main(String[] args) {
//     Pig myPig = new Pig(); // Create a Pig object
//     myPig.animalSound();
//     myPig.sleep();
//   }
// }
