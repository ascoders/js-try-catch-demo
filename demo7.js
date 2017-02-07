/**
 * try catch 包裹处理异常，主动权反转
 */

function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        })
    })
}

async function main() {
    try {
        const result = await fetch()
        console.log('请求处理', result)
    } catch (error) {
        console.log('异常', error)
    }
}

main()