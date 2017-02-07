/**
 * 回调，无法捕获异常
 */

function fetch(callback) {
    setTimeout(() => {
        throw Error('请求失败')
    })
}

try {
    fetch(() => {
        console.log('请求处理')
    })
} catch (error) {
    console.log('触发异常', error)
}