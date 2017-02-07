/**
 * promise 追问
 */

function thirdFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('收敛一些')
        })
    })
}

Promise.resolve(true).then((resolve, reject) => {
    return thirdFunction()
}).catch(error => {
    console.log('捕获异常', error)
})