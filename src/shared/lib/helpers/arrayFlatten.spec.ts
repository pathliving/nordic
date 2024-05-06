import { arrayFlatten } from "./arrayFlatten";

describe('arrayFlatter module', () => {
    test('try to flat the array', () => {
        expect(arrayFlatten([1, [2, 3, [4]], 5, {a: 1}])).toEqual([1, 2, 3, [4], 5, {a: 1}]);
    })
})
