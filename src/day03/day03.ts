import { readFileSync } from 'fs';
import { BitCounter } from './bitcounter';

export class DayThree {
    public readonly testDataPath = 'src/day03/testData.txt';
    public readonly dataPath = 'src/day03/data.txt';

    private readonly bitCounter = new BitCounter();

    private values: number[];
    private bitLength: number = -1;;

    run() {
        const vars = this.bitCounter.calculatePowerVars(this.values, this.bitLength);
        console.log(vars);
        console.log(vars.consumption());
        console.log(this.bitCounter.findO2GenRating(this.values, this.bitLength));
    }

    loadData(path: string) {
        const input = readFileSync(path).toString();
        this.values = new Array<number>();
        for (const line of input.split(/\r?\n/)) {
            this.values.push(parseInt(line, 2));

            if (this.bitLength === -1) {
                this.bitLength = line.replace(/[^0-9]/g, '').length - 1;
            }
        }
    }
}
