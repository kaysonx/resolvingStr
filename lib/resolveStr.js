'use strict'

const resolveStr = (sourceStr) => {
    let strArr = sourceStr.split(' ')
    return [...new Set(strArr)].map(str => {
        return {
            word: str,
            count: strArr.filter(s => s === str).length
        }
    })
}

module.exports = resolveStr