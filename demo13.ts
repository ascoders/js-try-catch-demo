/**
 * 业务方有权选择是否主动处理异常，不处理则将异常冒泡给顶层统一处理
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
            try {
                const result1 = await successRequest()
                console.log('allReuqest', '处理返回值 success', result1)
                const result2 = await failRequest()
                console.log('allReuqest', '处理返回值 success', result2)
            } catch (error) {
                // 阻止错误冒泡
                // 业务代码中捕获错误直接处理
                console.log('自定义异常处理', error)
            }
        }
    }

    const action = new Action()
    action.successReuqest()
    action.failReuqest()
    action.allReuqest()

})()