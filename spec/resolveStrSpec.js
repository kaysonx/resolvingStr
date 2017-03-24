

describe('Resolve the String', () => {
    let resolveStr = require('../lib/resolveStr')
    it('should get word&count when given the word string is all different', () => {
        let testStr = `git remote add origin`
        let expectResult = [
            { word: 'git', count: 1 },
            { word: 'remote', count: 1 },
            { word: 'add', count: 1 },
            { word: 'origin', count: 1 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });

    it('should get word&count when given the word string contain same word', () => {
        let testStr = `git remote add origin git remote add git remote git`
        let expectResult = [
            { word: 'git', count: 4 },
            { word: 'remote', count: 3 },
            { word: 'add', count: 2 },
            { word: 'origin', count: 1 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });

    it('should get word&count and sort desc when given the word string', () => {
        let testStr = `git remote add origin remote add add remote git remote remote remote remote`
        let expectResult = [
            { word: 'remote', count: 7 },
            { word: 'add', count: 3 },
            { word: 'git', count: 2 },
            { word: 'origin', count: 1 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });
});
