export function unluckyDays(year: number) {
  let date = new Date();
  let counter = 0;

  for (let month = 0; month < 12; month++) {
    date.setFullYear(year, month, 13);
    if (date.getDay() == 5) {
      counter++;
    }
  }

  return counter;
}