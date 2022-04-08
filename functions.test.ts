const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffle Array should return array', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
    })

    test('shuffle Array should return array of same lenght', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(result.lenght).toEqual(arr.length)
    })

    


    
})