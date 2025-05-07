// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//four functions each, 5 

//isPhoneNumber

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('153-113-5456')).toBe(true);
});

test('valid phone number with area code', () => {
  expect(isPhoneNumber('858-735-6281')).toBe(true);
});

test('invalid phone number - contains letters', () => {
  expect(isPhoneNumber('937-hyu-3j7')).toBe(false);
});

test('invalid phone number - too long', () => {
  expect(isPhoneNumber('7329876543567882932432')).toBe(false);
});


//isEmail 
test('valid email', () => {
  expect(isEmail('example@gmail.com')).toBe(true);
});

test('valid email with ucsd', () => {
  expect(isEmail('user@ucsd.edu')).toBe(true);
});

test('invalid email - missing domain', () => {
  expect(isEmail('user@')).toBe(false);
});

test('invalid email - special characters', () => {
  expect(isEmail('user@!#.com')).toBe(false);
});

//isStrongPassword
test('isStrongPassword', () => {
  expect(isStrongPassword('Ygh87iJ7765hv')).toBe(true);
});

test('isStrongPassword', () => {
  expect(isStrongPassword('helloitsme1fi')).toBe(true);
});


test('isnotStrongPassword-too easy', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('isnotStrongPassword-too short', () => {
  expect(isStrongPassword('ash')).toBe(false);
});


//isDate
test('isDate - normal', () => {
  expect(isDate('1/18/2005')).toBe(true);
});

test('isDate short ver', () => {
  expect(isDate('5/1/2004')).toBe(true);
});


test('isDate-not valid, only day', () => {
  expect(isDate('54')).toBe(false);
});

test('isDate-has special characters', () => {
  expect(isDate('10-@-76')).toBe(false);
});

//isHexColor
test('isvalidHexColor', () => {
  expect(isHexColor('#ffcc00')).toBe(true);
});

test('isvalidHexColor', () => {
  expect(isHexColor('#f60')).toBe(true);
});


test('isnotHexColor too short', () => {
  expect(isHexColor('37')).toBe(false);
});

test('isnotHexColor-has special characters', () => {
  expect(isHexColor('!210@76')).toBe(false);
});
