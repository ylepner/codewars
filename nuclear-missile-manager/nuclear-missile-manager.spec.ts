import { expect } from 'chai';
import { launchAll } from './nuclear-missile-manager';

describe('Nuclear Missile Manager, 6kyu, https://www.codewars.com/kata/nuclear-missile-manager', () => {
  it('should launch 5 missiles each 1 second apart', async () => {
    const arr: Array<{ rocketNumber: number, t: number }> = [];
    function launchMissile(i: number) {
      arr.push({ rocketNumber: i, t: performance.now() - start })
      console.log('Rocket launch')
    }
    launchAll(launchMissile, 100);
    const start = performance.now();
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(arr.length).to.be.eq(5);
    const epsilonMs = 15;
    for (let i = 0; i < 5; i++) {
      expect(arr[i].t).to.approximately(i * 100, epsilonMs);
      expect(arr[i].rocketNumber).to.be.eq(i);
    }
  })
})

