describe("equals equals equals", () => {

  beforeEach(() => {
    jest.resetModules()
  })

  it("checks a == 1", () => {
    const underTest = require('../equalsequalsequals').default
    const test = underTest == 1
    expect(test).toBe(true)
  })
  it("checks a == 1 && a == 2", () => {
    const underTest = require('../equalsequalsequals').default
    const test = underTest == 1 && underTest == 2
    expect(test).toBe(true)
  })
  it("checks a == 1 && etc..", () => {
    const underTest = require('../equalsequalsequals').default
    const test = underTest == 1 && underTest == 2 && underTest == 3
    expect(test).toBe(true)
  })

})