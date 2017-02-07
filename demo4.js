/**
 * Promise 推荐用 reject 抛出异常
 */

function fetch(callback) {
    let myCount = count++
    return new Promise((resolve, reject) => {
        reject('用户不存在')
    })
}

fetch().then(result => {
    console.log('请求处理2', result)
}).catch(error => {
    console.log('请求处理2异常', error)
})