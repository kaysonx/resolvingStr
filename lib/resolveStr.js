'use strict'

const resolveStr = (sourceStr) => {
    let strArr = sourceStr.split(' ')
    let resolvedArr = [...new Set(strArr)].map(str => {
        return {
            word: str,
            count: strArr.filter(s => s === str).length
        }
    })
    return sortArr(resolvedArr)
}

const sortArr = (unsortedArr) => {
    let sortedArr = []
    unsortedArr.forEach(item => {
        let currentMaxItem = item
        unsortedArr.forEach(tmpItem => {
            if (tmpItem.count > currentMaxItem.count) {
                currentMaxItem = tmpItem
            }
        })
        sortedArr.push(Object.assign({}, currentMaxItem))
        currentMaxItem.count = 0
    })
    return sortedArr
}
module.exports = resolveStr