const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('invalid args')), 1000)
})

const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(500), 2000)
})

const nestedPromise = new Promise((resolve) => {
    resolve(
        new Promise((res) => {
            res(100)
        })
    )
})
// nestedPromise.then((res) => console.log(res))

// promise
//     .then((res) => {
//         return res
//     })
//     .then((res) => console.log(res))
//     .catch((e) => console.error(e))

function funcOld() {
    return new Promise((res) => res(5))
}

// async function func() {
//     const res = await nestedPromise
//     console.log(res)
//     console.log(await funcOld())
//     try {
//         await promise
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// }

// async function handleRequest(){
//     validateRequest()
//     await Promise.all(dbQuery, httpCall)
//     return response
// }

// dangling promises
const parallelFunc = async () => {
    console.log(await Promise.all([promise, slowPromise]))
}

const parallelFunc2 = async () => {
    console.log(await Promise.allSettled([promise, slowPromise]))
}

parallelFunc()
parallelFunc2()
