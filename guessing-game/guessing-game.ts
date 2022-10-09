

export class GuessingGame {
  min: number;
  max: number;
  guessNumber: number;
  constructor() { }

  setRange(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNumber = Math.round((this.min + this.max) / 2)
    return this.guessNumber
  }

  lower() {
    this.max = this.guessNumber
  }

  greater() {
    this.min = this.guessNumber
  }
}