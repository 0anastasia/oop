export default class Character {
  constructor(name) {
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error('в имени должно быть от 2 до 10 символов');
    }
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defense *= 1.2;
  }
}
