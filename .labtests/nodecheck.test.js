describe('Arrow Functions Lab', () => {
    test('greet arrow function should be exported', async () => {
        const greet = await import('/home/damner/code/index').then(
            (t) => t.default
        );

        expect(typeof greet === 'function').to.be.true;
    });

    test('greet arrow function should return the correct greeting', async () => {
        const greet = await import('/home/damner/code/index').then(
            (t) => t.default
        );

        expect(greet('John')).to.equal('Hello, John!');
    });
});