const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZ_BUZZ = 'fizzbuzz'

/**
 * @description Write a function which prints fizz when number is divisble by 3
 *              Prints buzz when divisible by 5
 *                      fizzbuzz when divisible by 15
 *                      otherwise print the number itself
 */
function fizBuzz() {
    for (let i = 1; i < 100; i++) {
        const fizz = i % 3 === 0
        const buzz = i % 5 === 0
        if (fizz && buzz) console.log(FIZZ_BUZZ)
        else if (fizz) console.log(FIZZ)
        else if (buzz) console.log(BUZZ)
        else console.log(i)
    }
}

fizBuzz()