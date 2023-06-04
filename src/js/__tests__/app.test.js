import Character from '../app';

test('объект Bowman', () => {
  const description = new Character('name1', 'Bowman');
  const result = {
    name: 'name1', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});

test('объект Swordsman', () => {
  const description = new Character('name2', 'Swordsman');
  const result = {
    name: 'name2', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});

test('объект Magician', () => {
  const description = new Character('name3', 'Magician');
  const result = {
    name: 'name3', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});

test('объект Undead', () => {
  const description = new Character('name4', 'Undead');
  const result = {
    name: 'name4', type: 'Undead', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});

test('объект Zombie', () => {
  const description = new Character('name5', 'Zombie');
  const result = {
    name: 'name5', type: 'Zombie', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});

test('объект Daemon', () => {
  const description = new Character('name6', 'Daemon');
  const result = {
    name: 'name6', type: 'Daemon', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});


test('ошибка имени', () => {
  const description = () => new Character('B', 'Daemon');
  expect(description).toThrow('в имени должно быть от 2 до 10 символов');
});

test('ошибка типа', () => {
  const description = () => new Character('fhdt', 'dgs');
  expect(description).toThrow('тип персонажа должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
