const deepEqual = require('../deepEqual')

describe('deepEqual', () => {
  describe('When comparing numbers', () => {
    test('returns true for equal numbers', () => {
      expect(deepEqual(1, 1)).toBe(true)
    })

    test('returns false for different numbers', () => {
      expect(deepEqual(1, 2)).toBe(false)
    })

    test('returns true for NaN values', () => {
      expect(deepEqual(NaN, NaN)).toBe(true)
    })
  })

  describe('When comparing strings', () => {
    test('returns true for equal strings', () => {
      expect(deepEqual('hello', 'hello')).toBe(true)
    })

    test('returns false for different strings', () => {
      expect(deepEqual('hello', 'world')).toBe(false)
    })
  })

  describe('When comparing booleans', () => {
    test('returns true for equal booleans', () => {
      expect(deepEqual(true, true)).toBe(true)
    })

    test('returns false for different booleans', () => {
      expect(deepEqual(true, false)).toBe(false)
    })
  })

  describe('When comparing null and undefined', () => {
    test('returns true for null values', () => {
      expect(deepEqual(null, null)).toBe(true)
    })

    test('returns false for null and undefined', () => {
      expect(deepEqual(null, undefined)).toBe(false)
    })
  })

  describe('When comparing arrays', () => {
    test('returns true for equal arrays', () => {
      expect(deepEqual([1, 2], [1, 2])).toBe(true)
    })

    test('returns false for different arrays', () => {
      expect(deepEqual([1, 2], [3, 4])).toBe(false)
    })

    test('returns true for nested arrays', () => {
      expect(
        deepEqual(
          [
            [1, 2],
            [3, 4],
          ],
          [
            [1, 2],
            [3, 4],
          ]
        )
      ).toBe(true)
    })

    test('returns false for different nested arrays', () => {
      expect(deepEqual([1, ['a', 2]], [3, 4])).toBe(false)
    })
  })

  describe('When comparing objects', () => {
    test('returns true for equal objects', () => {
      expect(
        deepEqual({ name: 'farnia', age: 20 }, { name: 'farnia', age: 20 })
      ).toBe(true)
    })

    test('returns false for objects with different keys', () => {
      expect(
        deepEqual(
          { name: 'farnia', age: 20 },
          { name: 'farnia', job: 'software engineer' }
        )
      ).toBe(false)
    })

    test('returns false for different values', () => {
      expect(
        deepEqual({ name: 'farnia', age: 20 }, { name: 'farnia', age: 30 })
      ).toBe(false)
    })

    test('returns true for nested objects', () => {
      expect(
        deepEqual(
          { name: 'farnia', address: { city: 'New York', zip: '10001' } },
          { name: 'farnia', address: { city: 'New York', zip: '10001' } }
        )
      ).toBe(true)
    })

    test('returns false for different nested objects', () => {
      expect(
        deepEqual(
          { name: 'farnia', address: { city: 'New York', zip: '10001' } },
          { name: 'farnia', address: { city: 'New York', zip: '10002' } }
        )
      ).toBe(false)
    })

    test('returns true for deeply nested objects', () => {
      expect(
        deepEqual(
          {
            name: 'farnia',
            address: {
              home: { city: 'New York', zip: '10001' },
              office: { city: 'New York', zip: '10001' },
            },
          },
          {
            name: 'farnia',
            address: {
              home: { city: 'New York', zip: '10001' },
              office: { city: 'New York', zip: '10001' },
            },
          }
        )
      ).toBe(true)
    })

    test('returns false for different deeply nested objects', () => {
      expect(
        deepEqual(
          {
            name: 'farnia',
            address: {
              home: { city: 'New York', zip: '10001' },
              office: { city: 'New York', zip: '10001' },
            },
          },
          {
            name: 'farnia',
            address: {
              home: { city: 'New York', zip: '10001' },
              office: { city: 'New York', zip: '10002' },
            },
          }
        )
      ).toBe(false)
    })
  })

  describe('When comparing date objects', () => {
    test('return true for same date objects', () => {
      expect(deepEqual(new Date('2025.01.01'), new Date('2025.01.01'))).toBe(
        true
      )
    })

    test('return false for different date objects', () => {
      expect(deepEqual(new Date('2025.01.01'), new Date('2024.01.01'))).toBe(
        false
      )
    })

    test('return false for date and non-date objects', () => {
      expect(deepEqual(new Date('2025.01.01'), '123')).toBe(false)
    })
  })

  describe('When comparing functions', () => {
    test('returns false for functions', () => {
      const fun1 = (a, b) => {
        return a + b
      }
      const fun2 = (a, b) => {
        return a + b
      }
      expect(deepEqual(fun1, fun2)).toBe(false)
    })
  })
})
