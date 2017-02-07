/**
 * 回调，不受控制的错误处理
 */

function fetch(callback) {
    setTimeout(() => {
        console.log('请求失败')
    })
}

fetch(() => {
    console.log('请求处理')
})