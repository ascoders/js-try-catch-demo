/**
 * try catch 无法包裹 setTimeout 中 throw Error
 */

function fetch(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            throw Error()
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