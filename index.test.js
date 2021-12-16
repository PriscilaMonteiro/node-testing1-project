describe('[0]Checking Sanity', () => {
  test('[0]sanity', () => { 
    expect(true).toBe(true) 
    expect(true).not.toBe(false) 
  })
})
const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({foo: '  foo ', bar: 'bar ', baz: ' baz'})
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual=utils.trimProperties(input)
    expect(actual).toEqual({ foo: 'foo', bar: 'bar', baz: 'baz' })
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 10}, {integer: 2}, {integer: 103}]
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(103)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()//if negative here it is wrong
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const distance = focus.drive(10)
    expect(distance).toBe(10)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(20);
    expect(focus.tank).toBeLessThan(20)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(100);
    const startingTank = focus.tank;
    focus.refuel(10);
    const finalTank = focus.tank;
    expect(finalTank).toBeGreaterThan(startingTank);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(99);
    expect(focus.tank).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async() => {
    const result = await utils.isEvenNumberAsync(8);
    expect(result).toBe(true);
  })
  test('[20] resolves false if passed an odd number', async() => {
    const result = await utils.isEvenNumberAsync(11);
    expect(result).toBe(false);
  })
})
