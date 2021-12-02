export class MovingAverageDistanceChecker {
    checkAverageShifts(values: number[]): number[] {
        const result = new Array<number>();
        
        let lastWindow: number = this.createWindow(values, 0);
        for (let i = 1; i < values.length - 2; i++) {
            const currentWindow = this.createWindow(values, i);
            result.push(currentWindow - lastWindow);
            lastWindow = currentWindow;
        }

        return result;
    }

    private createWindow(values: number[], i: number): number {
        return values[i] + values[i + 1] + values[i + 2];
    }
}