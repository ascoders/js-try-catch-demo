/**
 * Promise 基础
 */

/**
 * 成功
 */
const promiseA = new Promise((resolve, reject) => {
    resolve('ok')
})
promiseA.then(result => {
    console.log(result) // ok
})

/**
 * 失败
 */
const promiseB = new Promise((resolve, reject) => {
    reject('no')
})
promiseB.then(result => {
    console.log(result) // 永远不会执行
}, error => {
    console.log(error) // no
})

/**
 * 未决议
 */
const promiseC = new Promise((resolve, reject) => {
    // nothing
})
promiseC.then(result => {
    console.log(result) // 永远不会执行
}, error => {
    console.log(error) // 永远不会执行
})

/**
 * 链式结构，未捕获的 reject 会传到末尾，通过 catch 接住
 */
const promiseD = new Promise((resolve, reject) => {
    reject('no')
})
promiseD.then(result => {
    console.log(result) // 永远不会执行
}).catch(error => {
    console.log(error) // no
})

/**
 * 自动展开
 */
const promiseE = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
        resolve('ok')
    })
})
promiseE.then(result => {
    console.log(result) // ok
})

/**
 * 链式流
 */
const promiseF = new Promise((resolve, reject) => {
    resolve('ok')
})
promiseF.then(result => {
    return Promise.reject('error1')
}).then(result => {
    console.log(result) // 永远不会执行
    return Promise.resolve('ok1') // 永远不会执行
}).then(result => {
    console.log(result) // 永远不会执行
}).catch(error => {
    console.log(error) // error1
})