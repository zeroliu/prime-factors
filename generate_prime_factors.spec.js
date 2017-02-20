const generatePrimeFactors = require('./generate_prime_factors');

describe('generatePrimeFactors', () => {
  it('generates empty list for 1', () => {
    expect(generatePrimeFactors(1)).toEqual([]);
  });

  it('generates [2] for 2', () => {
    expect(generatePrimeFactors(2)).toEqual([ 2 ]);
  });

  it('generates [3] for 3', () => {
    expect(generatePrimeFactors(3)).toEqual([ 3 ]);
  });

  it('generates [2, 2] for 4', () => {
    expect(generatePrimeFactors(4)).toEqual([ 2, 2 ]);
  });

  it('generates [2, 3] for 6', () => {
    expect(generatePrimeFactors(6)).toEqual([ 2, 3 ]);
  });

  it('generates [2, 2, 2] for 8', () => {
    expect(generatePrimeFactors(8)).toEqual([ 2, 2, 2 ]);
  });

  it('generates [3, 3] for 9', () => {
    expect(generatePrimeFactors(9)).toEqual([ 3, 3 ]);
  });
});

