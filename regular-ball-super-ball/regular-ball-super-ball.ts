export class Ball {
  ballType: string

  constructor(ballType?: string) {
    if (ballType === 'super') {
      this.ballType = 'super'
    } else {
      this.ballType = 'regular'
    }
  }
}