import * as subject from './key-casing'

describe('transformKeys', () => {
  test('should shallowly transform the keys of an object', () => {
    const expected = {
      SOME: { 'deep-nested': { value: true } },
      'OTHER-VALUE': true,
    }
    const result = subject.transformKeys(
      {
        some: { 'deep-nested': { value: true } },
        'other-value': true,
      },
      (key) => key.toUpperCase(),
    )
    expect(result).toEqual(expected)
  })

  test('should handle null properly', () => {
    const expected = null
    const result = subject.constantKeys(null)
    expect(result).toEqual(expected)
    type test = Expect<Equal<typeof result, typeof expected>>
  })
})

test('camelKeys', () => {
  const expected = {
    some: { 'deep-nested': { value: true } },
    otherValue: true,
  }
  const result = subject.camelKeys({
    some: { 'deep-nested': { value: true } },
    'other-value': true,
  })
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})

test('constantKeys', () => {
  const expected = {
    SOME: { deepNested: { value: true } },
    OTHER_VALUE: true,
  }
  const result = subject.constantKeys({
    some: { deepNested: { value: true } },
    otherValue: true,
  })
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})

test('delimiterKeys', () => {
  const expected = {
    some: { 'deep-nested': { value: true } },
    'other@value': true,
  }
  const result = subject.delimiterKeys(
    {
      some: { 'deep-nested': { value: true } },
      'other-value': true,
    },
    '@',
  )
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})

test('kebabKeys', () => {
  const expected = {
    some: { deepNested: { value: true } },
    'other-value': true,
  }
  const result = subject.kebabKeys({
    some: { deepNested: { value: true } },
    otherValue: true,
  })
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})

test('pascalKeys', () => {
  const expected = {
    Some: { deepNested: { value: true } },
    OtherValue: true,
  }
  const result = subject.pascalKeys({
    some: { deepNested: { value: true } },
    otherValue: true,
  })
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})

test('snakeKeys', () => {
  const expected = {
    some: { deepNested: { value: true } },
    other_value: true,
  }
  const result = subject.snakeKeys({
    some: { deepNested: { value: true } },
    otherValue: true,
  })
  expect(result).toEqual(expected)
  type test = Expect<Equal<typeof result, typeof expected>>
})
