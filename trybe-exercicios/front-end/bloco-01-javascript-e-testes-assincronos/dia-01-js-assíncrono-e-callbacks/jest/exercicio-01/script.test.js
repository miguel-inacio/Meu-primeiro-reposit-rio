const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testa função uppercase', () => {
  it('Ao receber a string banana, retorna BANANA', (done) => {
    uppercase('banana',(string) => {
      try {
        expect(string).toEqual('BANANA');
        done();
      } catch (error) {
        done(error)
      }
    })
  })
})