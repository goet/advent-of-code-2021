import { readFileSync } from 'fs';
import { DiagnosticsParser } from './diagnostics';

export class DayThree {
    public readonly testDataPath = 'src/day03/testData.txt';
    public readonly dataPath = 'src/day03/data.txt';
    public readonly data2Path = 'src/day03/data2.txt';

    private readonly diagnostics = new DiagnosticsParser();

    private values: number[];
    private bitLength: number = -1;;

    run() {
        const power = this.diagnostics.calculatePowerVars(this.values, this.bitLength);
        console.log(power);
        console.log(power.consumption());
        const lifeSupport = this.diagnostics.findLifeSupportData(this.values, this.bitLength);
        console.log(lifeSupport);
        console.log(lifeSupport.rating());
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
