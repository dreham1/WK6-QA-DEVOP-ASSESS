const {shuffleArray, Arr} = require('./utils')

describe('shuffleArray should', () => {
    test('expect array to contain shuffle Array', () => {
        expect(shuffleArray).toBe(shuffleArray)
    })


    test('expect Arr to have an array of [5,6,7,8]',() => {
       expect(Arr).toBe([5,6,7,8])
    })
    
})