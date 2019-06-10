import calculate from "../Components/calculate.js";

describe("Calculate", () => {
  let expression;

  //First Test to test all common operations
  it("evaluates the expression correctly", () => {
    expression = "2+3+4-4*3";
    expect(calculate(expression)).toBe(-3);

    expression = "0+3+4";
    expect(calculate(expression)).toBe(7);

    expression = "0-9";
    expect(calculate(expression)).toBe(-9);

    expression = "0.5+2.3";
    expect(calculate(expression)).toBe(2.8);
  });
  // Second Test to test Negative Number operation
  it('evaluates expressions starting with a "-" operator', () => {
    expression = "-30";
    expect(calculate(expression)).toBe(-30);
  });
  // Third Test to test more than one expression with negative operator
  it('evaluates longer expressions starting with a "-" operator', () => {
    expression = "-30-6";
    expect(calculate(expression)).toBe(-36);

    expression = "-0.5+5.3";
    expect(calculate(expression)).toBe(4.8);
  });
  // Fourth Test to test expressions starting with any other operator otgher than Negative
  it('should throw an error for expressions starting with any other operator apart from "-" ', () => {
    expression = "*30-6";
    expect(calculate(expression)).toThrow();

    expression = "*3";
    expect(calculate(expression)).toThrow();

    expression = "+4-6";
    expect(calculate(expression)).toThrow();

    expression = "/4-6";
    expect(calculate(expression)).toThrow();
  });
  // Fifth Test to test trailing operators
  it("ignores trailing operators while evaluating the expression correctly", () => {
    expression = "2+3+4-4*3-";
    expect(calculate(expression)).toBe(-3);
  });
  // Sixth test ti test every expression after multiple operators
  it("ignores every expression after multiple operators while evaluating the expression correctly", () => {
    expression = "2+3++4-/4*3+78-";
    expect(calculate(expression)).toBe(5);
  });
});
