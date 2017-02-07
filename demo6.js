/**
 * async await 错误处理
 */

function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        })
    })
}

async function main() {
    const result = await fetch()
    console.log('请求处理', result)
}

main()