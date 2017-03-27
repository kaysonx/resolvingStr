

describe('Resolve the String', () => {
    let resolveStr = require('../lib/resolveStr')
    it('should get word&count when given the word string is all different', () => {
        let testStr = `git`
        let expectResult = [
            { word: 'git', count: 1 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });

    it('should get word&count when given the word string contain same word', () => {
        let testStr = `git git git`
        let expectResult = [
            { word: 'git', count: 3 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });

    it('should get word&count and sort desc when given the word string', () => {
        let testStr = `add add add remote remote remote remote`
        let expectResult = [
            { word: 'remote', count: 4 },
            { word: 'add', count: 3 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });
});
