/**
 * generator 简介
 */

/**
 * 可以中断的函数
 */
function* generatorA() {
    console.log('a')
    yield
    console.log('b')
}
const genA = generatorA()
genA.next()
genA.next()

/**
 * 传值
 */
function* generatorB(count) {
    console.log(count)
    const result = yield 5
    console.log(result * count)
}
const genB = generatorB(2)
genB.next() // 2
const genBValue = genB.next(7) // 14
// genBValue = 5
