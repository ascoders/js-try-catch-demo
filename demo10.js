/**
 * 主动权完全交给业务方
 */

const successRequest = () => Promise.resolve('a')
const failRequest = () => Promise.reject('b')

class Action {
    async successReuqest() {
        try {
            const result = await successRequest()
            console.log('successReuqest', '处理返回值', result)
        } catch (error) {
            console.log('successReuqest 主动错误处理' , error)
        }
    }

    async failReuqest() {
        try {
            const result = await failRequest()
            console.log('failReuqest', '处理返回值', result)
        } catch (error) {
            console.log('failReuqest 主动错误处理' , error)
        }
    }

    async allReuqest() {
        try {
            const result1 = await successRequest()
            console.log('allReuqest', '处理返回值 success', result1)
            const result2 = await failRequest()
            console.log('allReuqest', '处理返回值 success', result2)
        } catch (error) {
            console.log('allReuqest 主动错误处理' , error)
        }
    }
}

const action = new Action()
action.successReuqest()
action.failReuqest()
action.allReuqest()