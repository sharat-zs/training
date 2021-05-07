const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('should return fizz when divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })

    it('should return buzz when divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz')
    })

    it('should return fizzbuzz when divisble by 15', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })

    it('should return number when not divisble by 3,5,15', () => {
        expect(fizzBuzz(7)).toBe(7)
    })
})
