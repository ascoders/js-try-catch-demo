/**
 * Promise setTimeout throw Error 无法捕获
 */

function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            throw Error('用户不存在')
        })
    })
}

fetch().then(result => {
    console.log('请求处理', result)
}).catch(error => {
    console.log('请求处理异常', error)
})