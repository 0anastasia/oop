import Character from '../character';

test('Получим объект character', () => {
  const description = new Character('dfg');
  const result = {
    name: 'dfg', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});

test('Получим ошибку имени', () => {
  const description = () => new Character('12345678910');
  expect(description).toThrow('в имени должно быть от 2 до 10 символов');
});

// levelup

test('повышение уровня персонажа', () => {
  const description = new Character('abc');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'abc', health: 100, level: 2, attack: 12, defense: 12,
  };
  expect(description).toEqual(result);
});

test('нельзя повысить уровень умершего', () => {
  function test() {
    const description = new Character('abc');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить уровень умершего');
});
