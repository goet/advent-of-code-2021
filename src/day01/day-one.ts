import { readFile, readFileSync } from 'fs';
import { DistanceChecker } from './distance-checker';

export class DayOne {
    private readonly distanceChecker = new DistanceChecker();

    private measurements: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    run() {
        this.parseData('src/day01/data.txt');
        const relativeChanges = this.distanceChecker.checkRelativeChanges(this.measurements);
        const result = this.countIncreases(relativeChanges);
        console.log(result);
    }

    private parseData(path: string) {
        const data = readFileSync(path);
        const rawInput = data.toString();
        const input = rawInput.split(/\r?\n/);
        
        this.measurements = new Array<number>();
        for (const line of input) {
            this.measurements.push(Number.parseInt(line));
        }
    }

    private countIncreases(relativeChanges: string[]): number {
        return relativeChanges.filter(r => r === this.distanceChecker.increase).length;
    }
}