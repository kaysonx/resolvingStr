'use strict'

const resolveStr = (sourceStr) => {
    let strArr = sourceStr.split(' ')
    return [...new Set(strArr)].map(str =>
        ({
            word: str,
            count: strArr.filter(s => s === str).length
        })
    ).sort((a, b) => b.count - a.count)
}

module.exports = resolveStr