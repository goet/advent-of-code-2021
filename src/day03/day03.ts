import { readFileSync } from 'fs';
import { BitCounter } from './bitcounter';

export class DayThree {
    private readonly bitCounter = new BitCounter();
    private readonly testDataPath = 'src/day03/testData.txt';

    private values: number[];
    private bitLength: number = -1;;

    run() {
        const vars = this.bitCounter.calculatePowerVars(this.values, this.bitLength);
        console.log(vars);
        console.log(vars.consumption());
    }

    loadTestData() {
        const input = readFileSync(this.testDataPath).toString();
        this.values = new Array<number>();
        for (const line of input.split(/\r?\n/)) {
            this.values.push(parseInt(line, 2));

            if (this.bitLength === -1) {
                this.bitLength = line.replace(/[^0-9]/g, '').length - 1;
            }
        }
    }
}
