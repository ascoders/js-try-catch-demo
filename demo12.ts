/**
 * 异常在顶层统一处理 方法级别
 */
(() => {

    const asyncMethod = (errorHandler?: (error?: Error) => void) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const func = descriptor.value
        return {
            get() {
                return (...args: any[]) => {
                    return Promise.resolve(func.apply(this, args)).catch(error => {
                        errorHandler && errorHandler(error)
                    })
                }
            },
            set(newValue: any) {
                return newValue
            }
        }
    }

    const successRequest = () => Promise.resolve('a')
    const failRequest = () => Promise.reject('b')

    const asyncAction = asyncMethod(error => {
        console.log('统一异常处理', error)
    })

    class Action {
        @asyncAction async successReuqest() {
            const result = await successRequest()
            console.log('successReuqest', '处理返回值', result)
        }

        @asyncAction async failReuqest() {
            const result = await failRequest()
            console.log('failReuqest', '处理返回值', result)
        }

        @asyncAction async allReuqest() {
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