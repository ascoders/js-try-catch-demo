/**
 * 业务场景
 */

const successRequest = () => Promise.resolve('a')
const failRequest = () => Promise.reject('b')

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