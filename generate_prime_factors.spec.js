const generatePrimeFactors = require('./generate_prime_factors');

describe('generatePrimeFactors', () => {
  it('generates empty list for 1', () => {
    expect(generatePrimeFactors(1)).toEqual([]);
  });
});

