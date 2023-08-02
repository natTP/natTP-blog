export const getRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const getRandCombination = (arr, combinationLen) => {
    let arrCopy = arr.slice()

    let randIdx
    let res = []
    for (let i = 0; i < combinationLen; i++) {
        randIdx = getRandInt(0, arrCopy.length - 1)
        res.push(arrCopy.splice(randIdx, 1)[0])
    }

    return res
}
