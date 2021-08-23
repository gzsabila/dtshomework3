const Convert = require("./convert");

test("test cel to rea", () => {
  const calc = new Convert();
  expect(calc.fromCelcius('rea',25)).toBe(20);
});

test("test rea to fahr", () => {
  const calc = new Convert();
  expect(calc.fromReamur('fahr',25)).toBe(88.25);
});

test("test fahr to kel", () => {
  const calc = new Convert();
  expect(calc.fromFahrenheit('kel',25)).toBeCloseTo(269.261);
});

test("test kel to rea", () => {
  const calc = new Convert();
  expect(calc.fromKelvin('rea',25)).toBeCloseTo(-198.52);
});
