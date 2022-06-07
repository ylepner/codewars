export function launchAll(launchMissile: (i: number) => void, delay = 1000) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * delay);
  }
}

