/**
 * generator 生成器
 */

const timeOut = (time = 0) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time + 200)
    }, time)
})

/**
 * generator 写法
 */

function* main() {
    const result1 = yield timeOut(200)
    console.log(result1)
    const result2 = yield timeOut(result1)
    console.log(result2)
    const result3 = yield timeOut(result2)
    console.log(result3)
}

/**
 * 生成器
 */

function step(generator) {
    const gen = generator()
    let lastValue
    return () => Promise.resolve(gen.next(lastValue).value).then(value => {
        lastValue = value
        return lastValue
    })
}

/**
 * 执行
 */

const run = step(main)

function recursive(promise) {
    promise().then(result => {
        if (result) {
            recursive(promise)
        }
    })
}

recursive(run)