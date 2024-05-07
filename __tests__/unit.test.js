// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe("isPhoneNumber", () => {
  test("Should return true for valid phone number", () =>{
    expect(isPhoneNumber("123-456-7890")).toBe(true);
  });

  test("Checks for a valid phone number (it is)", () =>{
    expect(isPhoneNumber("(619) 555-5555")).toBe(true);
  })

  test("Checks for a valid phone number (it's not)", () =>{
    expect(isPhoneNumber("6l95b5llO")).toBe(false);
  })

  test("Should return false for an invalid phone number", () =>{
    expect(isPhoneNumber("12345")).toBe(false);
  });
});

describe(isEmail, () =>{
  test("Should return true for a valid email", () => {
    expect(isEmail("email@domain.edu")).toBe(true);
  });

  test("Should return true for a valid email", () => {
    expect(isEmail("name@email.eu")).toBe(true);
  });

  test("Should return false for an invalid email", () => {
    expect(isEmail("email@domain.domain")).toBe(false);
  });

  test("Should return false for an invalid email", () => {
    expect(isEmail("realATemail.com")).toBe(false);
  });
});

describe(isStrongPassword, () =>{
  test("Should return true for a strong password", () =>{
    expect(isStrongPassword("Pass_w0rd")).toBe(true);
  });

  test("Should return true for a strong password", () =>{
    expect(isStrongPassword("N0ch4ns3")).toBe(true);
  });

  test("Should return false for a weak password", () =>{
    expect(isStrongPassword("1amW3ak")).toBe(false);
  });

  test("Should return false for a weak password", () =>{
    expect(isStrongPassword("Cs3")).toBe(false);
  });
});

describe(isDate, () =>{
  test("Should return true for a valid date", () => {
    expect(isDate("12/12/2024")).toBe(true);
  });

  test("Should return true for a valid date", () => {
    expect(isDate("06/18/2024")).toBe(true);
  });

  test("Should return false for an invalid date", () => {
    expect(isDate("05/24")).toBe(false);
  });

  test("Should return false for an invalid date", () => {
    expect(isDate("april 10, 24")).toBe(false);
  });
});

describe(isHexColor, () =>{
  test("Should return true for a valid Hex color", () => {
    expect(isHexColor("#FFF")).toBe(true);
  });

  test("Should return true for a valid Hex color", () => {
    expect(isHexColor("#A116F8")).toBe(true);
  });

  test("Should return false for an invalid Hex color", () => {
    expect(isHexColor("FF")).toBe(false);
  });

  test("Should return false for an invalid Hex color", () => {
    expect(isHexColor("#6f1111c1")).toBe(false);
  });
});
