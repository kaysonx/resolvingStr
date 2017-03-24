

describe('Resolve the String', () => {
    let resolveStr = require('../lib/resolveStr')
    it('should get word&count when given the different word string', () => {
        let testStr = `git remote add origin`
        let expectResult = [
            { word: 'git', count: 1 },
            { word: 'remote', count: 1 },
            { word: 'add', count: 1 },
            { word: 'origin', count: 1 }
        ]
        expect(resolveStr(testStr)).toEqual(expectResult)
    });

});
