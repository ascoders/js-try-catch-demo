/**
 * 异常在顶层统一处理
 */
(() => {

    const asyncClass = (errorHandler?: (error?: Error) => void) => (target: any) => {
        Object.getOwnPropertyNames(target.prototype).forEach(key => {
            const func = target.prototype[key]
            target.prototype[key] = async (...args: any[]) => {
                try {
                    await func.apply(this, args)
                } catch (error) {
                    errorHandler && errorHandler(error)
                }
            }
        })
        return target
    }

    const successRequest = () => Promise.resolve('a')
    const failRequest = () => Promise.reject('b')

    const iAsyncClass = asyncClass(error => {
        console.log('统一异常处理', error)
    })

    @iAsyncClass
    class Action {
        async successReuqest() {
            const result = await successRequest()
            console.log('successReuqest', '处理返回值', result)
        }

        async failReuqest() {
            const result = await failRequest()
            console.log('failReuqest', '处理返回值', result)
        }

        async allReuqest() {
            const result1 = await successRequest()
            console.log('allReuqest', '处理返回值 success', result1)
            const result2 = await failRequest()
            console.log('allReuqest', '处理返回值 success', result2)
        }
    }

    const action = new Action()
    action.successReuqest()
    action.failReuqest()
    action.allReuqest()

})()