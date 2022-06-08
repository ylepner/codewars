export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string) {
  if (enteredCode === correctCode) {
    if (new Date(expirationDate).getTime() - new Date(currentDate).getTime() >= 0) {
      return true
    }
  }
  return false
}