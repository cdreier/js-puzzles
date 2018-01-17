import underTest from '../equalsequalsequals'

describe("equals equals equals", () => {
  it("checks a == 1 && etc..", () => {
    const test = underTest == 1 && underTest == 2 && underTest == 3
    expect(test).toBeTrue()
  })
})