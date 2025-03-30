
// Test där man inte fyller i något alls eller inget korrekt ord finns.
// Test där alla bokstäver är correct.
// Testar en ord där alla bokstäver är incorrect.
// Test med bokstäver där det är blandat med correct, misplaced och incorrect.
// Tester av ord som har fler av samma bokstav.
// Test av ord som blandar stora och små bostäver i både query-ordet och gissningsordet.

import { checkGuess } from './function.js';
describe('checkGuess()', () => {

    it('does nothing with empty strings', () => {
        const result = checkGuess('', '');
        expect(result).toEqual('');
    });


    it('outputs an array with objects with only correct letter', () => {
        const result = checkGuess('BANAN', 'BANAN');
        expect(result).toEqual([
            { letter: 'B', result: 'correct' },
            { letter: 'A', result: 'correct' },
            { letter: 'N', result: 'correct' },
            { letter: 'A', result: 'correct' },
            { letter: 'N', result: 'correct' }
        ]);
    });

    it('outputs an array with objects with only incorrect results', () => {
        const result = checkGuess('BANAN', 'ROLIG');
        expect(result).toEqual([
            { letter: 'B', result: 'incorrect' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'N', result: 'incorrect' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'N', result: 'incorrect' }
        ]);
    });

    it('outputs an array with objects with mixed results', () => {
        const result = checkGuess('HALLÅ', 'HYVLA');
        expect(result).toEqual([
            { letter: 'H', result: 'correct' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'L', result: 'incorrect' },
            { letter: 'L', result: 'correct' },
            { letter: 'Å', result: 'incorrect' }
        ]);
    });

    it('outputs an array with objects with mixed results', () => {
        const result = checkGuess('TOMAT', 'TOMTE');
        expect(result).toEqual([
            { letter: 'T', result: 'correct' },
            { letter: 'O', result: 'correct' },
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'T', result: 'misplaced' }
        ]);
    });

    it('tests inputs with mixed lowercase and uppercase letters', () => {
        const result = checkGuess('tOmaT', 'TOMtE');
        expect(result).toEqual([
            { letter: 'T', result: 'correct' },
            { letter: 'O', result: 'correct' },
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'T', result: 'misplaced' }
        ]);
    });

});


