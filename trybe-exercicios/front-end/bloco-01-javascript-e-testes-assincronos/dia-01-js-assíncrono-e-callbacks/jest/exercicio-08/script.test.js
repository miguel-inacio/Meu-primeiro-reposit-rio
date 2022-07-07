// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./script");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Chikorita', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`;

    const filter = (pokemon) => pokemon.name === 'Squirtle';

    function callback(error, result) {
      expect(result).toEqual(expectedResult);
      done();
    }

    getPokemonDetails(filter, callback);
  });
});

// 10

// 1be
// 1test
// 1ae
// 1be
// 2be
// 2test
// 2ae
// 1ae

