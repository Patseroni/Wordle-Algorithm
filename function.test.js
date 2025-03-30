
// Test där man inte fyller i något alls eller inget korrekt ord finns.
// Test där alla bokstäver är correct.
// Testar en ord där alla bokstäver är incorrect.
// Test med bokstäver där det är blandat med correct, misplaced och incorrect.
// Testar ord som har fler av samma bokstav.
// Testar ord som blandar stora och små bostäver i både query-ordet och gissningsordet.

import { checkGuess } from './function.js';
describe('checkGuess()', () => {

    it('does nothing with empty strings', () => {
        const result = checkGuess('', '');
        expect(result).toEqual('');
    });

    it('does nothing with empty strings', () => {
        const result = checkGuess('', 'WORDS');
        expect(result).toEqual('');
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('BANAN', 'BANAN');
        expect(result).toEqual([
            { letter: 'B', result: 'correct' },
            { letter: 'A', result: 'correct' },
            { letter: 'N', result: 'correct' },
            { letter: 'A', result: 'correct' },
            { letter: 'N', result: 'correct' }
        ]);
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('HALLÅ', 'HYVLA');
        expect(result).toEqual([
            { letter: 'H', result: 'correct' },
            { letter: 'A', result: 'misplaced' },
            { letter: 'L', result: 'incorrect' },
            { letter: 'L', result: 'correct' },
            { letter: 'Å', result: 'incorrect' }
        ]);
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('BANAN', 'ROLIG');
        expect(result).toEqual([
            { letter: 'B', result: 'incorrect' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'N', result: 'incorrect' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'N', result: 'incorrect' }
        ]);
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('TOMAT', 'TOMTE');
        expect(result).toEqual([
            { letter: 'T', result: 'correct' },
            { letter: 'O', result: 'correct' },
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'T', result: 'misplaced' },
        ]);
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('tOmaT', 'TOMTE');
        expect(result).toEqual([
            { letter: 'T', result: 'correct' },
            { letter: 'O', result: 'correct' },
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'T', result: 'misplaced' },
        ]);
    });

    it('outputs an array with objects for each correct, misplaced and incorrect letter', () => {
        const result = checkGuess('tOmaT', 'TOmtE');
        expect(result).toEqual([
            { letter: 'T', result: 'correct' },
            { letter: 'O', result: 'correct' },
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'T', result: 'misplaced' },
        ]);
    });



});


