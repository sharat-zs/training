const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZ_BUZZ = FIZZ + BUZZ

/**
 * @description
 */
function fizzBuzz(num) {
    const fizz = num % 3 === 0
    const buzz = num % 5 === 0
    if (fizz && buzz) return FIZZ_BUZZ
    if (fizz) return FIZZ
    if (buzz) return BUZZ
    return num
}

module.exports = fizzBuzz
