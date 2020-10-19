const log = require('../log')

// log('webpack!')

export var color = 'red'
export let name = 'lin'
export const magicNumber = 7

export function sum(num1, num2) {
  return num1 + num2
}

export class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}