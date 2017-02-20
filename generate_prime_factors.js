const generatePrimeFactors = function(n) {
  const primes = [];
  for (candidate = 2; n > 1; candidate++) {
    for (; n % candidate === 0; n /= candidate) {
      primes.push(candidate);
    }
  }
  return primes;
};

module.exports = generatePrimeFactors;

