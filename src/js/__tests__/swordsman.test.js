import Swordsman from '../swordsman';

test('Получим объект swordsman', () => {
  const description = new Swordsman('swordsman');
  const result = {
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});
