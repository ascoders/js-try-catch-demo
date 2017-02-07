/**
 * promise 追问
 */

function thirdFunction() {
    setTimeout(() => {
        throw Error('就是任性')
    })
}

Promise.resolve(true).then((resolve, reject) => {
    thirdFunction()
}).catch(error => {
    console.log('捕获异常', error)
})