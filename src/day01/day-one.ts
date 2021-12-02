import { readFileSync } from 'fs';
import { DistanceChecker } from './distance-checker';
import { MovingAverageDistanceChecker } from './moving-average-distance-checker';

export class DayOne {
    private readonly distanceChecker = new DistanceChecker();
    private readonly movingAverageDistanceChecker = new MovingAverageDistanceChecker();
    private readonly path = 'src/day01/data.txt';

    private measurements: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    runA() {
        const relativeChanges = this.distanceChecker.checkRelativeChanges(this.measurements);
        const result = this.countIncreases(relativeChanges);
        console.log(`A solution complete: ${result}`);
    }

    runB() {
        const relativeChanges = this.movingAverageDistanceChecker.checkAverageShifts(this.measurements);
        const result = this.countIncreasesNumeric(relativeChanges);
        console.log(`B solution complete: ${result}`);
    }

    parseData() {
        const data = readFileSync(this.path);
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

    private countIncreasesNumeric(relativeChanges: number[]): number {
        return relativeChanges.filter(r => r > 0).length;
    }
}