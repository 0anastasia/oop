import Magician from '../magician';

test('Получим объект magician', () => {
  const description = new Magician('magician');
  const result = {
    name: 'magician', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});