/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스라는 설계도를 구현
class Character implements CharacterInterface {

  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) { }

  move(): void {
    console.log(`${this.moveSpeed}`);
  }


}