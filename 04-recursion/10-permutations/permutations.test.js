const permutations = require('./permutations');

test('Permutations', () => {
  console.log("permutations('abc')=", permutations('abc'));
  expect(permutations('abc')).toEqual([
    'abc',
    'acb',
    'bac',
    'bca',
    'cab',
    'cba',
  ]);
  expect(permutations('dog')).toEqual([
    'dog',
    'dgo',
    'odg',
    'ogd',
    'gdo',
    'god',
  ]);
  expect(permutations('')).toEqual(['']);
});
