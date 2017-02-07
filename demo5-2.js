/**
 * async await 是语法糖
 */

const timeOut = (time = 0) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time + 200)
    }, time)
})

/**
 * async await 写法
 */

async function main() {
    const result1 = await timeOut(200)
    console.log(result1)
    const result2 = await timeOut(result1)
    console.log(result2)
    const result3 = await timeOut(result2)
    console.log(result3)
}

main()