const generatePrimeFactors = require('./generate_prime_factors');

describe('generatePrimeFactors', () => {
  it('generates empty list for 1', () => {
    expect(generatePrimeFactors(1)).toEqual([]);
  });

  it('generates [2] for 2', () => {
    expect(generatePrimeFactors(2)).toEqual([ 2 ]);
  });
});

